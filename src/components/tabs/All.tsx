import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemedText } from "../ui";

type Props = {};

export const All: FC<Props> = (props) => {
  return (
    <View style={styles.conatainer}>
      <ThemedText size="large" font="bold">
        ALL
      </ThemedText>
    </View>
  );
};

const styles = StyleSheet.create({
  conatainer: { flex: 1, justifyContent: "center", alignItems: "center" },
});
