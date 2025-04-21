import React, { useRef, useState } from "react";
import {
  findNodeHandle,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { AnimatedHeader, headerTabsData } from "@/components";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HEADER_HEIGHT = 120;

const data = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

export const PerformanceScrees = () => {
  const scrollY = useSharedValue(0);
  const insets = useSafeAreaInsets();
  const MIN_HEADER_HEIGHT = insets.top;
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const [activeTab, setActiveTab] = useState("00");

  const currentTab = headerTabsData.find((tab) => tab.id === activeTab);

  const indicatorX = useSharedValue(0);
  const indicatorWidth = useSharedValue(0);
  const tabRefs = useRef<Record<string, View>>({});

  const scrollViewRef = useRef<ScrollView>(null);
  const scrollViewNode = findNodeHandle(scrollViewRef.current);
  // const tabNode = tabRefs.current[tab.id];

  const indicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: indicatorX.value }],
    width: indicatorWidth.value,
  }));

  const handleTabPress = (tabId: string) => {
    setActiveTab(tabId);

    const tabRef = tabRefs.current[tabId];
    const scrollViewNative = findNodeHandle(scrollViewRef.current);

    if (tabRef && scrollViewNative) {
      tabRef.measureLayout(
        scrollViewNative,
        (x, y, width) => {
          indicatorX.value = withTiming(x, { duration: 250 });
          indicatorWidth.value = withTiming(width, { duration: 250 });
        },
        () => {
          console.warn("❌ measureLayout failed for tab", tabId);
        }
      );
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <AnimatedHeader
        image={{
          uri: "https://jurlique.com.au/cdn/shop/articles/7_WAYS_TO_MAKE_EVERY_DAY_EARTH_DAY_9c2990e0-c893-4d66-9e7a-29b89c8dcf60.jpg?v=1742172049&width=1920",
        }}
        scrollY={scrollY}
        headerHeight={HEADER_HEIGHT}
        minHeaderHeight={MIN_HEADER_HEIGHT}
        containerStyle={{}}
      >
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
        <View style={{ position: "relative" }}>
          <ScrollView
            ref={scrollViewRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.tabRow}
          >
            {headerTabsData.map((tab) => (
              <View
                key={tab.id}
                ref={(ref) => {
                  if (ref) tabRefs.current[tab.id] = ref;
                }}
                style={[styles.tabItem]}
              >
                <TouchableOpacity onPress={() => handleTabPress(tab.id)}>
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
          <Animated.View style={[styles.tabIndicator, indicatorStyle]} />
          {/* <Animated.View
            style={[
              styles.tabIndicator,
              useAnimatedStyle(() => ({
                transform: [{ translateX: indicatorX.value }],
                width: indicatorWidth.value,
              })),
            ]}
          /> */}
        </View>
      </AnimatedHeader>

      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        contentContainerStyle={{
          paddingTop: HEADER_HEIGHT + insets.top, // ✅ correct height
          backgroundColor: "pink",
        }}
      >
        <View>
          <Text style={{ fontSize: 18 }}>{currentTab?.content}</Text>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "teal",
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

  searchBarRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  tabIndicator: {
    position: "absolute",
    bottom: 0,
    height: 2,
    backgroundColor: "real",
    borderRadius: 10,
  },
  // searchInput: {
  //   flex: 1,
  //   height: 40,
  //   backgroundColor: "#fff",
  //   borderRadius: 10,
  //   paddingHorizontal: 12,
  //   fontSize: 14,
  //   marginHorizontal: 10,
  // },
  // icon: {
  //   padding: 8,
  //   borderRadius: 10,
  // },
  item: {
    padding: 16,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  tabRow: {
    paddingHorizontal: 8,
    paddingBottom: 4,
    backgroundColor: "#ccc",
  },
  tabItem: {
    marginRight: 14,
    paddingBottom: 6,
  },
  tabItemActive: {
    borderBottomWidth: 2,
    borderBottomColor: "red",
  },
  tabText: {
    fontSize: 16,
    color: "white",
  },
  tabTextActive: {
    fontWeight: "bold",
    color: "white",
  },
  contentWrapper: {
    position: "absolute",
    bottom: 12,
    width: "100%",
    paddingHorizontal: 16,
  },
});
