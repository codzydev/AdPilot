// LeftSectionItem.tsx
import { Margin, Padding } from "@/constants";
import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { ThemedText } from "../ui";

interface LeftSectionItemProps {
  item: { id: string; title: string };
  isActive: boolean;
  onPress: () => void;
  backgroundColor: string;
}

export const LeftSectionItem: React.FC<LeftSectionItemProps> = ({
  item,
  isActive,
  onPress,
  backgroundColor,
}) => {
  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: withTiming(isActive ? backgroundColor : "transparent", {
      duration: 300,
    }),
  }));

  return (
    <TouchableOpacity onPress={onPress}>
      <Animated.View style={[styles.itemContainer, animatedStyle]}>
        {/* Smooth sliding indicator bar */}
        <Animated.View
          style={[
            styles.indicator,
            {
              backgroundColor: isActive ? "white" : "transparent",
              opacity: withTiming(isActive ? 1 : 0, { duration: 300 }),
            },
          ]}
        />
        <ThemedText
          font={isActive ? "medium" : "regular"}
          size="xSmall"
          style={{ width: 100 }}
        >
          {item.title}
        </ThemedText>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: Padding.SMALL,
    flexDirection: "row",
    alignItems: "center",
    gap: Margin.SMALL,
  },
  indicator: {
    width: 4,
    height: "100%",
    borderCurve: "continuous",
  },
  itemText: {
    color: "white",
    fontSize: 14,
  },
});
