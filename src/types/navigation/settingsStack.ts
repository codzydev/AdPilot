import { ROUTES } from "@/routes";


export type SettingRouteNames = typeof ROUTES[keyof typeof ROUTES];

export type SettingStackParamList = {
  [ROUTES.SETTINGS_SCREEN]: undefined;
  [ROUTES.NOTIFICATIONS_SCREEN]: {id: string};
};

