import { SearchSection } from "@/components";
import { useThemeColor } from "@/hooks";
import {
  ProductViewScreenNavigationProp,
  ProductViewScreenRouteProp,
} from "@/routes";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = {};

export const ProductViewScreen: FC<Props> = (props) => {
  const { navigate, goBack } = useNavigation<ProductViewScreenNavigationProp>();
  const route = useRoute<ProductViewScreenRouteProp>();
  const { top } = useSafeAreaInsets();
  const searchInputContainer = useThemeColor({}, "cardBackground");
  const { id } = route.params;
  return (
    <View style={styles.conatainer}>
      <SearchSection
        backgroundColor={searchInputContainer}
        placeholder="Search..."
        style={{ marginTop: top }}
      />
      <Text>{id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
  },
});
