import { ThemedText } from "@/components";
import { useIsDarkMode, useThemeColor } from "@/hooks";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { StyleSheet, useColorScheme, View } from "react-native";
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

const BORDER_WIDTH = 4;
const ICON_WIDTH = 40;
export const TabLabel = ({ label, iconName, size, focused }: Props) => {
  const activeColor = useThemeColor({}, "tabIconSelected");
  const inactiveColor = useThemeColor({}, "tabIconDefault");
  const iconBg = focused ? activeColor : "transparent";
  const iconColor = focused ? "#fff" : inactiveColor;
  const textColor = focused ? activeColor : inactiveColor;
  const scale = useSharedValue(1);
  const translateY = useSharedValue(0);
  const backgroundColor = useThemeColor({}, "background");

  useEffect(() => {
    scale.value = withTiming(focused ? 1.1 : 0.9, {
      duration: 200,
      easing: Easing.out(Easing.exp),
    });
    translateY.value = withTiming(focused ? -12 : 0, {
      duration: 200,
      easing: Easing.out(Easing.exp),
    });
  }, [focused]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }, { scale: scale.value }],
  }));

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      {focused ? (
        <View
          style={{
            width: ICON_WIDTH + BORDER_WIDTH * 2,
            height: ICON_WIDTH + BORDER_WIDTH * 2,
            borderRadius: (ICON_WIDTH + BORDER_WIDTH * 2) / 2,
            backgroundColor,
            alignItems: "center",
            justifyContent: "center",
            shadowOffset: { width: 0, height: 0 },
            shadowColor: activeColor,
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 4,
          }}
        >
          <View
            style={{
              width: ICON_WIDTH,
              height: ICON_WIDTH,
              borderRadius: ICON_WIDTH / 2,
              backgroundColor: iconBg,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons name={iconName} size={18} color={iconColor} />
          </View>
        </View>
      ) : (
        <Ionicons name={iconName} size={size} color={iconColor} />
      )}
      <ThemedText
        lightColor={textColor}
        darkColor={textColor}
        size="xxSmall"
        font={focused ? "bold" : "regular"}
        style={{ marginTop: 4 }}
      >
        {label.toUpperCase()}
      </ThemedText>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
