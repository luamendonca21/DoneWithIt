import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";

export default function App() {
  const handleCliked = () => {
    console.log("text pressed");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={3} onPress={handleCliked}>
        Hello React Native - A really really long text. Now i wanna make this
        even longer and see what happens.
      </Text>
      <Image style={styles.image} source={require("./assets/icon.png")} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
});
