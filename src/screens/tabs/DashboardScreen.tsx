import { ThemedText } from "@/components";
import { DashboardNavProp, DashboardRouteProp, ROUTES } from "@/routes";
import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {};

export const DashboardScreen: FC<Props> = ({}) => {
  const { navigate } = useNavigation<DashboardNavProp>();
  const route = useNavigation<DashboardRouteProp>();
  return (
    <View style={styles.conatainer}>
      <ThemedText>DashboardScreen</ThemedText>
      <Text onPress={() => navigate(ROUTES.FULL_SCREEN, { name: "Akash" })}>
        Go to FullScreenPage
      </Text>
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
