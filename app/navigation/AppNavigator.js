import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListingEditScreen from "../screens/ListingEditScreen";

import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NewListingButton from "./NewListingButton";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
        name="Feed"
        component={FeedNavigator}
      ></Tab.Screen>
      <Tab.Screen
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate("ListingsEdit")}
            />
          ),
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              size={size}
              color={color}
            />
          ),
        })}
        name="ListingsEdit"
        component={ListingEditScreen}
      ></Tab.Screen>
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
        name="Account"
        component={AccountNavigator}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default AppNavigator;
