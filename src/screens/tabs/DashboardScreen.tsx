import { ThemedText } from "@/components";
import { DashboardNavProp } from "@/routes";
import { useNavigation } from "@react-navigation/native";
import React, { FC, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {};

export const DashboardScreen: FC<Props> = ({}) => {
  const { navigate } = useNavigation<DashboardNavProp>();

  const handleOnPress = useCallback(() => {
    navigate("fullScreen", { name: "MENU 123" });
  }, [navigate]);

  return (
    <View style={styles.conatainer}>
      <ThemedText size="xxLarge" font="bold">
        DashboardScreen
      </ThemedText>
      <Text onPress={handleOnPress}>Open FullScreen</Text>
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
