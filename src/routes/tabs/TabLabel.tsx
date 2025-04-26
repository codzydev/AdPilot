import { ThemedIcon, ThemedText } from "@/components";
import { useThemeColor } from "@/hooks";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { StyleSheet, TouchableOpacity, ViewStyle } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

type Props = {
  label: string;
  iconName: keyof typeof Ionicons.glyphMap;
  size: number;
  focused: boolean;
  style?: ViewStyle;
  onPress: () => void;
};

export const TabLabel = ({
  label,
  iconName,
  size,
  focused,
  style,
  onPress,
}: Props) => {
  const activeColor = useThemeColor({}, "tabIconSelected");
  const inactiveColor = useThemeColor({}, "tabIconDefault");
  const iconColor = focused ? activeColor : inactiveColor;
  const textColor = focused ? activeColor : inactiveColor;

  const scale = useSharedValue(1);
  const indicatorScaleX = useSharedValue(0);
  const indicatorOpacity = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(focused ? 1 : 0.85, {
      damping: 10,
      stiffness: 100,
    });
    indicatorScaleX.value = withSpring(focused ? 1 : 0.5);
    indicatorOpacity.value = withTiming(focused ? 1 : 0);
  }, [focused]);

  const iconAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const indicatorAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scaleX: indicatorScaleX.value }],
    opacity: indicatorOpacity.value,
  }));

  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      {/* ICON */}
      <Animated.View style={[styles.iconContainer, iconAnimatedStyle]}>
        <ThemedIcon
          iconName={iconName}
          iconColor={iconColor}
          iconSize="small"
          onPress={onPress}
        />
      </Animated.View>
      {/* LABEL */}
      <ThemedText
        lightColor={textColor}
        darkColor={textColor}
        size="xxSmall"
        style={{ marginTop: 4 }}
        font={focused ? "bold" : "regular"}
      >
        {label.toUpperCase()}
      </ThemedText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10, // enough room for the pill indicator above
  },
});
