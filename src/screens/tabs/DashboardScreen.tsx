import { ThemedText } from "@/components";
import { DashboardNavProp, DashboardRouteProp, ROUTES } from "@/routes";
import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

type Props = {};

export const DashboardScreen: FC<Props> = ({}) => {
  const { navigate } = useNavigation<DashboardNavProp>();
  return (
    <View style={styles.conatainer}>
      <ThemedText size="xxLarge" font="bold">
        DashboardScreen
      </ThemedText>
      <Text onPress={() => navigate(ROUTES.DRAWER_SCREEN)}>Open Drawer</Text>
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
