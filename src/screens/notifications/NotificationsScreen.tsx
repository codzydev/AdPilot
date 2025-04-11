import { NotificationsScreenRouteProp } from "@/routes";
import { useRoute } from "@react-navigation/native";
import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {};

export const NotificationsScreen: FC<Props> = (props) => {
  const route = useRoute<NotificationsScreenRouteProp>();
  const { id } = route.params;
  return (
    <View style={styles.conatainer}>
      <Text>NotificationsScreen</Text>
      <Text>{id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  conatainer: { flex: 1, justifyContent: "center", alignItems: "center" },
});
