import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
import defaultStyles from "../config/styles";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";

const ListingsScreen = ({ navigation }) => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    const response = await listingsApi.getListings();
    console.log(response);
    setListings(response.data);
  };
  const renderItem = ({ item }) => {
    return (
      <Card
        onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
        title={item.title}
        subTitle={item.price + " €"}
        imageUrl={item.images[0].url}
      />
    );
  };
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <FlatList
          data={listings}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={renderItem}
        />
      </View>
    </Screen>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: defaultStyles.colors.light,
  },
  container: {
    padding: 20,
  },
});
