import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";

export const SearchIcon = ({
  iconColor,
  onPress,
}: {
  iconColor: string;
  onPress?: () => void;
}) => (
  <TouchableOpacity onPress={onPress} style={{ paddingRight: 12 }}>
    <Ionicons name="search" size={22} color={iconColor} />
  </TouchableOpacity>
);
