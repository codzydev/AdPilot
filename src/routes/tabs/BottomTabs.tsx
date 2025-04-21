import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  AssistantScreen,
  CampaignScreens,
  DashboardScreen,
  PerformanceScrees,
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
  useScreenWithSearchBarOptions,
  // useScreenWithSearchOptions,
} from "../options";
import SettingsStack from "../stack/SettingsStack";
import { TabLabel } from "./TabLabel";
import CustomTabBar from "./CustomTabBar";

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabs() {
  const backgroundColor = useThemeColor({}, "background");
  const borderColor = useThemeColor({}, "border");
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: true }}
      tabBar={(props) => <CustomTabBar {...props} />}
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
