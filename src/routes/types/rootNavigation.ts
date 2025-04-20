import { RootStackParamList } from "@/types";
import { StackNavigationProp } from "@react-navigation/stack";
import { ROOT_STACK } from "../Routes";

export type RootNaviatorPramList = StackNavigationProp<
  RootStackParamList,
  typeof ROOT_STACK
>;
