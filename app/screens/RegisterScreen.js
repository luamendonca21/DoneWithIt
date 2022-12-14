import React, { useState } from "react";
import Screen from "../components/Screen";
import { StyleSheet, View } from "react-native";
import {
  AppFormField,
  SubmitButton,
  AppForm,
  ErrorMessage,
} from "../components/Forms";
import * as Yup from "yup";
import usersApi from "../api/users";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";

const validateYupSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});
const RegisterScreen = () => {
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const { logIn } = useAuth();
  const [error, setError] = useState(false);

  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo);
    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occurred.");
        console.log(result);
      }
      return;
    }

    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    logIn(authToken);
  };
  return (
    <>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <View style={styles.container}>
        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={validateYupSchema}
          onSubmit={handleSubmit}
        >
          <ErrorMessage error={error} visible={error} />
          <AppFormField name="name" icon="account-circle" placeholder="Name" />
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
            placeholder="Password"
            secureTextEntry={true}
          />
          <SubmitButton title="Register" />
        </AppForm>
      </View>
    </>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
