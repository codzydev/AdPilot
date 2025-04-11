import { SettingStackParamList } from "@/types";
import { RouteProp } from "@react-navigation/native";
import { ROUTES } from "../Routes";

export type SettingsScreenRouteProp = RouteProp<
  SettingStackParamList,
  typeof ROUTES.SETTINGS_SCREEN
>;

export type NotificationsScreenRouteProp = RouteProp<
  SettingStackParamList,
  typeof ROUTES.NOTIFICATIONS_SCREEN
>;
