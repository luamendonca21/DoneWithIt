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
        placeholderTextColor={defaultStyles.colors.medium}
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
    width: "100%",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: defaultStyles.colors.primary,
    backgroundColor: defaultStyles.colors.white,
    elevation: 5,
    padding: 10,
    marginVertical: 10,
    shadowColor: defaultStyles.colors.primary,
  },
  textInput: {
    flex: 1,
    marginLeft: 8,
  },
});
