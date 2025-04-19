import { DRAWER, DrawerParamList, ROOT_TABS, ROUTES } from "@/routes";
import { NavigatorScreenParams } from "@react-navigation/native";

export type RootStackParamList = {
  [DRAWER]: undefined;
  [ROUTES.FULL_SCREEN]: { name: string };
  [ROUTES.DRAWER_SCREEN]: { name: string };
};
