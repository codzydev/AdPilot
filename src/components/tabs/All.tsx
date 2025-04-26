import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemedText } from "../ui";

type Props = {};

export const All: FC<Props> = (props) => {
  return (
    <View style={styles.conatainer}>
      <View style={{ height: 100, backgroundColor: "red", marginBottom: 20 }}>
        <ThemedText size="large" font="bold" style={{ backgroundColor: "red" }}>
          RANDOM
        </ThemedText>
      </View>
      <View style={{ height: 100, backgroundColor: "red", marginBottom: 20 }}>
        <ThemedText size="large" font="bold" style={{ backgroundColor: "red" }}>
          RANDOM
        </ThemedText>
      </View>
      <View style={{ height: 100, backgroundColor: "red", marginBottom: 20 }}>
        <ThemedText size="large" font="bold" style={{ backgroundColor: "red" }}>
          RANDOM
        </ThemedText>
      </View>
      <View style={{ height: 100, backgroundColor: "red" }}>
        <ThemedText size="large" font="bold" style={{ backgroundColor: "red" }}>
          RANDOM
        </ThemedText>
      </View>
      <View style={{ height: 100, backgroundColor: "red" }}>
        <ThemedText size="large" font="bold" style={{}}>
          RANDOM
        </ThemedText>
      </View>
      <View style={{ height: 100, backgroundColor: "red" }}>
        <ThemedText size="large" font="bold" style={{}}>
          RANDOM
        </ThemedText>
      </View>
      <View style={{ height: 100, backgroundColor: "red" }}>
        <ThemedText size="large" font="bold" style={{}}>
          RANDOM
        </ThemedText>
      </View>
      <View style={{ height: 100, backgroundColor: "red" }}>
        <ThemedText size="large" font="bold" style={{}}>
          RANDOM
        </ThemedText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conatainer: { flex: 1, gap: 10 },
});
