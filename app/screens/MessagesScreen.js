import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from "../components/Lists";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title: "Luana Mendonça",
    description: "Hey! Is this item still available?",
    image: require("../assets/luana.jpg"),
  },
  {
    id: 2,
    title: "Luana Mendonça",
    description:
      "I'm interested in this item. When will you be able to post it?",
    image: require("../assets/luana.jpg"),
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  const renderItem = ({ item }) => {
    return (
      <View style={styles.listItemContainer}>
        <ListItem
          showChevrons={true}
          title={item.title}
          subTitle={item.description}
          image={item.image}
          onPress={() => console.log("Message selected!", item)}
          renderRightActions={() => (
            <ListItemDeleteAction onPress={() => handleDelete(item)} />
          )}
        />
      </View>
    );
  };

  return (
    <FlatList
      ItemSeparatorComponent={ListItemSeparator}
      data={messages}
      keyExtractor={(message) => message.id.toString()}
      renderItem={renderItem}
      refreshing={refreshing}
      onRefresh={() =>
        setMessages([
          {
            id: 2,
            title: "T2",
            description: "D2",
            image: require("../assets/luana.jpg"),
          },
        ])
      }
    />
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  listItemContainer: {
    padding: 15,
  },
});
