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
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import defaultStyles from "./app/config/styles";
import ImageInputList from "./app/components/ImageInputList";

const Tweets = ({ navigation }) => {
  return (
    <Screen>
      <Text>Tweets</Text>
      <Button
        title="View Teet"
        onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
      ></Button>
    </Screen>
  );
};
const TweetDetails = ({ route }) => {
  const { id } = route.params;
  return (
    <Screen>
      <Text>Tweet Details {id}</Text>
    </Screen>
  );
};

const Account = () => {
  return (
    <Screen>
      <Text>Account</Text>
    </Screen>
  );
};
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "dodgerblue" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="Tweets" component={Tweets} />
      <Stack.Screen
        options={({ route }) => ({ title: `Tweet Details ${route.params.id}` })}
        name="TweetDetails"
        component={TweetDetails}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: "tomato",
        activeTintColor: "white",
        inactiveBackgroundColor: "#eee",
        inactiveTintColor: "black",
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons size={size} color={color} name="home" />
          ),
        }}
        name="Feed"
        component={Tweets}
      />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
