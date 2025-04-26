import {
  ProductViewScreenNavigationProp,
  FullScreenRouteProp,
  ProductViewScreenRouteProp,
} from "@/routes";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {};

export const ProductViewScreen: FC<Props> = (props) => {
  const { navigate, goBack } = useNavigation<ProductViewScreenNavigationProp>();
  const route = useRoute<ProductViewScreenRouteProp>();
  const { id } = route.params;
  return (
    <View style={styles.conatainer}>
      <Text onPress={() => goBack()}>TestScreen</Text>
      <Text>{id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "teal",
  },
});
