import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  AssistantScreen,
  CampaignScreens,
  DashboardScreen,
  PerformanceScrees,
  SettingsScreen,
} from "@/screens";

import { useThemeColor } from "@/hooks";
import { Ionicons } from "@expo/vector-icons";
import { RootTabParamList } from "../../types";
import { TabNames } from "../Routes";
import { defaultScreenOptions } from "../options";
import { TabLabel } from "./TabLabel";

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabs() {
  const backgroundColor = useThemeColor({}, "background");
  const borderColor = useThemeColor({}, "border");
  return (
    <Tab.Navigator
      initialRouteName={TabNames.DASHBOARD}
      screenOptions={({ route }) => ({
        ...defaultScreenOptions,
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
          backgroundColor: backgroundColor,
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.25,
          shadowColor: borderColor,
          height: 85,
          paddingTop: 4,
        },
      })}
    >
      <Tab.Screen name={TabNames.DASHBOARD} component={DashboardScreen} />
      <Tab.Screen name={TabNames.PERFORMANCE} component={PerformanceScrees} />
      <Tab.Screen name={TabNames.ASSISTANCE} component={AssistantScreen} />
      <Tab.Screen name={TabNames.CAMPAIGNS} component={CampaignScreens} />
      <Tab.Screen name={TabNames.SETTINGS} component={SettingsScreen} />
    </Tab.Navigator>
  );
}
