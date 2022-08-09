import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  Image,
  SafeAreaView,
  Alert,
  StatusBar,
  Button,
  Platform,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello React Native</Text>
      <Button
        color="orange"
        title="Click me"
        onPress={() =>
          Alert.alert("My title", "My message", [
            { text: "Yes", onPress: () => console.log("yes") },
            { text: "No", onPress: () => console.log("No") },
          ])
        }
      ></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
