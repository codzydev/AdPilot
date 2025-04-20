import { BottomTabParamList, RootStackParamList } from "@/types";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TAB_NAMES } from "../Routes"; // Ensure TAB_NAMES is exported as an enum or object
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type DashboardNavProp = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabParamList, typeof TAB_NAMES.DASHBOARD>,
  StackNavigationProp<RootStackParamList>
>;
