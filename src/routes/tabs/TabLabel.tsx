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
    // translateY.value = withTiming(focused ? -14 : 0, {
    //   duration: 200,
    //   easing: Easing.out(Easing.exp),
    // });
  }, [focused]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }, { scale: scale.value }],
  }));

  return (
    <Animated.View style={[styles.container]}>
      <View style={styles.iconContainer}>
        <Animated.View style={[animatedStyle]}>
          {focused ? (
            <View
              style={[
                styles.activeBubble,
                { backgroundColor, shadowColor: iconBg },
              ]}
            >
              <View style={[styles.innerIcon, { backgroundColor: iconBg }]}>
                <Ionicons name={iconName} size={18} color={iconColor} />
              </View>
            </View>
          ) : (
            <Ionicons name={iconName} size={size} color={iconColor} />
          )}
        </Animated.View>
      </View>

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
    justifyContent: "flex-end",
    // backgroundColor: "pink",
    // // height: 65, // match tab bar height
  },
  iconContainer: {
    height: ICON_WIDTH, // enough room for bubble + margin
    justifyContent: "flex-end",
    alignItems: "center",
  },
  activeBubble: {
    borderRadius: (ICON_WIDTH + BORDER_WIDTH * 2) / 2,
    justifyContent: "center",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 2,
  },
  innerIcon: {
    width: ICON_WIDTH,
    height: ICON_WIDTH,
    borderRadius: ICON_WIDTH / 2,
    alignItems: "center",
    justifyContent: "center",
  },
});
