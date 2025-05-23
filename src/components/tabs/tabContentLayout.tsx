import { Padding } from "@/constants";
import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  children: React.ReactNode;
};

export const TabContentLayout: FC<Props> = ({ children }) => {
  return <View style={styles.conatainer}>{children}</View>;
};

const styles = StyleSheet.create({
  conatainer: { flex: 1, padding: Padding.MEDIUM },
});
