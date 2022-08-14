import React from "react";
import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import AppText from "../AppText";
import defaultStyles from "../../config/styles";

import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ListItem = ({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
  showChevrons,
}) => {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight
          underlayColor={defaultStyles.colors.light}
          onPress={onPress}
        >
          <View style={styles.listItemContainer}>
            {IconComponent}
            {image && <Image style={styles.image} source={image}></Image>}
            <View style={styles.detailsContainer}>
              <AppText numberOfLines={1} style={styles.title}>
                {title}
              </AppText>
              {subTitle && (
                <AppText numberOfLines={2} style={styles.subTitle}>
                  {subTitle}
                </AppText>
              )}
            </View>

            {showChevrons ? (
              <MaterialCommunityIcons
                name="chevron-right"
                size={30}
                color={defaultStyles.colors.medium}
              />
            ) : null}
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  listItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: defaultStyles.colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: defaultStyles.colors.medium,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
});
