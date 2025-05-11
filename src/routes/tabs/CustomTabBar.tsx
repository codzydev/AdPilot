import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React, { useEffect } from "react";
import { View, StyleSheet, Platform, Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TabLabel } from "./TabLabel";
import { useThemeColor } from "@/hooks";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const INDICATOR_WIDTH = 30; // Adjust this as needed to match icon width
const TAB_HEIGHT = 45; // Adjust this as needed to match icon width

const CustomTabBar = ({ state, navigation }: BottomTabBarProps) => {
  const insets = useSafeAreaInsets();
  const backgroundColor = useThemeColor({}, "background");
  const activeColor = useThemeColor({}, "tabIconSelected");

  const tabWidth = SCREEN_WIDTH / state.routes.length;
  const translateX = useSharedValue(0);

  useEffect(() => {
    translateX.value = withTiming(state.index * tabWidth, { duration: 250 });
  }, [state.index]);

  const indicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
    left: (tabWidth - INDICATOR_WIDTH) / 2, // Center the indicator
  }));

  return (
    <View
      style={[
        styles.wrapper,
        { paddingBottom: insets.bottom, backgroundColor },
      ]}
    >
      {/* TOP INDICATOR (Outside of the tabs) */}
      <Animated.View
        style={[
          styles.indicator,
          { width: INDICATOR_WIDTH, backgroundColor: activeColor },
          indicatorStyle,
        ]}
      />

      {/* Tab items */}
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const iconName = getIconName(route.name);

          return (
            <TabLabel
              label={route.name}
              iconName={iconName}
              size={22}
              focused={isFocused}
              key={route.key}
              onPress={onPress}
              style={styles.tab}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
    backgroundColor: "transparent", // important for shadow visibility
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: -2 },
      },
      android: {
        elevation: 10,
      },
    }),
  },
  container: {
    flexDirection: "row",
    height: TAB_HEIGHT, // reduced height
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8, // slightly reduced for compactness
  },
  indicator: {
    position: "absolute",
    height: 4,
    borderRadius: 3,
    top: 0,
  },
});
const getIconName = (routeName: string) => {
  switch (routeName) {
    case "dashboard":
      return "grid-outline";
    case "performance":
      return "stats-chart-outline";
    case "assistance":
      return "help-circle-outline";
    case "campaigns":
      return "megaphone-outline";
    case "settings":
      return "settings-outline";
    default:
      return "ellipse-outline";
  }
};

export default CustomTabBar;
