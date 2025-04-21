import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export const headerTabsData = [
  { id: "00", key: "All", content: "Component 1" },
  { id: "01", key: "Women", content: "Component 2" },
  { id: "02", key: "Home", content: "Component 3" },
  { id: "03", key: "Men", content: "Component 4" },
  { id: "04", key: "Curve", content: "Component 5" },
  { id: "05", key: "Beauty", content: "Component 6" },
  { id: "06", key: "Kids", content: "Component 7" },
  { id: "07", key: "Shoes", content: "Component 8" },
  { id: "08", key: "Accessories", content: "Component 9" },
  { id: "09", key: "Sale", content: "Component 10" },
];

export const HeroHeader = () => {
  const [activeTab, setActiveTab] = useState("00");

  const currentTab = headerTabsData.find((tab) => tab.id === activeTab);

  return (
    <View style={{}}>
      {/* Top header with icons & search */}
      <View style={styles.headerTop}>
        <TouchableOpacity>
          <Text style={styles.icon}>M</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.icon}>C</Text>
        </TouchableOpacity>

        <TextInput
          placeholder="Search..."
          style={styles.searchInput}
          placeholderTextColor="#aaa"
        />

        <TouchableOpacity>
          <Text style={styles.icon}>Q</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.icon}>H</Text>
        </TouchableOpacity>
      </View>

      {/* Scrollable tab row */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabRow}
      >
        {headerTabsData.map((tab) => (
          <TouchableOpacity
            key={tab.id}
            onPress={() => setActiveTab(tab.id)}
            style={[
              styles.tabItem,
              activeTab === tab.id && styles.tabItemActive,
            ]}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab.id && styles.tabTextActive,
              ]}
            >
              {tab.key}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Render dynamic content below */}
      <View style={styles.contentContainer}>
        <Text style={{ fontSize: 18 }}>{currentTab?.content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 8,
    gap: 8,
  },
  icon: {
    fontSize: 18,
    paddingHorizontal: 8,
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#eee",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    fontSize: 14,
  },
  tabRow: {
    paddingHorizontal: 8,
    paddingBottom: 4,
  },
  tabItem: {
    marginRight: 14,
    paddingBottom: 6,
  },
  tabItemActive: {
    borderBottomWidth: 2,
    borderBottomColor: "black",
  },
  tabText: {
    fontSize: 16,
    color: "#666",
  },
  tabTextActive: {
    fontWeight: "bold",
    color: "black",
  },
  contentContainer: {
    padding: 16,
  },
});
