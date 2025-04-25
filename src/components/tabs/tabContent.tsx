import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import { ThemedText } from "@/components";
import { TabItemType } from "./tabHeaders";
import { TabContentLayout } from "./tabContentLayout";
import { Margin } from "@/constants";

interface TabContentProps {
  activeTab: string;
  currentTab?: TabItemType;
}

export const TabContent: React.FC<TabContentProps> = ({
  activeTab,
  currentTab,
}) => (
  <Animated.View style={styles.contentBox}>
    <TabContentLayout>
      <View style={{}}>{currentTab?.children}</View>
    </TabContentLayout>
  </Animated.View>
);

const styles = StyleSheet.create({
  contentBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ccc",
    padding: 40,
    margin: Margin.MEDIUM,
  },
});
