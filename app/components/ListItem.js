import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "./AppText";

import colors from "../config/colors";

const ListItem = ({ title, subTitle, image }) => {
  return (
    <View style={styles.listItemContainer}>
      <Image style={styles.image} source={image}></Image>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  listItemContainer: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    color: colors.black,
    fontWeight: "500",
  },
  subTitle: {
    color: colors.grey,
  },
});
