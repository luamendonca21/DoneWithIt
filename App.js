import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Screen from "./app/components/Screen";
import RegisterScreen from "./app/screens/RegisterScreen";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import AccountScreen from "./app/screens/AccountScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  const [imageUri, setImageUri] = useState();
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert("You need to enable permission to acess the library");
  };

  const selectImage = async () => {
    try {
      const { uri, cancelled } = await ImagePicker.launchImageLibraryAsync();
      if (!cancelled) setImageUri(uri);
    } catch (error) {
      console.log("error reading an image", error);
    }
  };
  // equals to componentDidMount
  useEffect(() => {
    requestPermission();
  }, []);
  return (
    <Screen>
      <Button title="Select image" onPress={selectImage}></Button>
      <Image source={{ uri: imageUri }} style={styles.image}></Image>
    </Screen>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "50%",
  },
});
