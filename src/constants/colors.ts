/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "red";

export const Colors = {
  light: {
    text: "#1C1C1E", // Dark readable text
    background: "#FFFFFF", // Pure white background
    tint: "#0A84FF", // Blue primary tint
    icon: "#6E6E73", // Neutral dark icon color
    tabIconDefault: "#A1A1AA", // Inactive tab icons (soft gray)
    tabIconSelected: "#0A84FF", // Selected tab (tint)
    border: "#E5E7EB", // Soft light gray border

    primary: "#0A84FF", // Primary action (blue)
    secondary: "#5E5CE6", // Secondary action (purple)
    success: "#34C759", // Success (green)
    warning: "#FF9F0A", // Warning (orange)
    error: "#FF3B30", // Error (red)
    info: "#5AC8FA", // Info (light blue)

    disabled: "#D1D5DB", // Disabled buttons/text
    placeholder: "#9CA3AF", // Placeholder text (cool gray)
    cardBackground: "#F3F4F6", // Soft card background
    overlay: "rgba(0,0,0,0.1)", // Subtle overlay for modals

    gradientStart: "#0A84FF", // Gradient start (blue)
    gradientEnd: "#5AC8FA", // Gradient end (light blue)
  },
  dark: {
    text: "#F2F2F7", // Very light text for contrast
    background: "#1C1C1E", // Dark background (iOS dark gray)
    tint: "#0A84FF", // Same tint (consistent between themes)
    icon: "#9BA1A6", // Light gray icons
    tabIconDefault: "#6B7280", // Muted gray tabs
    tabIconSelected: "#0A84FF", // Selected tab (tint)
    border: "#2C2C2E", // Soft dark border

    primary: "#0A84FF", // Primary blue (same as light)
    secondary: "#5E5CE6", // Secondary purple (same as light)
    success: "#30D158", // Success (slightly brighter green)
    warning: "#FFD60A", // Warning (bright yellow)
    error: "#FF453A", // Error (red)
    info: "#64D2FF", // Info (bright cyan)

    disabled: "#3A3B3C", // Dark gray disabled
    placeholder: "#6B7280", // Placeholder text
    cardBackground: "#2C2C2E", // Dark card background
    overlay: "rgba(255,255,255,0.1)", // Subtle light overlay for modals

    gradientStart: "#0A84FF", // Gradient start (blue)
    gradientEnd: "#64D2FF", // Gradient end (cyan)
  },
};
