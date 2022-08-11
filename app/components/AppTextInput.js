import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const AppTextInput = ({ icon, iconSize, ...props }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          style={styles.icon}
          name={icon}
          size={iconSize}
          {...props}
        />
      )}
      <TextInput style={styles.input} {...props}></TextInput>
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    borderRadius: 25,
    height: 45,
    borderWidth: 1,
    borderColor: "dodgerblue",
    backgroundColor: "white",
    elevation: 5,
    shadowColor: "#00406a",
  },
  input: {
    width: "90%",
    height: 40,
    fontSize: 16,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.black,
  },
  icon: { marginLeft: 30, paddingRight: 5 },
});
