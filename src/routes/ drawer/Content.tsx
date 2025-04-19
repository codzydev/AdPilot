// src/components/navigation/CustomDrawerContent.tsx

import { DrawerContentComponentProps } from "@react-navigation/drawer";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const Content = (props: DrawerContentComponentProps) => {
  const { navigation } = props;
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.header}>👗 Fast Fashion</Text>

      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("Drawer", { screen: "Dashboard" })}
      >
        <Text style={styles.itemText}>🏠 Dashboard</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() =>
          navigation.navigate("Drawer", {
            screen: "Settings",
            params: {
              screen: "NotificationsScreen",
              params: { id: "Akash 123 Test" }, // if your screen expects params
            },
          })
        }
      >
        <Text style={styles.itemText}>⚙️ Settings</Text>
      </TouchableOpacity>

      {/* Add more drawer items here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "teal" },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  item: { paddingVertical: 12 },
  itemText: { fontSize: 18 },
});
