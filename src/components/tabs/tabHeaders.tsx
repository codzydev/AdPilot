import { Margin } from "@/constants";
import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import Animated, { useAnimatedStyle } from "react-native-reanimated";

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
  <View style={{ position: "relative" }}>
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
            <Text
              style={[
                styles.tabText,
                activeTab === tab.id && styles.tabTextActive,
              ]}
            >
              {tab.key}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
      <Animated.View style={[styles.tabIndicator, indicatorStyle]} />
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  tabRow: { paddingHorizontal: 8, backgroundColor: "#ccc" },
  tabItem: { marginRight: Margin.MEDIUM, paddingBottom: 6 },
  tabText: { fontSize: 16, color: "white" },
  tabTextActive: { fontWeight: "bold", color: "teal" },
  tabIndicator: {
    position: "absolute",
    bottom: 0,
    height: 2,
    backgroundColor: "red",
    borderRadius: 10,
  },
});
