import { BottomTabParamList } from "@/types";
import { RouteProp } from "@react-navigation/native";
import { TAB_NAMES } from "../Routes";

export type DashboardRouteProp = RouteProp<
  BottomTabParamList,
  typeof TAB_NAMES.DASHBOARD
>;
