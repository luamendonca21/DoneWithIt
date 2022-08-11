import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "./../components/AppText";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import Icon from "../components/Icon";
import colors from "../config/colors";

const AccountScreen = () => {
  const settings = [
    { id: 1, name: "My Listings" },
    { id: 2, name: "My Messages" },
  ];
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
        <ListItem
          title="My Listings"
          size={40}
          ImageComponent={
            <Icon
              name="format-list-bulleted"
              iconColor={colors.white}
              size={40}
              backgroundColor={colors.primary}
            />
          }
        />
      </View>
      <View style={styles.myListingsContainer}>
        <ListItem
          title="My Messages"
          size={40}
          ImageComponent={
            <Icon
              name="message"
              iconColor={colors.white}
              size={40}
              backgroundColor="dodgerblue"
            />
          }
        />
      </View>
      <View style={styles.myListingsContainer}>
        <ListItem
          title="Log Out"
          size={40}
          ImageComponent={
            <Icon
              name="logout"
              iconColor={colors.white}
              size={40}
              backgroundColor="yellow"
            />
          }
        />
      </View>
    </Screen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  userContainer: {
    marginVertical: 20,
    backgroundColor: colors.white,
  },
  myListingsContainer: {
    marginTop: 10,
    backgroundColor: colors.white,
  },
});
