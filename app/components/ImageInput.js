import React, { useEffect } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";

import defaultStyles from "../config/styles";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const ImageInput = ({ imageUri, onChangeImage }) => {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert("You need to enable permission to acess the library");
  };

  const handlePress = () => {
    !imageUri ? selectImage() : deleteImage();
  };

  const selectImage = async () => {
    try {
      const { uri, cancelled } = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!cancelled) onChangeImage(uri);
    } catch (error) {
      console.log("error reading an image", error);
    }
  };

  const deleteImage = () => {
    Alert.alert("Delete", "Are you sure you want do delete this image?", [
      { text: "Yes", onPress: () => onChangeImage(null) },
      { text: "No" },
    ]);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        {imageUri && (
          <Image source={{ uri: imageUri }} style={styles.image}></Image>
        )}
        {!imageUri && (
          <MaterialCommunityIcons
            size={50}
            color={defaultStyles.colors.medium}
            name="camera"
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ImageInput;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  container: {
    borderRadius: 20,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: defaultStyles.colors.light,
  },
});
