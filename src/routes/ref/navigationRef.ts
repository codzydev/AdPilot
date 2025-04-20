// navigationRef.ts
import {
  createNavigationContainerRef,
  StackActions,
  CommonActions,
} from "@react-navigation/native";
import type { BottomTabParamList, RootStackParamList } from "@/types"; // <- adjust to your types
import { ROOT_TABS, TAB_NAMES } from "../Routes";
import { ValueOf } from "react-native-gesture-handler/lib/typescript/typeUtils";

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function resetToTabWithStack<
  TTabName extends keyof BottomTabParamList,
  TStackScreens extends { name: string; params?: Record<string, any> }[]
>(tabName: TTabName, stackScreens: TStackScreens) {
  if (!navigationRef.isReady()) return;

  navigationRef.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [
        {
          name: "RootTabs", // make sure this matches your RootStack name
          state: {
            routes: [
              {
                name: tabName,
                state: {
                  routes: stackScreens,
                },
              },
            ],
          },
        },
      ],
    })
  );
}
