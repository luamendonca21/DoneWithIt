import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListingsScreen from "./../screens/ListingsScreen";
import ListingDetailsScreen from "./../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => {
  return (
    <Stack.Navigator mode="">
      <Stack.Screen
        options={{ title: "Listings" }}
        name="Listings"
        component={ListingsScreen}
      />
      <Stack.Screen
        options={{ title: "Listing Details" }}
        name="ListingDetails"
        component={ListingDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
