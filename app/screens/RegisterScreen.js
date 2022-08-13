import React from "react";
import Screen from "../components/Screen";
import { StyleSheet } from "react-native";
import { AppFormField, SubmitButton, AppForm } from "../components/Forms";
import * as Yup from "yup";

const validateYupSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});
const RegisterScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={validateYupSchema}
        onSubmit={(values) => console.log(values)}
      >
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
    </Screen>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
