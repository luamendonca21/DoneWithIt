import React, { useCallback, useContext, useState } from "react";
import { StyleSheet, Image } from "react-native";

import Screen from "../components/Screen";
import {
  ErrorMessage,
  AppFormField,
  SubmitButton,
  AppForm,
} from "../components/Forms";

import * as Yup from "yup";
import jwtDecode from "jwt-decode";

import authApi from "../api/auth";
import AuthContext from "./../auth/context";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  const authContext = useContext(AuthContext);
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    const user = jwtDecode(result.data);
    console.log(user);
    authContext.setUser(user);
  };
  return (
    <Screen style={styles.container}>
      <Image style={styles.image} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error="Invalid email and/or password."
          visible={loginFailed}
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          name="email"
          icon="email"
          placeholder="Email"
          keyboardType="email-address"
        />
        <AppFormField
          name="password"
          icon="lock"
          secureTextEntry={true}
          placeholder="Password"
        />

        <SubmitButton title="Login" />
      </AppForm>
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
