import { CommonActions } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList, BottomTabParamList } from "@/types";

type NestedScreen = {
  name: string;
  params?: Record<string, any>;
};

type Navigation = StackNavigationProp<RootStackParamList>;

/**
 * Reset navigation to a specific tab and push a stack of screens inside it.
 * @param navigation Navigation object from useNavigation
 * @param tabName The tab to switch to (must exist in BottomTabParamList)
 * @param stackScreens The stack screens to push inside the tab (order matters)
 */
export const resetToTabWithStackScreens = (
  navigation: Navigation,
  tabName: keyof BottomTabParamList,
  stackScreens: NestedScreen[]
) => {
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [
        {
          name: "rootTabs", // Your root navigator name
          state: {
            index: 0,
            routes: [
              {
                name: tabName,
                state: {
                  index: stackScreens.length - 1,
                  routes: stackScreens,
                },
              },
            ],
          },
        },
      ],
    })
  );
};
