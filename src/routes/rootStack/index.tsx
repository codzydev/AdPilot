import { DrawerScreen, FullScreen } from "@/screens";
import { RootStackParamList } from "@/types";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { ROOT_TABS, ROUTES } from "../Routes";
import BottomTabs from "../tabs/BottomTabs";

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name={ROOT_TABS} component={BottomTabs} /> */}
      <Stack.Screen name={ROOT_TABS} component={BottomTabs} />
      <Stack.Screen
        name={ROUTES.FULL_SCREEN}
        component={FullScreen}
        options={{
          presentation: "modal",
          ...TransitionPresets.ModalSlideFromBottomIOS,
          headerShown: true,
        }}
      />
      <Stack.Screen
        name={ROUTES.DRAWER_SCREEN}
        component={DrawerScreen}
        options={{
          presentation: "transparentModal",
          headerShown: false,
          cardOverlayEnabled: false, // disable RN's overlay
          cardStyle: {
            backgroundColor: "transparent",
          },
          cardStyleInterpolator: ({ current, layouts }) => ({
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-layouts.screen.width, 0], // from left
                  }),
                },
              ],
            },
          }),
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
