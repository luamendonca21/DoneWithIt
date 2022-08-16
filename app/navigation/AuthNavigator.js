import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CardStyleInterpolators } from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";

import defaultStyles from "../config/styles";
const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        options={{ title: "Welcome", headerShown: false }}
        name="WelcomeScreen"
        component={WelcomeScreen}
      />
      <Stack.Screen
        options={{ title: "Login" }}
        name="LoginScreen"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{ title: "Registration" }}
        name="RegisterScreen"
        component={RegisterScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
