import { ThemedText } from "@/components";
import { DashboardNavProp, DashboardRouteProp } from "@/routes";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";

type Props = {};

export const DashboardScreen = ({}: Props) => {
  const navigation = useNavigation<DashboardNavProp>();
  const route = useNavigation<DashboardRouteProp>();
  return (
    <View style={styles.conatainer}>
      <ThemedText>DashboardScreen</ThemedText>
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
