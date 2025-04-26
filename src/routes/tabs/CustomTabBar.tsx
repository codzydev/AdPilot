import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, TouchableOpacity, StyleSheet, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TabLabel } from "./TabLabel"; // adjust path
import { useThemeColor } from "@/hooks";

const CustomTabBar = ({ state, navigation }: BottomTabBarProps) => {
  const insets = useSafeAreaInsets();
  const backgroundColor = useThemeColor({}, "background");

  return (
    <View
      style={[
        styles.container,
        { paddingBottom: insets.bottom, backgroundColor },
      ]}
    >
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
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 85,
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
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const getIconName = (routeName: string) => {
  switch (routeName) {
    case "dashboard":
      return "grid";
    case "performance":
      return "stats-chart";
    case "assistance":
      return "help-circle";
    case "campaigns":
      return "megaphone";
    case "settings":
      return "settings";
    default:
      return "ellipse";
  }
};

export default CustomTabBar;
