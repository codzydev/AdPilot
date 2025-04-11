import { NotificationsScreen, SettingsScreen } from "@/screens";
import { SettingStackParamList } from "@/types";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { defaultScreenOptions } from "../options";
import { ROUTES } from "../Routes";

const Stack = createStackNavigator<SettingStackParamList>();

const SettingsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ ...defaultScreenOptions }}>
      <Stack.Screen name={ROUTES.SETTINGS_SCREEN} component={SettingsScreen} />
      <Stack.Screen
        name={ROUTES.NOTIFICATIONS_SCREEN}
        component={NotificationsScreen}
      />
    </Stack.Navigator>
  );
};

export default SettingsStack;
