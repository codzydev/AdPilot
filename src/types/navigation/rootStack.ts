import { AUTH_STACK, ROOT_STACK, ROUTES } from "@/routes";
import { NavigatorScreenParams } from "@react-navigation/native";
import { BottomTabParamList } from "./tabNavigation";

export type RootStackParamList = {
  [ROOT_STACK]: NavigatorScreenParams<BottomTabParamList>;
  [ROUTES.FULL_SCREEN]: { name: string };
  [AUTH_STACK]: undefined;
};
