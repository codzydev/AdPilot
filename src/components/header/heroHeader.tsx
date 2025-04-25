import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { All } from "../tabs/All";
import { Woman } from "../tabs/woman";
import { Home } from "../tabs/home";

export const headerTabsData = [
  { id: "00", key: "All", content: "Component 1", children: <All /> },
  { id: "01", key: "Women", content: "Component 2", children: <Woman /> },
  { id: "02", key: "Home", content: "Component 3", children: <Home /> },
  { id: "03", key: "Men", content: "Component 4", children: <All /> },
  { id: "04", key: "Curve", content: "Component 5", children: <All /> },
  { id: "05", key: "Beauty", content: "Component 6", children: <All /> },
  { id: "06", key: "Kids", content: "Component 7", children: <All /> },
  { id: "07", key: "Shoes", content: "Component 8", children: <All /> },
  { id: "08", key: "Accessories", content: "Component 9", children: <All /> },
  { id: "09", key: "Sale", content: "Component 10", children: <All /> },
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
