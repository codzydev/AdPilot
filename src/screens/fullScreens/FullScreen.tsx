import { FullScreenNavigationProp, FullScreenRouteProp } from "@/routes";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {};

export const FullScreen: FC<Props> = (props) => {
  const { navigate, goBack } = useNavigation<FullScreenNavigationProp>();
  const route = useRoute<FullScreenRouteProp>();
  const { name } = route.params;
  return (
    <View style={styles.conatainer}>
      <Text onPress={() => goBack()}>TestScreen</Text>
      <Text>{name}</Text>
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
