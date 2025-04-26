// LeftSectionItem.tsx
import { Margin, Padding } from "@/constants";
import { useThemeColor } from "@/hooks";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Animated from "react-native-reanimated";
import { ThemedText } from "../ui";

interface LeftSectionProps {
  item: { id: string; title: string };
  isActive: boolean;
  onPress: () => void;
  backgroundColor: string;
}

export const LeftSection: React.FC<LeftSectionProps> = ({
  item,
  isActive,
  onPress,
  backgroundColor,
}) => {
  const color = useThemeColor({}, "text");
  const background = useThemeColor({}, "background");
  const backgroundColorx = isActive ? background : "transparent";

  return (
    <TouchableOpacity onPress={onPress}>
      <Animated.View
        style={[styles.itemContainer, { backgroundColor: backgroundColorx }]}
      >
        {/* Smooth sliding indicator bar */}
        <Animated.View
          style={[
            styles.indicator,
            {
              backgroundColor: isActive ? color : "transparent",
              // opacity: withTiming(isActive ? 1 : 0, { duration: 300 }),
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
