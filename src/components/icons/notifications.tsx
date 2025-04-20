import { Margin } from "@/constants";
import { ROUTES, TAB_NAMES } from "@/routes";
import { navigationRef, resetToTabWithStack } from "@/routes/ref/navigationRef";
import { RootStackParamList } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "expo-router";
import React, { FC, useCallback } from "react";
import { TouchableOpacity } from "react-native";

type Props = {
  iconColor: string;
};

export const Notification: FC<Props> = ({ iconColor }) => {
  const handleMenuPress = useCallback(() => {
    resetToTabWithStack(TAB_NAMES.SETTINGS, [
      { name: ROUTES.SETTINGS_SCREEN },
      { name: ROUTES.NOTIFICATIONS_SCREEN, params: { id: "Akash SDK" } },
    ]);
  }, []);

  return (
    <TouchableOpacity onPress={() => handleMenuPress()}>
      <Ionicons
        name="notifications"
        size={24}
        color={iconColor}
        style={{ marginRight: Margin.MEDIUM }}
      />
    </TouchableOpacity>
  );
};
