import { TAB_NAMES } from "@/routes";
import { NavigatorScreenParams } from "@react-navigation/native";
import { SettingStackParamList } from "./settingsStack";

export type BottomTabParamList = {
  [TAB_NAMES.DASHBOARD]: undefined;
  [TAB_NAMES.PERFORMANCE]: undefined;
  [TAB_NAMES.ASSISTANCE]: undefined;
  [TAB_NAMES.CAMPAIGNS]: undefined;
  [TAB_NAMES.SETTINGS]: NavigatorScreenParams<SettingStackParamList>;
};
