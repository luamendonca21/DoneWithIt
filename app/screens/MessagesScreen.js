import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";

import Screen from "../components/Screen";
const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/luana.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/luana.jpg"),
  },
];

const MessagesScreen = () => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.listItemContainer}>
        <ListItem
          title={item.title}
          subTitle={item.description}
          image={item.image}
          onPress={() => console.log("Message selected!", item)}
        />
      </View>
    );
  };
  return (
    <Screen>
      <FlatList
        ItemSeparatorComponent={ListItemSeparator}
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={renderItem}
      />
    </Screen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  listItemContainer: {
    padding: 15,
  },
});
