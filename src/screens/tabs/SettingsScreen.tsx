import { ROUTES, SettingsScreenNavigationProp } from "@/routes";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {};

export const SettingsScreen = ({}: Props) => {
  const { navigate } = useNavigation<SettingsScreenNavigationProp>();

  return (
    <View style={styles.conatainer}>
      <Text>SettingsScreen</Text>
      <Text
        onPress={() =>
          navigate(ROUTES.NOTIFICATIONS_SCREEN, { id: "000000111111000000" })
        }
      >
        Go to Notifications
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
