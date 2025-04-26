import { HIT_SLOP_SMALL, Margin } from "@/constants";
import { IconSize, IconSizeMap } from "@/constants/iconSize"; // ✅ Import your IconSize setup
import { useThemeColor } from "@/hooks";
import { Ionicons } from "@expo/vector-icons";
import React, { FC } from "react";
import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";

type ThemedIconProps = {
  iconName: keyof typeof Ionicons.glyphMap;
  iconColor?: string;
  iconSize?: keyof IconSizeMap; // ✅ Reuse IconSizeMap here
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
};

export const ThemedIcon: FC<ThemedIconProps> = ({
  iconName,
  iconColor = "#000",
  iconSize = "medium", // ✅ Default size from your map
  onPress,
  style,
  disabled = false,
}) => {
  const sizeValue = IconSize[iconSize]; // ✅ Directly reuse IconSize map
  const color = useThemeColor({}, "icon");

  return (
    <TouchableOpacity
      onPress={onPress}
      hitSlop={HIT_SLOP_SMALL}
      disabled={disabled}
      style={style}
      activeOpacity={0.7}
    >
      <Ionicons name={iconName} size={sizeValue} color={iconColor ?? color} />
    </TouchableOpacity>
  );
};
