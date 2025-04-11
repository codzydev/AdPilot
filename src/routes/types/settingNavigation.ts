import { RootTabParamList, SettingStackParamList } from "@/types";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ROUTES } from "../Routes";

export type SettingsScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<SettingStackParamList, typeof ROUTES.SETTINGS_SCREEN>,
  BottomTabNavigationProp<RootTabParamList>
>;

export type NotificationsScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<
    SettingStackParamList,
    typeof ROUTES.NOTIFICATIONS_SCREEN
  >,
  BottomTabNavigationProp<RootTabParamList>
>;
