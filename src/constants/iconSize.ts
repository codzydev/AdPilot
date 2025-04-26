type IconSize = "small" | "medium" | "large";

export type IconSizeMap = {
  [key in IconSize]: number;
};

const iconSize: IconSizeMap = {
  small: 16, // Suitable for inline icons or small buttons
  medium: 24, // Default size, fits most buttons/headers
  large: 32, // For large buttons or prominent icons
};

export const IconSize = {
  ...iconSize,
};
