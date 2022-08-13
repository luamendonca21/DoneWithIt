import React, { useState } from "react";
import { StyleSheet, Switch, TextInput, View } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import LoginScreen from "./app/screens/LoginScreen";

import Screen from "./app/components/Screen";
import AppText from "./app/components/AppText";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";

const categories = [
  { label: " Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];
export default function App() {
  const [category, setCategory] = useState();
  return (
    <Screen>
      {/* <View style={{ marginTop: 10 }}>
        <AppPicker
          selectedItem={category}
          onSelectItem={(item) => setCategory(item)}
          items={categories}
          icon="apps"
          placeholder="Category"
        ></AppPicker>
        <AppTextInput
          icon="email"
          placeholder="Enter your nanme"
        ></AppTextInput>
      </View> */}
      <MessagesScreen />
    </Screen>
  );
}
