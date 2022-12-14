import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Screen from "../components/Screen";
import { ListItem, ListItemSeparator } from "../components/Lists";
import Icon from "../components/Icon";

import useAuth from "../auth/useAuth";
import defaultStyles from "../config/styles";

const AccountScreen = ({ navigation }) => {
  const { user, logOut } = useAuth();

  const menuItems = [
    {
      title: "My Listings",
      icon: {
        name: "format-list-bulleted",
        iconColor: defaultStyles.colors.white,
        size: 35,
        backgroundColor: defaultStyles.colors.primary,
      },
      targetScreen: "Feed",
    },
    {
      title: "My Messages",
      icon: {
        name: "email",
        iconColor: defaultStyles.colors.white,
        size: 35,
        backgroundColor: defaultStyles.colors.secondary,
      },
      targetScreen: "Messages",
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <ListItem
        showChevrons={true}
        title={item.title}
        IconComponent={
          <Icon
            name={item.icon.name}
            iconColor={item.icon.iconColor}
            size={item.icon.size}
            backgroundColor={item.icon.backgroundColor}
          />
        }
        onPress={() => navigation.navigate(item.targetScreen)}
      />
    );
  };
  return (
    <Screen style={styles.screen}>
      <View style={styles.userContainer}>
        <ListItem
          showChevrons={true}
          title={user.name}
          subTitle={user.email}
          image={require("../assets/luana.jpg")}
        />
      </View>
      <View style={styles.myListingsContainer}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={renderItem}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <ListItem
        showChevrons={true}
        title="Log Out"
        onPress={() => logOut()}
        IconComponent={
          <Icon
            name="logout"
            iconColor={defaultStyles.colors.white}
            size={35}
            backgroundColor="#ffe66d"
          />
        }
      />
    </Screen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: defaultStyles.colors.light,
  },
  userContainer: {
    backgroundColor: defaultStyles.colors.white,
  },
  myListingsContainer: {
    marginVertical: 20,
    backgroundColor: defaultStyles.colors.white,
  },
});
