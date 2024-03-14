import { Pressable, StyleSheet, Text } from "react-native";

export const RecordPaymentBtn = () => {
  return (
    <Pressable onPress={() => router.push("/invoice")} style={styles.button}>
      <Text style={styles.buttonText}>Record Payment</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#044E97",
    width: "100%",
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Fellix-SemiBold",
  },
});
