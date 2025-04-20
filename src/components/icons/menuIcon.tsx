import { Margin } from "@/constants";
import { RootNaviatorPramList, ROUTES } from "@/routes";
import { navigationRef } from "@/routes/ref/navigationRef";
import { RootStackParamList } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { FC, useCallback } from "react";
import { TouchableOpacity } from "react-native";

type Props = {
  iconColor: string;
};
export const MenuIcon: FC<Props> = ({ iconColor }) => {
  const navigation = useNavigation<RootNaviatorPramList>();

  const handleMenuPress = useCallback(() => {
    navigation.navigate("fullScreen", { name: "MENU 123" });
    // navigationRef.navigate(ROUTES.DRAWER_SCREEN);
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
