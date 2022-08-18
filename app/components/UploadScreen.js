import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import * as Progress from "react-native-progress";
import defaultStyles from "../config/styles";

const UploadScreen = ({ progress = 0, visible = false }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <Progress.Bar
          progress={progress}
          color={defaultStyles.colors.primary}
          width={200}
        />
      </View>
    </Modal>
  );
};

export default UploadScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
