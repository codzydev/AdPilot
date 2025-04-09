import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {};

export const SettingsScreen = ({}: Props) => {
  return (
    <View style={styles.conatainer}>
      <Text>SettingsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
