import { Margin } from "@/constants";
import { navigationRef } from "@/routes/ref/navigationRef";
import { Ionicons } from "@expo/vector-icons";
import React, { FC, useCallback } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

type Props = {
  iconColor: string;
};
export const ArrowBack: FC<Props> = ({ iconColor }) => {
  const onPress = useCallback(() => {
    navigationRef.goBack();
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
