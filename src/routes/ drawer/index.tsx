import { BottomTabParamList } from "@/types";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigatorScreenParams } from "@react-navigation/native";
import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { DRAWER } from "../Routes";
import BottomTabs from "../tabs/BottomTabs";
import { Content } from "./Content";

type Props = {};

export const CustomDrawerComp: FC<Props> = (props) => {
  return (
    <View style={styles.conatainer}>
      <Text>index</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  conatainer: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export type DrawerParamList = {
  Drawer: NavigatorScreenParams<BottomTabParamList>;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

export const CustomDrawer = () => (
  <Drawer.Navigator
    screenOptions={{
      swipeEnabled: false,
      headerShown: false,
      drawerStyle: {
        width: "70%", // <-- Set your custom drawer width here
      },
    }}
    drawerContent={(props) => <Content {...props} />}
  >
    <Drawer.Screen name={DRAWER} component={BottomTabs} />
  </Drawer.Navigator>
);
