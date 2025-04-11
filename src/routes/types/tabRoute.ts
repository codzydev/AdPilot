import { RootTabParamList } from "@/types";
import { RouteProp } from "@react-navigation/native";
import { TAB_NAMES } from "../Routes";

export type DashboardRouteProp = RouteProp<
  RootTabParamList,
  typeof TAB_NAMES.DASHBOARD
>;

export type SettingsRouteProp = RouteProp<
  RootTabParamList,
  typeof TAB_NAMES.SETTINGS
>;
