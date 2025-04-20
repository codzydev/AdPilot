import { Margin } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import React, { FC } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

type Props = {
  iconColor: string;
  onPress: () => void;
};
export const ArrowBack: FC<Props> = ({ iconColor, onPress }) => {

  return (
    <TouchableOpacity onPress={() => onPress()}>
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
