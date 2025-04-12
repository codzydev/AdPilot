import { NotificationsScreen, SettingsScreen } from "@/screens";
import { SettingStackParamList } from "@/types";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { defaultScreenOptions, useScreenWithBackOptions } from "../options";
import { ROUTES } from "../Routes";

const Stack = createStackNavigator<SettingStackParamList>();

const SettingsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.SETTINGS_SCREEN}
        component={SettingsScreen}
        options={defaultScreenOptions}
      />
      <Stack.Screen
        name={ROUTES.NOTIFICATIONS_SCREEN}
        component={NotificationsScreen}
        options={useScreenWithBackOptions()} // ✅ runs inside correct render context
      />
    </Stack.Navigator>
  );
};

export default SettingsStack;
