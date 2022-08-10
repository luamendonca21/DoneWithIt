import React from "react";
import { Text, Image, ImageBackground, StyleSheet, View } from "react-native";
import AppButton from "../components/AppButton";

import colors from "../config/colors";

const WelcomeScreen = () => {
  const { primary, secondary } = colors;
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.containerLogo}>
        <Image
          style={styles.logo}
          source={require("../assets/logo-red.png")}
        ></Image>
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          title="Login"
          color="primary"
          onPress={() => console.log("Tapped")}
        />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => console.log("Tapped")}
        />
      </View>
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
  logo: {
    width: 100,
    height: 100,
  },
  containerLogo: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  buttonsContainer: {
    width: "100%",
    padding: 20,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});
