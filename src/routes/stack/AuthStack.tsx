import { AuthStackParamList } from "@/types";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { defaultScreenOptions } from "../options";
import { ROUTES } from "../Routes";
import { LoginScreen, OnboardingScreen } from "@/screens";

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.ONBORDING_SCREEN}
        component={OnboardingScreen}
        options={defaultScreenOptions}
      />
      <Stack.Screen
        name={ROUTES.LOGIN_SCREEN}
        component={LoginScreen}
        options={{
          ...defaultScreenOptions,
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
