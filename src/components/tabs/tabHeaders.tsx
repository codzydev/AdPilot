import { Margin } from "@/constants";
import React from "react";
import { ScrollView, TouchableOpacity, View, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import { ThemedText } from "@/components";

export interface TabItemType {
  id: string;
  key: string;
  content: string;
  children: React.ReactNode;
}

interface TabHeaderProps {
  tabs: TabItemType[];
  activeTab: string;
  onTabPress: (tabId: string) => void;
  indicatorStyle: any;
  tabLayouts: React.MutableRefObject<
    Record<string, { x: number; width: number }>
  >;
}

export const TabHeader: React.FC<TabHeaderProps> = ({
  tabs,
  activeTab,
  onTabPress,
  indicatorStyle,
  tabLayouts,
}) => (
  <View>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.tabRow}
    >
      {tabs.map((tab) => (
        <View
          key={tab.id}
          style={styles.tabItem}
          onLayout={(e) => {
            const { x, width } = e.nativeEvent.layout;
            tabLayouts.current[tab.id] = { x, width };
          }}
        >
          <TouchableOpacity onPress={() => onTabPress(tab.id)}>
            <ThemedText
              font={activeTab === tab.id ? "bold" : "regular"}
              size="medium"
              style={
                activeTab === tab.id ? styles.tabTextActive : styles.tabText
              }
            >
              {tab.key.toUpperCase()}
            </ThemedText>
          </TouchableOpacity>
        </View>
      ))}
      <Animated.View style={[styles.tabIndicator, indicatorStyle]} />
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  tabRow: { paddingHorizontal: 8, marginTop: Margin.SMALL / 2 },
  tabItem: { marginRight: Margin.MEDIUM, paddingBottom: 6 },
  tabText: { color: "white" },
  tabTextActive: { color: "#000" },
  tabIndicator: {
    position: "absolute",
    bottom: 0,
    height: 2,
    backgroundColor: "#000",
    borderRadius: 10,
  },
});
