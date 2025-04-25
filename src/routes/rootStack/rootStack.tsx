import { FullScreen } from "@/screens";
import { RootStackParamList } from "@/types";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { AUTH_STACK, ROOT_STACK, ROUTES } from "../Routes";
import BottomTabs from "../tabs/BottomTabs";
import { defaultScreenOptions } from "../options";
import AuthStack from "../stack/AuthStack";

const Stack = createStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name={ROOT_TABS} component={BottomTabs} /> */}
      {/* <Stack.Screen name={AUTH_STACK} component={AuthStack} /> */}
      <Stack.Screen
        name={ROOT_STACK}
        component={BottomTabs}
        options={{
          ...defaultScreenOptions,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name={ROUTES.FULL_SCREEN}
        component={FullScreen}
        options={{
          presentation: "card",
          ...TransitionPresets.ModalSlideFromBottomIOS,
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
