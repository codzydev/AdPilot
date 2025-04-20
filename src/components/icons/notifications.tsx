import { Margin } from "@/constants";
import { RootNaviatorPramList } from "@/routes";
import { resetToTabWithStackScreens } from "@/utils";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { FC, useCallback } from "react";
import { TouchableOpacity } from "react-native";

type Props = {
  iconColor: string;
};

export const Notification: FC<Props> = ({ iconColor }) => {
  const navigation = useNavigation<RootNaviatorPramList>();

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
