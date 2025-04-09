import { useThemeColor } from "@/hooks";
import { Ionicons } from "@expo/vector-icons";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

export const defaultScreenOptions: BottomTabNavigationOptions = {
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
      shadowOffset: { width: 0, height: 0 },
      shadowRadius: 4,
      shadowOpacity: 0.25,
      shadowColor: borderColor,
    },
    headerLeft: () => (
      <Ionicons
        name="menu"
        size={24}
        color={iconColor}
        style={{ marginLeft: 0 }}
        onPress={() => {
          // handle left icon press
        }}
      />
    ),
    headerRight: () => (
      <Ionicons
        name="notifications"
        size={24}
        color={iconColor}
        style={{ marginRight: 0 }}
        onPress={() => {
          // handle right icon press
        }}
      />
    ),
  };
};
