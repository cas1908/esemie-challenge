import { router } from "expo-router";
import {
  Text,
  StyleSheet,
  Pressable,
  SafeAreaView,
  ImageBackground,
} from "react-native";

const OnboardingScreen = () => {
  const image = require("../assets/bg.jpg");
  return (
    <ImageBackground source={image} style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Pressable
          onPress={() => router.push("/invoice")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>View Invoice</Text>
        </Pressable>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#044E97",
    width: 200,
    height: 70,
    borderTopColor: "#FF6702",
    borderTopWidth: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 32,
  },
});
