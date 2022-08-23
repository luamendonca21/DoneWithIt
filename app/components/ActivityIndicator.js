import React from "react";
import LottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";
import defaultStyles from "../config/styles";

const ActivityIndicator = ({ visible = false }) => {
  if (!visible) return null;
  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        source={require("../assets/animations/loader.json")}
      />
    </View>
  );
};

export default ActivityIndicator;

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    backgroundColor: defaultStyles.colors.white,
    height: "100%",
    width: "100%",
    zIndex: 1,
    opacity: 0.8,
  },
});
