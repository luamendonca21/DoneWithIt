import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

const AppText = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    color: "tomato",
    ...Platform.select({
      ios: { fontSize: 18, fontFamily: "Avenir" },
      android: { fontSize: 16, fontFamily: "Roboto" },
    }),
  },
});
