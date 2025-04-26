import { ThemedText } from "@/components";
import { Margin, Padding } from "@/constants";
import { useThemeColor } from "@/hooks";
import React, { useRef } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import Animated from "react-native-reanimated";

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
}) => {
  const scrollViewRef = useRef<ScrollView>(null);
  const disabled = useThemeColor({}, "disabled");
  const text = useThemeColor({}, "text");

  const handleTabPress = (tabId: string) => {
    onTabPress(tabId);

    const layout = tabLayouts.current[tabId];
    if (layout && scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: layout.x + layout.width / 2 - 150, // Adjust '150' based on half of your screen width
        animated: true,
      });
    }
  };

  return (
    <View>
      <ScrollView
        ref={scrollViewRef}
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
            <TouchableOpacity onPress={() => handleTabPress(tab.id)}>
              <ThemedText
                darkColor="red"
                font={activeTab === tab.id ? "bold" : "regular"}
                size="medium"
                style={{ color: activeTab === tab.id ? text : disabled }}
              >
                {tab.key.toUpperCase()}
              </ThemedText>
            </TouchableOpacity>
          </View>
        ))}
        <Animated.View
          style={[
            styles.tabIndicator,
            indicatorStyle,
            { backgroundColor: text },
          ]}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  tabRow: {
    paddingHorizontal: 8,
    marginTop: Margin.SMALL / 2,
    position: "relative",
  },
  tabItem: {
    marginRight: Margin.MEDIUM,
    paddingBottom: Padding.SMALL / 2, // ⬅️ Increased padding to make space for the indicator!
    alignItems: "center", // Make sure text and indicator align vertically
    justifyContent: "center",
  },
  tabIndicator: {
    position: "absolute",
    bottom: 0, // ⬅️ Move the indicator up slightly if needed (try 4–6)
    height: 2,
    borderRadius: 10,
  },
});
