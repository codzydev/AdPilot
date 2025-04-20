import { ThemedText } from "@/components";
import { FullScreenNavigationProp, ROUTES, TAB_NAMES } from "@/routes";
import { navigationRef, resetToTabWithStack } from "@/routes/ref/navigationRef";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import React, { useCallback, useEffect, useRef } from "react";
import {
  Animated,
  PanResponder,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const DrawerScreen = () => {
  const navigation = useNavigation<FullScreenNavigationProp>();
  const isFocused = useIsFocused();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const translateX = useRef(new Animated.Value(-300)).current;
  const insets = useSafeAreaInsets();

  // Animate drawer when focused
  useEffect(() => {
    if (isFocused) {
      Animated.timing(translateX, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isFocused]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Gesture handler
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) =>
        Math.abs(gestureState.dx) > 2,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dx < 0) {
          translateX.setValue(gestureState.dx);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx < -100) {
          Animated.timing(translateX, {
            toValue: -300,
            duration: 200,
            useNativeDriver: true,
          }).start(() => navigation.goBack());
        } else {
          Animated.spring(translateX, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  // Navigate and close drawer
  const handleNavigateToNotifications = useCallback(() => {
    if (!navigationRef.isReady()) return;
    navigationRef.goBack(); // Close drawer
    timeoutRef.current = setTimeout(() => {
      resetToTabWithStack(TAB_NAMES.SETTINGS, [
        { name: ROUTES.SETTINGS_SCREEN },
        { name: ROUTES.NOTIFICATIONS_SCREEN, params: { id: "Akash SDK" } },
      ]);
    }, 50);
  }, []);

  return (
    <View style={[styles.container, {}]}>
      {/* Drawer Panel */}
      <Animated.View
        style={[
          styles.drawer,
          { transform: [{ translateX }], paddingTop: insets.top },
        ]}
        {...panResponder.panHandlers}
      >
        <ThemedText>Drawer</ThemedText>

        <TouchableOpacity onPress={handleNavigateToNotifications}>
          <ThemedText font="bold" size="xLarge">
            Notification Screen
          </ThemedText>
        </TouchableOpacity>
      </Animated.View>

      {/* Tap-to-close Blur Overlay */}
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <BlurView intensity={50} tint="extraLight" style={styles.overlay} />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
  },
  drawer: {
    width: "70%",
    backgroundColor: "teal",
    alignItems: "center",
    zIndex: 2,
  },
  overlay: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
  },
});
