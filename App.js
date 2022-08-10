import React from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";
import { View } from "react-native";
import { StyleSheet } from "react-native";
export default function App() {
  return (
    <View style={styles.cardContainer}>
      <Card
        title="Red jacket for sale"
        subTitle="100€"
        image={require("./app/assets/jacket.jpg")}
      ></Card>
    </View>
  );
}
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#f8f4f4",
    padding: 20,
  },
});
