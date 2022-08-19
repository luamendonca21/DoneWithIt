import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import defaultStyles from "../config/styles";
import { Image } from "react-native-expo-image-cache";
import AppText from "./AppText";

const Card = ({ title, subTitle, imageUrl, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.cardContainer}>
        <Image style={styles.image} uri={imageUrl} />
        <View style={styles.detailsContainer}>
          <AppText numberOfLines={1}>{title}</AppText>
          <AppText style={styles.subtitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: "center",
    backgroundColor: "#fff",
    marginVertical: 20,
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginBottom: 10,
  },
  detailsContainer: {
    padding: 15,
  },
  subtitle: {
    color: defaultStyles.colors.secondary,
    fontWeight: "700",
    marginTop: 5,
  },
});
