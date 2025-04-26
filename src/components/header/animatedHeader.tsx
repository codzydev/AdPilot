import { useThemeColor } from "@/hooks";
import { LinearGradient } from "expo-linear-gradient";
import React, { ReactNode } from "react";
import {
  ImageBackground,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { All } from "../tabs/All";
import { Home } from "../tabs/home";
import { Woman } from "../tabs/woman";

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

type Props = {
  image: ImageSourcePropType;
  children?: ReactNode;
  scrollY: Animated.SharedValue<number>;
  headerHeight?: number;
  minHeaderHeight?: number;
  containerStyle?: StyleProp<ViewStyle>;
};

export const AnimatedHeader = ({
  image,
  children,
  scrollY,
  headerHeight = 160,
  minHeaderHeight = 40,
  containerStyle,
}: Props) => {
  const insets = useSafeAreaInsets();

  const headerAnimatedStyle = useAnimatedStyle(() => ({
    height: interpolate(
      scrollY.value,
      [0, headerHeight - minHeaderHeight],
      [headerHeight + insets.top, minHeaderHeight + insets.top],
      Extrapolation.CLAMP
    ),
  }));

  const backgroundOpacity = useSharedValue(0);

  const backgroundColor = useThemeColor({}, "background");

  const overlayStyle = useAnimatedStyle(() => {
    // Interpolate scroll position to opacity (0 when not scrolled, 1 when scrolled)
    const opacity = interpolate(
      scrollY.value,
      [0, headerHeight / 2], // Adjust when to trigger
      [0, 1],
      Extrapolation.CLAMP
    );

    backgroundOpacity.value = withTiming(opacity, { duration: 500 });

    return {
      opacity: backgroundOpacity.value,
      backgroundColor: backgroundColor,
    };
  });

  // const contentTranslateY = useAnimatedStyle(() => ({
  //   transform: [
  //     {
  //       translateY: interpolate(
  //         scrollY.value,
  //         [0, headerHeight - minHeaderHeight],
  //         [0, -10],
  //         Extrapolation.CLAMP
  //       ),
  //     },
  //   ],
  // }));

  return (
    <Animated.View
      style={[styles.headerContainer, headerAnimatedStyle, containerStyle]}
    >
      <ImageBackground
        source={image}
        style={styles.imageBackground}
        resizeMode="cover"
        blurRadius={2}
      >
        <LinearGradient
          colors={["rgba(0, 77, 77, 0.8)", "rgba(0, 77, 77, 0)"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={StyleSheet.absoluteFillObject}
        />
        {/* Animated overlay with gradient inside */}
        <Animated.View style={[styles.overlay, overlayStyle]} />
      </ImageBackground>

      {/* Move children below the safe area */}
      <Animated.View
        style={[
          styles.contentWrapper,
          // contentTranslateY,
          // { marginTop: insets.top }, // ✅ apply here only!
        ]}
      >
        {children}
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: 1,
    overflow: "hidden",
  },
  imageBackground: {
    // ...StyleSheet.absoluteFillObject,
    // backgroundColor: "red",
    width: "100%",
    height: "100%",
  },
  contentWrapper: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    // paddingHorizontal: 16,
    // paddingBottom: Padding.MEDIUM,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    // backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black
    // backgroundColor: "rgba(255, 0, 0, 0.6)", // Semi-transparent red
    justifyContent: "center",
    alignItems: "center",
  },
});
