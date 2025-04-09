import { ThemedText } from "@/components";
import { useThemeColor } from "@/hooks";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type Props = {
  label: string;
  iconName: keyof typeof Ionicons.glyphMap;
  size: number;
  focused: boolean;
};

export const TabLabel = ({ label, iconName, size, focused }: Props) => {
  const tabIconSelected = useThemeColor({}, "tabIconSelected");
  const tabIconDefault = useThemeColor({}, "tabIconDefault");
  const textColor = focused ? tabIconSelected : tabIconDefault;

  const scale = useSharedValue(1);

  useEffect(() => {
    scale.value = withTiming(focused ? 1.25 : 1, {
      duration: 300,
      easing: Easing.inOut(Easing.ease),
    });
  }, [focused]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Ionicons name={iconName} size={size} color={textColor} />
      <ThemedText lightColor={textColor} darkColor={textColor} size="xxSmall">
        {label}
      </ThemedText>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
  },
});
