import { Margin, Padding } from "@/constants";
import React, { FC } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { ThemedIcon } from "../icons/themedIcon";
import { SearchInput } from "../input/searchInput";
import { Seperator } from "../ui";

type Props = {
  backgroundColor: string;
  placeholder: string;
  style?: ViewStyle;
  onClose?: () => void;
  children?: React.ReactNode;
};

export const SearchSection: FC<Props> = ({
  backgroundColor,
  placeholder,
  style,
  onClose,
  children,
}) => {
  return (
    <>
      <View style={[styles.headerTop, style]}>
        <ThemedIcon
          iconName="close"
          iconColor="#6B7280"
          iconSize="small"
          onPress={onClose}
        />
        <ThemedIcon iconName="search" iconColor="#6B7280" iconSize="small" />
        <SearchInput
          placeholderTextColor={placeholder}
          backgroundColor={backgroundColor}
          placeHolder={placeholder}
        />
        <ThemedIcon iconName="heart" iconColor="#6B7280" iconSize="small" />
        <ThemedIcon iconName="menu" iconColor="#6B7280" iconSize="small" />
      </View>
      <View>{children}</View>
      <Seperator style={styles.seperator} />
    </>
  );
};

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
  },
  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.MEDIUM,
    gap: Margin.SMALL,
  },
  seperator: { marginTop: Margin.SMALL },
});
