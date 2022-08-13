import React from "react";
import { View, StyleSheet, Image } from "react-native";

import Screen from "../components/Screen";

import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import AppText from "../components/AppText";
import ErrorMessage from "../components/ErrorMessage";
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
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppTextInput
              onBlur={() => setFieldTouched("email")}
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={handleChange("email")}
              icon="email"
              placeholder="Email"
              keyboardType="email-address"
            />
            <ErrorMessage error={errors.email} visible={touched.email} />
            <AppTextInput
              onBlur={() => setFieldTouched("password")}
              onChangeText={handleChange("password")}
              icon="lock"
              secureTextEntry={true}
              placeholder="Password"
            />
            <ErrorMessage error={errors.password} visible={touched.password} />

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
