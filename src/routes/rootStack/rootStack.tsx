import { DrawerScreen, FullScreen } from "@/screens";
import { RootStackParamList } from "@/types";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { ROOT_TABS, ROUTES } from "../Routes";
import BottomTabs from "../tabs/BottomTabs";
import { View } from "react-native";

const Stack = createStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name={ROOT_TABS} component={BottomTabs} /> */}
      <Stack.Screen name={ROOT_TABS} component={BottomTabs} />
      <Stack.Screen
        name={ROUTES.FULL_SCREEN}
        component={FullScreen}
        options={{
          presentation: "card",
          ...TransitionPresets.ModalSlideFromBottomIOS,
          headerShown: true,
        }}
      />
      <Stack.Screen
        name={ROUTES.DRAWER_SCREEN}
        component={DrawerScreen}
        options={{
          headerShown: false,
          presentation: "transparentModal", // yes, keep this!
          cardStyle: {
            backgroundColor: "transparent",
          },
          cardStyleInterpolator:
            TransitionPresets.SlideFromLeftIOS.cardStyleInterpolator,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
