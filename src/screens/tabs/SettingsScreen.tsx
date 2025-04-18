import { ThemedText } from "@/components";
import { ROUTES, SettingsScreenNavigationProp } from "@/routes";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {};

export const SettingsScreen = ({}: Props) => {
  const { navigate } = useNavigation<SettingsScreenNavigationProp>();

  return (
    <View style={styles.conatainer}>
      <ThemedText size="xxLarge" font="bold">
        Settings Screen
      </ThemedText>
      <Text
        onPress={() =>
          navigate(ROUTES.NOTIFICATIONS_SCREEN, { id: "000000111111000000" })
        }
      >
        Go to Notifications
      </Text>

      <Text onPress={() => navigate(ROUTES.FULL_SCREEN, { name: "Bikas" })}>
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
