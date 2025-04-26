import { RootStackParamList } from "@/types";
import { RouteProp } from "@react-navigation/native";
import { ROUTES } from "../Routes";

export type FullScreenRouteProp = RouteProp<
  RootStackParamList,
  typeof ROUTES.FULL_SCREEN
>;

export type ProductViewScreenRouteProp = RouteProp<
  RootStackParamList,
  typeof ROUTES.PRODUCT_VIEW_SCREEN
>;
