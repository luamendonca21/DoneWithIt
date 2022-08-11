import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import Screen from "../components/Screen";
import colors from "../config/colors";
import AppText from "./../components/AppText";

const initialMessages = [
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
  const [messages, setMessages] = useState(initialMessages);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  const renderItem = ({ item }) => {
    return (
      <View style={styles.listItemContainer}>
        <ListItem
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
