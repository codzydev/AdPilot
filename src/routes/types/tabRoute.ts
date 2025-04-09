import { RootTabParamList } from "@/types";
import { RouteProp } from "@react-navigation/native";
import { TabNames } from "../Routes";

export type DashboardRouteProp = RouteProp<
  RootTabParamList,
  typeof TabNames.DASHBOARD
>;
