import { HeroHeader } from "@/components";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

type Props = {};

export const AssistantScreen = ({}: Props) => {
  return (
    <View style={styles.conatainer}>
      <SafeAreaView />
      {/*
      <Text>AssistantScreen</Text> */}
      <HeroHeader
      />
    </View>
  );
};

const styles = StyleSheet.create({
  conatainer: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
});
