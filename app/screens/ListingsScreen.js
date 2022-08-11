import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
const ListingsScreen = () => {
  const listings = [
    {
      id: 1,
      title: "Red jacket for sale",
      price: 100,
      image: require("../assets/jacket.jpg"),
    },
    {
      id: 2,
      title: "Couch in great condition",
      price: 100,
      image: require("../assets/couch.jpg"),
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <Card
        title={item.title}
        subTitle={item.price + " €"}
        image={item.image}
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
    backgroundColor: colors.light,
  },
  container: {
    padding: 20,
  },
});
