import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons
          name="close"
          size={35}
          color={defaultStyles.colors.white}
        ></MaterialCommunityIcons>
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={35}
          color={defaultStyles.colors.white}
        ></MaterialCommunityIcons>
      </View>
      <Image
        style={styles.image}
        source={require("../assets/chair.jpg")}
      ></Image>
    </View>
  );
};

export default ViewImageScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
});
