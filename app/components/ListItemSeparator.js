import React from "react";
import { View, StyleSheet } from "react-native";

import defaultStyles from "../config/styles";

const ListItemSeparator = () => {
  return <View style={styles.separator}></View>;
};

export default ListItemSeparator;

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: defaultStyles.colors.light,
  },
});
