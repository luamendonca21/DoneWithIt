import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import AppText from "./AppText";
import defaultStyles from "../config/styles";
import Icon from "./Icon";
const PickerItem = ({ label, onPress, item }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.categoryContainer}>
          <Icon
            name={item.icon.name}
            size={80}
            iconColor={item.icon.iconColor}
            backgroundColor={item.icon.backgroundColor}
          ></Icon>
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
    width: "33%",
    paddingVertical: 10,
  },
  text: {
    padding: 10,
    textAlign: "center",
  },
  categoryContainer: {
    alignItems: "center",
    padding: 15,
  },
});
