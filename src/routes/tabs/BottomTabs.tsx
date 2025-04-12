import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  AssistantScreen,
  CampaignScreens,
  DashboardScreen,
  PerformanceScrees
} from "@/screens";

import { Padding } from "@/constants";
import { useThemeColor } from "@/hooks";
import { Ionicons } from "@expo/vector-icons";
import { BottomTabParamList } from "../../types";
import { TAB_NAMES } from "../Routes";
import {
  defaultScreenOptions,
  defaultShadowOptions,
  useScreenWithHeaderOptions,
} from "../options";
import SettingsStack from "../stack/SettingsStack";
import { TabLabel } from "./TabLabel";

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabs() {
  const backgroundColor = useThemeColor({}, "background");
  const borderColor = useThemeColor({}, "border");
  return (
    <Tab.Navigator
      initialRouteName={TAB_NAMES.DASHBOARD}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ size, focused }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "home";
          const tabIconSelected = useThemeColor({}, "tabIconSelected");
          const tabIconDefault = useThemeColor({}, "tabIconDefault");
          const colour = focused ? tabIconSelected : tabIconDefault;
          switch (route.name) {
            case TAB_NAMES.DASHBOARD:
              iconName = "grid";
              break;
            case TAB_NAMES.PERFORMANCE:
              iconName = "stats-chart";
              break;
            case TAB_NAMES.ASSISTANCE:
              iconName = "help-circle";
              break;
            case TAB_NAMES.CAMPAIGNS:
              iconName = "megaphone";
              break;
            case TAB_NAMES.SETTINGS:
              iconName = "settings";
              break;
          }
          return (
            <TabLabel
              label={route.name}
              iconName={iconName}
              size={size}
              focused={focused}
            />
          );
        },

        tabBarLabel: ({ focused }) => null,

        tabBarStyle: {
          backgroundColor,
          ...defaultShadowOptions,
          shadowColor: borderColor,
          height: 85,
          paddingTop: Padding.SMALL,
        },
      })}
    >
      <Tab.Screen
        name={TAB_NAMES.DASHBOARD}
        component={DashboardScreen}
        options={useScreenWithHeaderOptions()}
      />
      <Tab.Screen
        name={TAB_NAMES.PERFORMANCE}
        component={PerformanceScrees}
        options={defaultScreenOptions}
      />
      <Tab.Screen
        name={TAB_NAMES.ASSISTANCE}
        component={AssistantScreen}
        options={defaultScreenOptions}
      />
      <Tab.Screen
        name={TAB_NAMES.CAMPAIGNS}
        component={CampaignScreens}
        options={defaultScreenOptions}
      />
      <Tab.Screen
        name={TAB_NAMES.SETTINGS}
        component={SettingsStack}
        options={defaultScreenOptions}
      />
    </Tab.Navigator>
  );
}
