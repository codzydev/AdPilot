import { ROOT_TABS, ROUTES } from "@/routes";

export type RootStackParamList = {
  [ROOT_TABS]: undefined;
  [ROUTES.FULL_SCREEN]: { name: string };
};
