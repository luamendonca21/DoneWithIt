import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const handleCliked = () => {
    console.log("text pressed");
  };
  return (
    <View style={styles.container}>
      <Text numberOfLines={3} onPress={handleCliked}>
        Hello React Native - A really really long text. Now i wanna make this
        even longer and see what happens.
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
