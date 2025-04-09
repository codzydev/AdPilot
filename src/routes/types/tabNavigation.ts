import { RootTabParamList } from "@/types";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabNames } from "../Routes";

export type DashboardNavProp = BottomTabNavigationProp<
  RootTabParamList,
  typeof TabNames.DASHBOARD
>;
