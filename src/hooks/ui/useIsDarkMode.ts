import { useColorScheme } from "react-native";

export const useIsDarkMode = (): boolean => {
  return useColorScheme() === "dark";
};