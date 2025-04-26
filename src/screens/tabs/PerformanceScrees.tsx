import {
  AnimatedHeader,
  SearchSection,
  TabContent,
  TabHeader,
} from "@/components";
import { headerTabsData } from "@/components/header/heroHeader";
import { Margin, Padding } from "@/constants";
import { useThemeColor } from "@/hooks";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HEADER_HEIGHT = 120;

export const PerformanceScrees = () => {
  const scrollY = useSharedValue(0);
  const insets = useSafeAreaInsets();
  const MIN_HEADER_HEIGHT = insets.top + Margin.SMALL;

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  // ✅ Set first tab as active
  const [activeTab, setActiveTab] = useState(headerTabsData[0].id);
  const currentTab = headerTabsData.find((tab) => tab.id === activeTab);

  const contentOpacity = useSharedValue(1);
  const indicatorX = useSharedValue(0);
  const indicatorWidth = useSharedValue(0);
  const tabLayouts = useRef<Record<string, { x: number; width: number }>>({});

  const indicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: indicatorX.value }],
    width: indicatorWidth.value,
  }));

  const searchInputContainer = useThemeColor({}, "cardBackground");
  const placeholder = useThemeColor({}, "placeholder");

  // ✅ Animation logic in one place
  useEffect(() => {
    const interval = setInterval(() => {
      const layout = tabLayouts.current[activeTab];
      if (layout) {
        indicatorX.value = withTiming(layout.x, { duration: 250 });
        indicatorWidth.value = withTiming(layout.width, { duration: 250 });
        clearInterval(interval); // ✅ stop checking once found
      }
    }, 50); // check every 50ms

    return () => clearInterval(interval);
  }, [activeTab]);

  const handleTabPress = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <View style={{}}>
      <AnimatedHeader
        image={{
          uri: "https://jurlique.com.au/cdn/shop/articles/7_WAYS_TO_MAKE_EVERY_DAY_EARTH_DAY_9c2990e0-c893-4d66-9e7a-29b89c8dcf60.jpg?v=1742172049&width=1920",
        }}
        scrollY={scrollY}
        headerHeight={HEADER_HEIGHT}
        minHeaderHeight={MIN_HEADER_HEIGHT}
        containerStyle={{}}
      >
        <SearchSection
          backgroundColor={searchInputContainer}
          placeholder="Search..."
          style={{ marginTop: insets.top }}
        >
          <TabHeader
            tabs={headerTabsData}
            activeTab={activeTab}
            onTabPress={handleTabPress}
            indicatorStyle={indicatorStyle}
            tabLayouts={tabLayouts}
          />
        </SearchSection>
      </AnimatedHeader>

      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        contentContainerStyle={{
          paddingTop: HEADER_HEIGHT + insets.top,
        }}
      >
        <TabContent activeTab={activeTab} currentTab={currentTab} />
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.MEDIUM,
    gap: Margin.SMALL,
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
  tabIndicator: {
    position: "absolute",
    bottom: 0,
    height: 2,
    // backgroundColor: "red",
    borderRadius: 10,
  },
  tabRow: {
    paddingHorizontal: 8,
    // backgroundColor: "#ccc",
  },
  tabText: {
    fontSize: 16,
    color: "white",
  },
  tabTextActive: {
    fontWeight: "bold",
    // color: "teal",
  },
});
