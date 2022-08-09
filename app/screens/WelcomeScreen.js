import React from "react";
import { Text, Image, ImageBackground, StyleSheet, View } from "react-native";

import colors from "../config/colors";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.containerLogo}>
        <Image
          style={styles.logo}
          source={require("../assets/logo-red.png")}
        ></Image>
        <Text>Sell What You Don't Need</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    justifyContent: "flex-end",
    flex: 1,
    alignItems: "center",
  },
  loginButton: {
    height: "10%",
    width: "100%",
    backgroundColor: colors.primary,
  },
  registerButton: {
    height: "10%",
    width: "100%",
    backgroundColor: colors.secondary,
  },
  logo: {
    width: 100,
    height: 100,
  },
  containerLogo: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
});
