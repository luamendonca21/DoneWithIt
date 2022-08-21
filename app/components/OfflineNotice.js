import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "./AppText";
import defaultStyles from "../config/styles";
import Constants from "expo-constants";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";

const OfflineNotice = () => {
  const netInfo = useNetInfo();
  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    );

  return null;
};

export default OfflineNotice;

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.danger,
    width: "100%",
    height: 50,
    zIndex: 1,
    top: Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "center",
    elevation: 1,
  },
  text: {
    color: defaultStyles.colors.white,
  },
});
