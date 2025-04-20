import { MenuIcon, Notification } from "@/components";
import { ArrowBack } from "@/components/icons/arrowBack";
import { useThemeColor } from "@/hooks";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

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
    headerRight: () => <Notification iconColor={iconColor} />,
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
      return <ArrowBack iconColor={iconColor} />;
    },
    headerRight: () => null,
  };
};
