import React from "react";

import { View, StyleSheet, Image } from "react-native";
import AppText from "../components/AppText";

import colors from "../config/colors";

const ListingDetailsScreen = () => {
  return (
    <View style={styles.listingContainer}>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}> Red jacket for sale</AppText>
        <AppText style={styles.price}> 100€</AppText>
      </View>
    </View>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  listingContainer: {
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 15,
  },
  title: {
    color: colors.black,
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    marginTop: 5,
  },
});