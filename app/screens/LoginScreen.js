import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";

import Screen from "../components/Screen";
import colors from "../config/colors";
import defaultStyles from "../config/styles";

const LoginScreen = () => {
  return (
    <Screen>
      <Image style={styles.image} source={require("../assets/logo-red.png")} />
      <View style={styles.fiedlsContainer}>
        <AppTextInput
          autoFocus={true}
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          placeholder="Email"
          keyboardType="email-address"
        />
        <AppTextInput
          icon="lock"
          secureTextEntry={true}
          placeholder="Password"
        />
      </View>

      <View style={styles.buttonContainer}>
        <AppButton
          title="Login"
          onPress={() => console.log("Logged sucessfully")}
        />
      </View>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  fiedlsContainer: {
    height: 120,
    justifyContent: "space-around",
  },
  buttonContainer: {
    padding: 20,
  },
});
