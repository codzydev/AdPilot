import {
  BottomTabParamList,
  RootStackParamList,
  SettingStackParamList,
} from "@/types";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ROUTES, TAB_NAMES } from "../Routes";

export type SettingsScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<SettingStackParamList, typeof ROUTES.SETTINGS_SCREEN>,
  CompositeNavigationProp<
    BottomTabNavigationProp<BottomTabParamList, typeof TAB_NAMES.SETTINGS>,
    StackNavigationProp<RootStackParamList>
  >
>;

export type NotificationsScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<
    SettingStackParamList,
    typeof ROUTES.NOTIFICATIONS_SCREEN
  >,
  CompositeNavigationProp<
    BottomTabNavigationProp<BottomTabParamList, typeof TAB_NAMES.SETTINGS>,
    StackNavigationProp<RootStackParamList>
  >
>;
