import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import defaultStyles from "../config/styles";

import colors from "../config/colors";

const AppButton = ({ title, color, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: defaultStyles.colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 50,
    backgroundColor: defaultStyles.colors.primary,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    marginVertical: 10,
  },
  text: {
    color: defaultStyles.colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
