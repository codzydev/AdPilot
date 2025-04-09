type Size =
  | "xxSmall"
  | "xSmall"
  | "small"
  | "medium"
  | "large"
  | "xLarge"
  | "xxLarge";

type FontSizeMap = {
  [key in Size]: number;
};

const fontSize: FontSizeMap = {
  xxSmall: 8,
  xSmall: 10,
  small: 12,
  medium: 14,
  large: 18,
  xLarge: 24,
  xxLarge: 32,
};

export const FontSize = {
  ...fontSize,
};
