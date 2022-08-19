import React, { useState } from "react";
import { Text, Button } from "react-native";
import Screen from "./app/components/Screen";
import RegisterScreen from "./app/screens/RegisterScreen";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import AccountScreen from "./app/screens/AccountScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

import ImageInput from "./app/components/ImageInput";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import defaultStyles from "./app/config/styles";
import ImageInputList from "./app/components/ImageInputList";
import myTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const demo = async () => {
    try {
      await AsyncStorage.setItem("person", JSON.stringify({ id: 1 }));
      const value = await AsyncStorage.getItem("person");
      const person = JSON.parse(value);
      console.log(person);
    } catch (error) {
      console.log(error);
    }
  };

  demo();
  return (
    <NavigationContainer theme={myTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}

// OFFINE SUPPORT

// Notify the user and disable some features
// Cache data so it is available when the device is offline
// Store user actions (that envolve modifying data) while the app is offline to execute them later when device goes online
