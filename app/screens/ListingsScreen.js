import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
import defaultStyles from "../config/styles";
import routes from "../navigation/routes";
const ListingsScreen = ({ navigation }) => {
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
      price: 150,
      image: require("../assets/couch.jpg"),
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <Card
        onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
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
    backgroundColor: defaultStyles.colors.light,
  },
  container: {
    padding: 20,
  },
});
