import { Margin } from "@/constants";
import { ROUTES } from "@/routes";
import { navigationRef } from "@/routes/ref/navigationRef";
import { Ionicons } from "@expo/vector-icons";
import React, { FC, useCallback } from "react";
import { TouchableOpacity } from "react-native";

type Props = {
  iconColor: string;
};

export const MenuIcon: FC<Props> = ({ iconColor }) => {
  const handleMenuPress = useCallback(() => {
    navigationRef.navigate(ROUTES.DRAWER_SCREEN);
  }, []);

  return (
    <TouchableOpacity onPress={() => handleMenuPress()}>
      <Ionicons
        name="menu"
        size={24}
        color={iconColor}
        style={{ marginLeft: Margin.MEDIUM }}
      />
    </TouchableOpacity>
  );
};
