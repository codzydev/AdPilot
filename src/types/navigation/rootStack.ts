import { DrawerParamList, ROOT_TABS, ROUTES } from "@/routes";
import { NavigatorScreenParams } from "@react-navigation/native";

export type RootStackParamList = {
  [ROOT_TABS]: NavigatorScreenParams<DrawerParamList>;
  [ROUTES.FULL_SCREEN]: { name: string };
};
