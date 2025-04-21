import { MenuIcon, Notification, SearchIcon } from "@/components";
import { ArrowBack } from "@/components/icons/arrowBack";
import { useThemeColor } from "@/hooks";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";

import { StackNavigationOptions } from "@react-navigation/stack";
import { RootNaviatorPramList } from "./types";
import { StyleSheet, TextInput, View } from "react-native";

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

export const useScreenWithSearchBarOptions = (
  search: string,
  setSearch: (text: string) => void
): StackNavigationOptions => {
  const backgroundColor = useThemeColor({}, "background");
  const borderColor = useThemeColor({}, "border");
  const placeholderColor = "red";
  const textColor = useThemeColor({}, "text");
  const { goBack } = useNavigation();
  return {
    headerStyle: {
      backgroundColor,
      ...defaultShadowOptions,
      shadowColor: borderColor,
    },
    headerTitle: () => (
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Search..."
          placeholderTextColor={placeholderColor}
          value={search}
          onChangeText={setSearch}
          style={[styles.input, { color: textColor }]}
        />
      </View>
    ),
    headerLeft: () => null,
    headerRight: () => null,
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
      const { goBack } = useNavigation<RootNaviatorPramList>();
      return <ArrowBack iconColor={iconColor} onPress={goBack} />;
    },
    headerRight: () => null,
  };
};

const styles = StyleSheet.create({
  inputWrapper: {
    flex: 1,
    marginRight: 12,
    marginLeft: 8,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 36,
    justifyContent: "center",
  },
  input: {
    fontSize: 14,
    paddingVertical: 0,
  },
});
