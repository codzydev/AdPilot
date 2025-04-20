import { Margin } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import React, { FC } from "react";
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {
  onPress: () => void;
  iconColor: string;
};
export const ArrowBack: FC<Props> = ({ onPress, iconColor }) => {
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
