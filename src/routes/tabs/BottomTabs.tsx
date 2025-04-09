import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  AssistantScreen,
  CampaignScreens,
  DashboardScreen,
  PerformanceScrees,
  SettingsScreen,
} from "@/screens";

import { Padding } from "@/constants";
import { useThemeColor } from "@/hooks";
import { Ionicons } from "@expo/vector-icons";
import { RootTabParamList } from "../../types";
import { TabNames } from "../Routes";
import {
  defaultScreenOptions,
  defaultShadowOptions,
  useScreenWithHeaderOptions,
} from "../options";
import { TabLabel } from "./TabLabel";

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabs() {
  const backgroundColor = useThemeColor({}, "background");
  const borderColor = useThemeColor({}, "border");
  return (
    <Tab.Navigator
      initialRouteName={TabNames.DASHBOARD}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ size, focused }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "home";
          const tabIconSelected = useThemeColor({}, "tabIconSelected");
          const tabIconDefault = useThemeColor({}, "tabIconDefault");
          const colour = focused ? tabIconSelected : tabIconDefault;
          switch (route.name) {
            case TabNames.DASHBOARD:
              iconName = "grid";
              break;
            case TabNames.PERFORMANCE:
              iconName = "stats-chart";
              break;
            case TabNames.ASSISTANCE:
              iconName = "help-circle";
              break;
            case TabNames.CAMPAIGNS:
              iconName = "megaphone";
              break;
            case TabNames.SETTINGS:
              iconName = "settings";
              break;
          }
          return <Ionicons name={iconName} size={size} color={colour} />; //iconSize = 25
        },

        tabBarLabel: ({ focused }) => (
          <TabLabel label={route.name} focused={focused} />
        ),

        tabBarStyle: {
          backgroundColor,
          ...defaultShadowOptions,
          shadowColor: borderColor,
          height: 85,
          paddingTop: Padding.SMALL / 2,
        },
      })}
    >
      <Tab.Screen
        name={TabNames.DASHBOARD}
        component={DashboardScreen}
        options={useScreenWithHeaderOptions()}
      />
      <Tab.Screen
        name={TabNames.PERFORMANCE}
        component={PerformanceScrees}
        options={defaultScreenOptions}
      />
      <Tab.Screen
        name={TabNames.ASSISTANCE}
        component={AssistantScreen}
        options={defaultScreenOptions}
      />
      <Tab.Screen
        name={TabNames.CAMPAIGNS}
        component={CampaignScreens}
        options={defaultScreenOptions}
      />
      <Tab.Screen
        name={TabNames.SETTINGS}
        component={SettingsScreen}
        options={defaultScreenOptions}
      />
    </Tab.Navigator>
  );
}
