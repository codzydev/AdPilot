import {
  All,
  headerTabsData,
  LeftSection,
  RightSection,
  TabHeader,
} from "@/components";
import { Padding } from "@/constants";
import { useThemeColor } from "@/hooks";
import React, { useEffect, useRef, useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Section Data
const sectionData = [
  { id: "00", title: "Just For You" },
  { id: "01", title: "New In" },
  { id: "02", title: "Sale" },
  { id: "03", title: "Women Clothing" },
  { id: "04", title: "Home & Kitchen" },
  { id: "05", title: "Curve" },
  { id: "06", title: "Men Clothing" },
  { id: "07", title: "Beauty & Health" },
  { id: "08", title: "Jewelry & Accessories" },
  { id: "09", title: "Kids" },
  { id: "10", title: "Underwear & Sleepwear" },
  { id: "11", title: "Shoes" },
  { id: "12", title: "Baby & Maternity" },
  { id: "13", title: "Sports & Outdoors" },
  { id: "14", title: "Electronics" },
  { id: "15", title: "Bags & Luggage" },
  { id: "16", title: "Home Textiles" },
  { id: "17", title: "Toys & Games" },
  { id: "18", title: "Office & School Supplies" },
  { id: "19", title: "Tools & Home Improvement" },
  { id: "20", title: "Pet Supplies" },
  { id: "21", title: "Automotive" },
  { id: "22", title: "Appliances" },
];

export const AssistantScreen = () => {
  const [activeTab, setActiveTab] = useState(headerTabsData[0].id);
  const [activeSection, setActiveSection] = useState(sectionData[0].id);
  // const currentTab = headerTabsData.find((tab) => tab.id === activeTab);
  const currentSection = sectionData.find((item) => item.id === activeSection);
  const indicatorX = useSharedValue(0);
  const indicatorWidth = useSharedValue(0);
  const tabLayouts = useRef<Record<string, { x: number; width: number }>>({});
  const { top } = useSafeAreaInsets();
  const backgroundColor = useThemeColor({}, "background");

  const indicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: indicatorX.value }],
    width: indicatorWidth.value,
  }));

  // Animate tab indicator on tab press
  useEffect(() => {
    const layout = tabLayouts.current[activeTab];
    if (layout) {
      indicatorX.value = withTiming(layout.x, { duration: 250 });
      indicatorWidth.value = withTiming(layout.width, { duration: 250 });
    }
  }, [activeTab]);

  const handleTabPress = (tabId: string) => {
    setActiveTab(tabId);
  };

  const flatListRef = useRef<FlatList>(null);

  const handleSectionPress = (itemId: string, index: number) => {
    setActiveSection(itemId);
    flatListRef.current?.scrollToIndex({
      index,
      viewPosition: 0.5, // Auto-center the item when possible
    });
  };

  return (
    <View style={styles.container}>
      {/* Header Top */}
      <View style={[styles.headerTop, { paddingTop: top }]}>
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

      {/* Tab Header */}
      <TabHeader
        tabs={headerTabsData}
        activeTab={activeTab}
        onTabPress={handleTabPress}
        indicatorStyle={indicatorStyle}
        tabLayouts={tabLayouts}
      />

      <View style={{ height: 1, backgroundColor: "#ccc", marginTop: 10 }} />

      {/* Content */}
      <View style={styles.contentWrapper}>
        {/* Left Sidebar */}
        <View style={styles.sidebar}>
          <FlatList
            ref={flatListRef}
            data={sectionData}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <LeftSection
                item={item}
                isActive={item.id === activeSection}
                onPress={() => handleSectionPress(item.id, index)}
                backgroundColor={backgroundColor}
              />
            )}
            getItemLayout={(_, index) => ({
              length: 44, // Approximate height of each item (adjust if needed)
              offset: 44 * index,
              index,
            })}
          />
        </View>

        {/* Right Content */}
        <ScrollView style={styles.rightContent}>
          <RightSection />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
  },
  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.MEDIUM,
  },
  icon: {
    fontSize: 18,
    paddingHorizontal: 8,
    color: "white",
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#eee",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    fontSize: 14,
  },
  contentWrapper: {
    flex: 1,
    flexDirection: "row",
  },
  sidebar: {
    width: 120,
    backgroundColor: "#444",
  },
  sectionItem: {
    padding: 10,
    borderLeftWidth: 4,
    borderLeftColor: "transparent",
  },
  rightContent: {
    flex: 1,
    paddingHorizontal: Padding.MEDIUM,
    paddingVertical: Padding.SMALL,
  },
});
