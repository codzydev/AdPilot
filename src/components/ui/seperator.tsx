import { useThemeColor } from "@/hooks";
import React, { FC } from "react";
import { View, ViewStyle } from "react-native";

type Props = {
  style?: ViewStyle;
};

export const Seperator: FC<Props> = ({ style }) => {
  const backgroundColor = useThemeColor({}, "border");

  return <View style={{ height: 1, backgroundColor, ...style }} />;
};
