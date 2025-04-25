import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {};

export const Home: FC<Props> = (props) => {
  return (
    <View style={styles.conatainer}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  conatainer: { flex: 1, justifyContent: "center", alignItems: "center" },
});
