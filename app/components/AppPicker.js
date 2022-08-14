import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "./Screen";
import AppText from "./AppText";
import defaultStyles from "../config/styles";
import PickerItem from "./PickerItem";

const AppPicker = ({
  icon,
  items,
  onSelectItem,
  selectedItem,
  placeholder,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={30}
              color={defaultStyles.colors.medium}
            />
          )}

          {selectedItem ? (
            <AppText style={styles.textInput}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

          <MaterialCommunityIcons
            name="chevron-down"
            size={30}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: defaultStyles.colors.secondary,
    backgroundColor: defaultStyles.colors.white,
    elevation: 5,
    padding: 10,
    marginVertical: 10,
    shadowColor: defaultStyles.colors.secondary,
  },
  textInput: {
    flex: 1,
    marginLeft: 8,
  },
  placeholder: {
    flex: 1,
    marginLeft: 8,
    color: defaultStyles.colors.medium,
  },
});
