import React, { useState } from "react";
import { StyleSheet, Switch, TextInput, View } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";

import Screen from "./app/components/Screen";
import AppText from "./app/components/AppText";

export default function App() {
  const [isNew, setIsNew] = useState(false);
  return (
    <Screen>
      <Switch
        thumbColor={isNew ? "#fc5c65" : "#6e6969"}
        trackColor={{ false: "#6e6969", true: "#fc5c65" }}
        value={isNew}
        onValueChange={(newValue) => setIsNew(newValue)}
      />
    </Screen>
  );
}
