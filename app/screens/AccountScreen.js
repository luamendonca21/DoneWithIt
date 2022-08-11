import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import AppText from "./../components/AppText";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import Icon from "../components/Icon";
import colors from "../config/colors";
import ListItemSeparator from "./../components/ListItemSeparator";

const AccountScreen = () => {
  const menuItems = [
    {
      title: "My Listings",
      icon: {
        name: "format-list-bulleted",
        iconColor: colors.white,
        size: 35,
        backgroundColor: colors.primary,
      },
    },
    {
      title: "My Messages",
      icon: {
        name: "email",
        iconColor: colors.white,
        size: 35,
        backgroundColor: colors.secondary,
      },
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <ListItem
        title={item.title}
        IconComponent={
          <Icon
            name={item.icon.name}
            iconColor={item.icon.iconColor}
            size={item.icon.size}
            backgroundColor={item.icon.backgroundColor}
          />
        }
      />
    );
  };
  return (
    <Screen style={styles.screen}>
      <View style={styles.userContainer}>
        <ListItem
          title="Luana Mendonça"
          subTitle="luamendonca_2000@hotmail.com"
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
        title="Log Out"
        IconComponent={
          <Icon
            name="logout"
            iconColor={colors.white}
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
    backgroundColor: colors.light,
  },
  userContainer: {
    marginTop: 10,
    backgroundColor: colors.white,
  },
  myListingsContainer: {
    marginVertical: 20,
    backgroundColor: colors.white,
  },
});
