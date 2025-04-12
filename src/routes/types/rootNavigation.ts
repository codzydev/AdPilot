import { RootStackParamList } from "@/types";
import { StackNavigationProp } from "@react-navigation/stack";
import { ROUTES } from "../Routes";

export type FullScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  typeof ROUTES.FULL_SCREEN
>;
