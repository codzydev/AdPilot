import { RootStackParamList } from "@/types";
import { RouteProp } from "@react-navigation/native";
import { ROUTES } from "../Routes";

export type FullScreenRouteProp = RouteProp<
  RootStackParamList,
  typeof ROUTES.FULL_SCREEN
>;
