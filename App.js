import React, { useState } from "react";

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

import defaultStyles from "./app/config/styles";
import ImageInputList from "./app/components/ImageInputList";

export default function App() {
  const [imageUris, setImageUris] = useState([]);

  const handleRemove = (uri) => {
    const arrayUris = imageUris.filter((u) => u !== uri);
    setImageUris(arrayUris);
  };

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };

  return (
    <Screen>
      <ImageInputList
        imageUris={imageUris}
        onRemoveImage={handleRemove}
        onAddImage={handleAdd}
      />
    </Screen>
  );
}
