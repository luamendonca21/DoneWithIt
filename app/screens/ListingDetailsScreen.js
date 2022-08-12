import React from "react";

import { View, StyleSheet, Image } from "react-native";
import AppText from "../components/AppText";

import defaultStyles from "../config/styles";
import ListItem from "./../components/ListItem";

const ListingDetailsScreen = () => {
  return (
    <View style={styles.listingContainer}>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}> Red jacket for sale</AppText>
        <AppText style={styles.price}> 100€</AppText>
        <View style={styles.container}>
          <ListItem
            title="Luana Mendonça"
            subTitle="5 Listings"
            image={require("../assets/luana.jpg")}
          />
        </View>
      </View>
    </View>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  container: {
    marginVertical: 35,
  },
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
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: defaultStyles.colors.secondary,
    marginTop: 5,
  },
});
