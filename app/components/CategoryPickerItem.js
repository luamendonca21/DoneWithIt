import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import AppText from "./AppText";
import defaultStyles from "../config/styles";
import Icon from "./Icon";
const PickerItem = ({ label, onPress, icon, ...props }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.categoryContainer}>
          <Icon name={icon} size={70} {...props}></Icon>
          <AppText style={styles.text}>{label}</AppText>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PickerItem;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  text: {
    padding: 15,
    textAlign: "center",
  },
  categoryContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
});
