import { SafeAreaView, StyleSheet, View, Pressable, Text } from "react-native";
import { Ionicons, MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";
import { router } from "expo-router";
import { useFonts } from "expo-font";
import InvoiceDetails from "./invoice_data";
import react from "react";
import Slider from "@react-native-community/slider";
import { StatusBar } from "expo-status-bar";
import { period, recurrin_num } from "../constants";
import { DropDownMenu } from "../components/DropDownMenu";
import { RecordPaymentBtn } from "../components/RecordPayment";
import { DownloadBtnSection } from "../components/DownloadBtns";

const InvoicePage = () => {
  const [selected, setSelected] = react.useState();

  //   Load custom fonts on page render
  const [fontsLoaded] = useFonts({
    "Fellix-Bold": require("../assets/font/Fellix-Bold.ttf"),
    "Fellix-SemiBold": require("../assets/font/Fellix-SemiBold.ttf"),
    "Fellix-Medium": require("../assets/font/Fellix-Medium.ttf"),
    "Fellix-Regular": require("../assets/font/Fellix-Regular.ttf"),
    "Fellix-RegularItalic": require("../assets/font/Fellix-RegularItalic.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#F2F9FD" />
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={18} color="black" />
        </Pressable>
        <Text style={styles.text_color}>INV-001</Text>
        <Text style={styles.text_color}>Refund</Text>
      </View>
      <View style={styles.invoice_box}>
        <MaterialCommunityIcons
          name="clock-time-five-outline"
          size={16}
          color="black"
          style={{ alignSelf: "flex-end" }}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={[styles.paid, { fontSize: 12 }]}>Paid</Text>
          <Text style={[styles.text_norm, { fontSize: 12 }]}>
            Created:{" "}
            <Text style={{ color: "#044E97", fontFamily: "Fellix-Medium" }}>
              9/11/2023
            </Text>
          </Text>
        </View>
        <View style={styles.exchange_sec}>
          <View style={{ flexDirection: "column", gap: 4 }}>
            <Text>
              You're due{" "}
              <Text style={{ fontFamily: "Fellix-Bold", fontSize: 12 }}>
                N150,000.00
              </Text>{" "}
            </Text>
            <Text style={{ fontFamily: "Fellix-RegularItalic", fontSize: 12 }}>
              Exchange rate: N1 per $
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.color_semibold_text}>Copy Payment Link </Text>
            <Fontisto
              name="link2"
              size={12}
              color="#044E97"
              style={{ paddingLeft: 10 }}
            />
          </View>
        </View>
        <View>
          <View style={styles.select_btn_box}>
            <DropDownMenu data={recurrin_num} setSelected={setSelected} />
            <DropDownMenu data={period} setSelected={setSelected} />
          </View>
        </View>
        <View style={{ flexDirection: "column", gap: 6 }}>
          <Text style={styles.color_semibold_text}>
            The next recurring date is
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <Text
              style={{
                fontFamily: "Fellix-Bold",
                fontSize: 12,
              }}
            >
              Recurring Invoice
            </Text>
            <Slider
              style={{ width: 80, height: 25 }}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
            />
          </View>
        </View>
        <InvoiceDetails />
      </View>
      <DownloadBtnSection />
      <RecordPaymentBtn />
    </SafeAreaView>
  );
};
export default InvoicePage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2F9FD",
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    fontSize: 20,
  },
  paid: {
    backgroundColor: "#B5CDB4",
    width: 40,
    paddingVertical: 4,
    color: "#088306",
    textAlign: "center",
    justifyContent: "center",
    fontFamily: "Fellix-SemiBold",
  },
  invoice_box: {
    height: 710,
    flex: 1,
    width: "100%",
    marginTop: 4,
  },
  exchange_sec: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  select_btn_box: {
    height: 44,
    flexDirection: "row",
    gap: 12,
    marginTop: 12,
    marginBottom: 8,
  },
  text_color: {
    color: "#044E97",
    fontSize: 16,
    fontFamily: "Fellix-SemiBold",
  },
  text_norm: {
    fontSize: 14,
  },
  color_semibold_text: {
    color: "#044E97",
    fontFamily: "Fellix-SemiBold",
    fontSize: 12,
  },
});
