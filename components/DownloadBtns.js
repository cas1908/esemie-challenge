import { StyleSheet, Text, View } from "react-native";
import { Octicons, AntDesign, FontAwesome5 } from "@expo/vector-icons";

export const DownloadBtnSection = () => {
  return (
    <View style={styles.download_section}>
      <View
        style={[
          styles.download_section_sub,
          { borderRightWidth: 1, borderColor: "#D6DADD", paddingRight: 10 },
        ]}
      >
        <Text style={[styles.text_color, {}]}>Preview & Download </Text>
        <Octicons name="download" size={16} color="#044E97" />
      </View>
      <View
        style={[
          styles.download_section_sub,
          { borderRightWidth: 1, borderColor: "#D6DADD", paddingRight: 10 },
        ]}
      >
        <Text style={styles.text_color}>Print</Text>
        <AntDesign name="printer" size={16} color="#044E97" />
      </View>
      <View style={styles.download_section_sub}>
        <Text style={styles.text_color}>Send reminders </Text>
        <FontAwesome5 name="calendar" size={16} color="#044E97" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  download_section: {
    borderWidth: 1,
    borderColor: "#044E97",
    width: "100%",
    height: 40,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(217, 217, 217, 0.2)",
    marginVertical: 12,
  },
  download_section_sub: {
    flexDirection: "row",
    gap: 5,
    height: 29,
    justifyContent: "center",
    alignItems: "center",
  },
  text_color: {
    color: "#044E97",
    fontSize: 16,
    fontFamily: "Fellix-SemiBold",
  }
});

