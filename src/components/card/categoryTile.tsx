import React, { FC } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedText } from "@/components";
import { Margin } from "@/constants";

type CategoryTileProps = {
  id: string;
  title: string;
  image: string;
  onPress: (id: string) => void;
  imageSize?: number; // Optional, defaults to 80
};

export const CategoryTile: FC<CategoryTileProps> = ({
  id,
  title,
  image,
  onPress,
  imageSize = 60, // Default size
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(id)}
      activeOpacity={0.7}
    >
      <Image
        source={{ uri: image }}
        style={[
          styles.image,
          { width: imageSize, height: imageSize, borderRadius: imageSize / 2 },
        ]}
      />
      <ThemedText
        size="xSmall"
        font="regular"
        style={[styles.title, { width: imageSize }]}
      >
        {title}
      </ThemedText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginRight: Margin.SMALL / 2,
    marginBottom: Margin.SMALL / 2,
  },
  image: {
    marginBottom: 8,
    resizeMode: "cover",
  },
  title: {
    textAlign: "center",
  },
});
