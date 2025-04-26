import { ThemedIcon, ThemedText } from "@/components";
import { useThemeColor } from "@/hooks";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { StyleSheet, TouchableOpacity, ViewStyle } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

type Props = {
  label: string;
  iconName: keyof typeof Ionicons.glyphMap;
  size: number;
  focused: boolean;
  style?: ViewStyle;
  onPress: () => void;
};

const ICON_WIDTH = 40;

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
  const iconBg = focused ? activeColor : "transparent";
  const iconColor = focused ? activeColor : inactiveColor;
  const textColor = focused ? activeColor : inactiveColor;
  const scale = useSharedValue(1);

  useEffect(() => {
    scale.value = withSpring(focused ? 1 : 0.75, {
      damping: 10,
      stiffness: 100,
    });
  }, [focused]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={[styles.container, style]}
    >
      <Animated.View style={[styles.iconContainer]}>
        <Animated.View style={[styles.iconContainer, animatedStyle]}>
          <ThemedIcon
            iconName={iconName}
            iconColor={iconColor}
            onPress={() => onPress()}
          />
        </Animated.View>
      </Animated.View>
      <ThemedText
        lightColor={textColor}
        darkColor={textColor}
        size="xxSmall"
        style={{ marginTop: 4 }}
      >
        {label.toUpperCase()}
      </ThemedText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-end",
  },
  iconContainer: {
    // height: ICON_WIDTH,
    // justifyContent: "center",
    // alignItems: "center",
  },
  bubble: {},
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
