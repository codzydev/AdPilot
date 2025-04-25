import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {};

export const Woman: FC<Props> = (props) => {
  return (
    <View style={styles.conatainer}>
      <Text>Woman</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  conatainer: { flex: 1, justifyContent: "center", alignItems: "center" },
});
