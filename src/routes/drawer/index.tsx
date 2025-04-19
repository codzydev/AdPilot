import React, { FC } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { DrawerContentComponentProps } from "@react-navigation/drawer";

type Props = DrawerContentComponentProps;

export const CustomDrawer: FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Custom Drawer</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("BottomTabs")} />
      <Button title="Go to Settings" onPress={() => navigation.navigate("Settings")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 20 },
});
