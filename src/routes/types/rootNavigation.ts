import { RootStackParamList } from "@/types";
import { StackNavigationProp } from "@react-navigation/stack";
import { ROOT_STACK, ROUTES } from "../Routes";

export type RootNaviatorPramList = StackNavigationProp<
  RootStackParamList,
  typeof ROOT_STACK
>;

export type FullScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  typeof ROUTES.FULL_SCREEN
>;

export type ProductViewScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  typeof ROUTES.PRODUCT_VIEW_SCREEN
>;
