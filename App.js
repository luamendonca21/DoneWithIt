import React from "react";
import { View, Text } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import colors from "./app/config/colors";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontFamily: "Roboto",
          fontSize: 30,
          fontStyle: "italic",
          fontWeight: "bold",
          color: "tomato",
          textTransform: "capitalize",
          textAlign: "center",
          lineHeight: 30,
        }}
      >
        I love React Native! This is my first React Native app! Here's some more
        text
      </Text>
    </View>
  );
}
