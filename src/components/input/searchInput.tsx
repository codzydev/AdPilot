import React, { FC } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

type Props = {
  placeHolder?: string;
  onChangeText?: (text: string) => void;
  value?: string;
  placeholderTextColor?: string;
  backgroundColor?: string;
};

export const SearchInput: FC<Props> = ({
  placeholderTextColor,
  backgroundColor,
  placeHolder,
}) => {
  return (
    <TextInput
      placeholder={placeHolder}
      style={[styles.searchInput, { backgroundColor }]}
      placeholderTextColor={placeholderTextColor}
    />
  );
};

const styles = StyleSheet.create({
  searchInput: {
    flex: 1,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    fontSize: 14,
  },
});
