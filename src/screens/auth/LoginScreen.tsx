import { ThemedText } from "@/components";
import { RootNaviatorPramList } from "@/routes";
import { useNavigation } from "@react-navigation/native";
import React, { FC, useCallback } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

type Props = {};
export const LoginScreen: FC<Props> = () => {
  const { navigate } = useNavigation<RootNaviatorPramList>();

  const onHandleLogin = useCallback(() => {
    return navigate("rootTabs", { screen: "dashboard" });
  }, []);

  return (
    <View style={styles.container}>
      <ThemedText size="xLarge" font="bold">
        Welcome Back
      </ThemedText>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={onHandleLogin}>
        <ThemedText style={styles.buttonText}>Login</ThemedText>
      </TouchableOpacity>
      <ThemedText style={styles.footerText}>
        Don't have an account? Sign up
      </ThemedText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f9f9f9", // Light background for clean UI
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#007BFF", // Primary button color
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerText: {
    marginTop: 20,
    fontSize: 14,
    color: "#666",
  },
});
