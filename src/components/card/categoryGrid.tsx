import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ThemedText } from "../ui";
import { Margin } from "@/constants";
import { CategoryTile } from "./categoryTile";

type CategoryOption = {
  id: string;
  title: string;
  image: string;
};

type CategoryGridProps = {
  options: CategoryOption[];
  onSelect?: (id: string) => void;
  numColumns?: number;
};

export const CategoryGrid: React.FC<CategoryGridProps> = ({
  options,
  onSelect,
  numColumns = 3,
}) => {
  return (
    <View>
      <ThemedText size="medium" font="medium" style={styles.label}>
        Shop by Style
      </ThemedText>
      <View style={[styles.gridContainer]}>
        {options.map((item) => (
          <CategoryTile
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            onPress={(id) => onSelect?.(id)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: Margin.SMALL,
  },
  label: {
    marginBottom: Margin.SMALL,
  },
});
