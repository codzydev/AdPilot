import { MenuIcon } from "@/components";
import { ArrowBack } from "@/components/button/arrowBack";
import { Margin } from "@/constants";
import { useThemeColor } from "@/hooks";
import { Ionicons } from "@expo/vector-icons";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";

import { StackNavigationOptions } from "@react-navigation/stack";

export const defaultShadowOptions = {
  shadowOffset: { width: 0, height: 0 },
  shadowRadius: 4,
  shadowOpacity: 0.25,
};
export const defaultScreenOptions = {
  headerShown: false,
};
export const useScreenWithHeaderOptions = (): BottomTabNavigationOptions => {
  const backgroundColor = useThemeColor({}, "background");
  const iconColor = useThemeColor({}, "icon");
  const borderColor = useThemeColor({}, "border");
  return {
    headerTitle: () => null,
    headerStyle: {
      backgroundColor,
      ...defaultShadowOptions,
      shadowColor: borderColor,
    },
    headerLeft: () => <MenuIcon iconColor={iconColor} />,
    headerRight: () => (
      <Ionicons
        name="notifications"
        size={24}
        color={iconColor}
        style={{ marginRight: Margin.MEDIUM }}
        onPress={() => {
          // handle right icon press
        }}
      />
    ),
  };
};

export const useScreenWithBackOptions = (): StackNavigationOptions => {
  const backgroundColor = useThemeColor({}, "background");
  const iconColor = useThemeColor({}, "icon");
  const borderColor = useThemeColor({}, "border");
  return {
    headerTitle: () => null,
    headerStyle: {
      backgroundColor,
      ...defaultShadowOptions,
      shadowColor: borderColor,
    },
    headerLeft: () => {
      const { goBack } = useNavigation();
      return <ArrowBack onPress={goBack} iconColor={iconColor} />;
    },
    headerRight: () => null,
  };
};
