import React, { useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  Animated,
  PanResponder,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import {
  useNavigation,
  useRoute,
  useIsFocused,
} from "@react-navigation/native";
import { FullScreenNavigationProp, FullScreenRouteProp } from "@/routes";
import { BlurView } from "expo-blur";
import { ThemedText } from "@/components";

export const DrawerScreen = () => {
  const navigation = useNavigation<FullScreenNavigationProp>();
  const route = useRoute<FullScreenRouteProp>();
  const isFocused = useIsFocused();
  const { name } = route.params;

  const translateX = useRef(new Animated.Value(-300)).current;

  useEffect(() => {
    if (isFocused) {
      Animated.timing(translateX, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isFocused]);

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

  const onPress = () => {
    console.log(`onPress`);
    navigation.goBack();


    navigation.navigate("RootTabs", {
      screen: "Settings",
      params: {
        screen: "NotificationsScreen",
        params: { id: "123" },
      },
    });
  };

  return (
    <View style={styles.container}>
      {/* Drawer Panel */}
      <Animated.View
        style={[styles.drawer, { transform: [{ translateX }] }]}
        {...panResponder.panHandlers}
      >
        <Text>TestScreen</Text>
        <Text>{name}</Text>
        <TouchableOpacity onPress={() => onPress()}>
          <ThemedText font="bold" size="xLarge">
            SETTINGS
          </ThemedText>
        </TouchableOpacity>
      </Animated.View>

      {/* Tap-to-close Blur Overlay */}
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <BlurView intensity={50} tint="dark" style={styles.overlay} />
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
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  overlay: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
  },
});
