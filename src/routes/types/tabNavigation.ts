import { BottomTabParamList, RootStackParamList } from "@/types";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TAB_NAMES } from "../Routes";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type DashboardNavProp = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabParamList, "Dashboard">,
  StackNavigationProp<RootStackParamList>
>;