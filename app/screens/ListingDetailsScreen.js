import React from "react";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import defaultStyles from "../config/styles";
import { ListItem } from "../components/Lists";
import { Image } from "react-native-expo-image-cache";
import ContactSellerForm from "../components/Forms/ContactSellerForm";
import { Platform } from "react-native";

const ListingDetailsScreen = ({ route }) => {
  const listing = route.params;
  return (
    <Screen>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
      >
        <View style={styles.listingContainer}>
          <Image style={styles.image} uri={listing.images[0].url} />
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{listing.title}</AppText>
            <AppText style={styles.price}> {listing.price} €</AppText>
            <View style={styles.container}>
              <ListItem
                title="Luana Mendonça"
                subTitle="5 Listings"
                image={require("../assets/luana.jpg")}
              />
            </View>
          </View>
          <ContactSellerForm listing={listing} />
        </View>
      </KeyboardAvoidingView>
    </Screen>
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
