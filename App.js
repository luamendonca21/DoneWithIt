import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";

import Screen from "./app/components/Screen";
import AppText from "./app/components/AppText";
import AppTextInput from "./app/components/AppTextInput";

export default function App() {
  return (
    <Screen>
      <AppTextInput placeholder="FirstName" icon="email" />
    </Screen>
  );
}
