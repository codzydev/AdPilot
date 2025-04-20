import { useThemeColor } from "@/hooks";
import { navigationRef } from "@/routes/ref/navigationRef";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import React, { FC } from "react";
import { StyleSheet } from "react-native";

type Props = {
  children: React.ReactNode;
};

export const NavContainer: FC<Props> = ({ children }) => {
  const backgroundColor = useThemeColor({}, "background");

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: backgroundColor,
    },
  };

  return (
    <NavigationContainer theme={theme} ref={navigationRef}>
      {children}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  conatainer: { flex: 1, justifyContent: "center", alignItems: "center" },
});
