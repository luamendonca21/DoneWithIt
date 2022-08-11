import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ListItemDeleteAction = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="trash-can"
        size={35}
        color="white"
      ></MaterialCommunityIcons>
    </View>
  );
};

export default ListItemDeleteAction;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
});
