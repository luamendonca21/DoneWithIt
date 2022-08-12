import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const AppTextInput = ({ icon, iconSize, ...props }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons name={icon} size={iconSize} {...props} />
      )}
      <TextInput style={styles.textInput} {...props}></TextInput>
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    flexDirection: "row",
    width: "90%",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "dodgerblue",
    backgroundColor: "white",
    elevation: 5,
    padding: 10,
    shadowColor: "#00406a",
    marginVertical: 10,
  },
  textInput: {
    fontSize: 16,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.black,
    marginLeft: 8,
  },
});
