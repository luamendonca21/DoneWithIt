import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
const AppTextInput = ({ icon, ...props }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={30}
          color={defaultStyles.colors.medium}
          {...props}
        />
      )}
      <TextInput
        style={[styles.textInput, defaultStyles.text]}
        {...props}
      ></TextInput>
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: defaultStyles.colors.secondary,
    backgroundColor: defaultStyles.colors.white,
    elevation: 5,
    padding: 10,
    shadowColor: defaultStyles.colors.secondary,
  },
  textInput: {
    marginLeft: 8,
  },
});
