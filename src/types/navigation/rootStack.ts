import { DRAWER, ROOT_TABS, ROUTES } from "@/routes";
import { BottomTabParamList } from "./tabNavigation";
import { NavigatorScreenParams } from "@react-navigation/native";

export type RootStackParamList = {
  [ROOT_TABS]: NavigatorScreenParams<BottomTabParamList>;
  [ROUTES.FULL_SCREEN]: { name: string };
  [ROUTES.DRAWER_SCREEN]: { name: string };
};
