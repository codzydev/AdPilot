import { Padding } from "@/constants";
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
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

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

  const contentTranslateY = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          scrollY.value,
          [0, headerHeight - minHeaderHeight],
          [0, -10],
          Extrapolation.CLAMP
        ),
      },
    ],
  }));

  return (
    <Animated.View
      style={[styles.headerContainer, headerAnimatedStyle, containerStyle]}
    >
      <ImageBackground
        source={image}
        style={styles.imageBackground}
        resizeMode="cover"
      />

      {/* Move children below the safe area */}
      <Animated.View
        style={[
          styles.contentWrapper,
          contentTranslateY,
          { marginTop: insets.top }, // ✅ apply here only!
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
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
  },
  contentWrapper: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingHorizontal: 16,
    paddingBottom: Padding.MEDIUM,
  },
});
