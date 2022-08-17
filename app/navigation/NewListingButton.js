import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import defaultStyles from "../config/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const NewListingButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          size={40}
          color={defaultStyles.colors.white}
        />
      </View>
    </TouchableOpacity>
  );
};

export default NewListingButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.primary,
    height: 70,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 35,
    bottom: 30,
  },
});
