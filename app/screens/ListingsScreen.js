import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import Card from "../components/Card";
import defaultStyles from "../config/styles";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";
import AppText from "./../components/AppText";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

const ListingsScreen = ({ navigation }) => {
  const {
    data: listings,
    error,
    loading,
    request: loadListings,
  } = useApi(listingsApi.getListings);

  useEffect(() => {
    loadListings();
  }, []);

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
        {error && (
          <>
            <AppText>Couldn't retrieve the listings.</AppText>
            <AppButton title="Retry" onPress={loadListings}></AppButton>
          </>
        )}
        <ActivityIndicator visible={loading} />
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
    flex: 1,
    padding: 20,
  },
});
