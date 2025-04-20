import { Margin } from "@/constants";
import { navigationRef } from "@/routes/ref/navigationRef";
import { RootStackParamList } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { FC, useCallback } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

type Props = {
  iconColor: string;
};
type NavigationProp = StackNavigationProp<RootStackParamList>;
export const ArrowBack: FC<Props> = ({ iconColor }) => {
  const navigation = useNavigation<NavigationProp>();
  const onPress = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons
        name="chevron-back-outline"
        size={24}
        color={iconColor}
        style={{ marginLeft: Margin.MEDIUM }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  conatainer: { flex: 1, justifyContent: "center", alignItems: "center" },
});
