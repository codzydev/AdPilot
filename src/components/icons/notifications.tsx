import { Margin } from "@/constants";
import {
  RootStackParamList
} from "@/types";
import { resetToTabWithStackScreens } from "@/utils";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { FC, useCallback } from "react";
import { TouchableOpacity } from "react-native";

type Props = {
  iconColor: string;
};

type NavigationProp = StackNavigationProp<RootStackParamList>;
export const Notification: FC<Props> = ({ iconColor }) => {
  const navigation = useNavigation<NavigationProp>();

  const handleMenuPress = useCallback(() => {
    resetToTabWithStackScreens(navigation, "settings", [
      { name: "settingsScreen" },
      { name: "notificationsScreen", params: { id: "123" } },
    ]);
  }, [navigation]);

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
