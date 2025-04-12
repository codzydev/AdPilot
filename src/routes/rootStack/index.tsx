import { FullScreen } from "@/screens";
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
    </Stack.Navigator>
  );
};

export default RootNavigator;
