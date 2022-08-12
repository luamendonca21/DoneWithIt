import React from "react";
import { View, StyleSheet, Image } from "react-native";

import Screen from "../components/Screen";

import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import AppText from "../components/AppText";

import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.image} source={require("../assets/logo-red.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <AppTextInput
              autoFocus={true}
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={handleChange("email")}
              icon="email"
              placeholder="Email"
              keyboardType="email-address"
            />
            <AppText style={{ color: "red" }}>{errors.email}</AppText>
            <AppTextInput
              onChangeText={handleChange("password")}
              icon="lock"
              secureTextEntry={true}
              placeholder="Password"
            />
            <AppText style={{ color: "red" }}>{errors.password}</AppText>

            <AppButton title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
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
  container: {
    padding: 20,
  },
});
