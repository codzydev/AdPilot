import { Margin } from "@/constants";
import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { CategoryGrid } from "../card/categoryGrid";
import { useNavigation } from "@react-navigation/native";
import { RootNaviatorPramList } from "@/routes";

type Props = {};
export const stylesData = [
  {
    id: "00",
    title: "Everyday",
    image: "https://m.media-amazon.com/images/I/71DBOxOZAmL._AC_UY1000_.jpg",
  },
  {
    id: "01",
    title: "Elegant",
    image:
      "https://www.newyorkdress.com/cdn/shop/products/LaDivine-CD868_greenary_600x.jpg?v=1745422889",
  },
  {
    id: "02",
    title: "Streetwear",
    image:
      "https://i.pinimg.com/736x/17/9c/47/179c47e9981054fa25910f05e8fc5b8f.jpg",
  },
  {
    id: "03",
    title: "Formal Casual",
    image: "https://www.wisconline.co.uk/images/webp/A49-min.webp",
  },

  {
    id: "04",
    title: "Basic",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScO2l0g9FDh2UVtb_VHYQyMJftLYgBO0_zx330qK45Gy-F7q6Z2mklHhsLKWL6Y6pKtyU&usqp=CAU",
  },
  {
    id: "09",
    title: "Vacation",
    image:
      "https://media.cupshe.com/cdn-review.cupshe.com/cmc-admin/2024_05_10/22_13_2216/1319fee3-48d4-474e-9d24-612344047ada/CAA05A4E162CT/1.jpg?speedsize=mxw_540",
  },
];

export const RightSection: FC<Props> = (props) => {
  const { navigate } = useNavigation<RootNaviatorPramList>();

  const handleProductPress = (itemId: string) => {
    console.log("Selected Product ID:", itemId);
    navigate("productViewScreen", { id: itemId });
  };

  return (
    <View style={{ gap: Margin.SMALL }}>
      <CategoryGrid
        options={stylesData}
        onSelect={handleProductPress}
        numColumns={3}
      />
      <CategoryGrid
        options={stylesData}
        onSelect={handleProductPress}
        numColumns={3}
      />
      <CategoryGrid
        options={stylesData}
        onSelect={handleProductPress}
        numColumns={3}
      />
      <CategoryGrid
        options={stylesData}
        onSelect={handleProductPress}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  conatainer: { flex: 1, gap: 10 },
});
