import { RootTabParamList } from "@/types";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TAB_NAMES } from "../Routes";

export type DashboardNavProp = BottomTabNavigationProp<
  RootTabParamList,
  typeof TAB_NAMES.DASHBOARD
>;
