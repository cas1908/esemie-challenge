import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import InvoiceData from "../assets/mock/invoiceData.json";
const InvoiceDetails = () => {
  const [data, setData] = useState([]);
  // fetch mock data
  useEffect(() => {
    setData(InvoiceData);
  }, []);

  return (
    <>
      <View style={[styles.invoice_details_box, { borderTopWidth: 2 }]}>
        <View style={{ gap: 4 }}>
          <Text style={styles.inv_addr}>{[data.company_name, " PLC"]}</Text>
          <Text style={styles.inv_addr}>
            {[
              data.company_city,
              ", ",
              data.company_state,
              ", ",
              data.company_country,
            ]}
          </Text>
          <Text style={styles.inv_addr}>{["+62 ", data.company_tel]}</Text>
        </View>
        <View style={{ gap: 4, alignItems: "flex-end" }}>
          <Text style={[styles.invoice_heading]}>INVOICE</Text>
          <Text style={[styles.inv]}>INV-{data.invoice_num?.slice(-4)}</Text>
          <Text style={[styles.inv, { marginTop: 2 }]}>Balance due</Text>
          <Text style={styles.inv}>{data.invoice_bal}</Text>
        </View>
      </View>
      {/*  */}
      <View style={styles.invoice_details_box}>
        <View>
          <Text style={[styles.inv_bal, { marginBottom: 4 }]}>Bill To</Text>
          <Text style={styles.inv}>{data.customer_name}</Text>
          <Text style={styles.inv_addr}>{data.customer_address}</Text>
          <Text style={styles.inv_addr}>{data.customer_city}</Text>
          <Text style={styles.inv_addr}>{data.customer_state}</Text>
        </View>
        <View style={{ gap: 8, alignItems: "flex-end" }}>
          <Text style={styles.inv_addr}>Invoice Date</Text>
          <Text style={[styles.inv_bal, { marginBottom: 4 }]}>
            {data.invoice_createdDate}
          </Text>
          <Text style={styles.inv_addr}>Due Date</Text>
          <Text style={styles.inv_bal}>{data.invoice_dueDate}</Text>
        </View>
      </View>
      {/*  */}
      <View style={styles.invoice_details_box}>
        <View style={{ gap: 12 }}>
          <Text style={styles.inv_bal}>Item</Text>
          <Text style={styles.inv_addr}>
            {data.items_purchased && data.items_purchased[0].product}
          </Text>
          <Text style={styles.inv_addr}>
            {data.items_purchased && data.items_purchased[1].product}
          </Text>
        </View>
        <View style={{ gap: 12, marginLeft: 4, alignItems: "center" }}>
          <Text style={styles.inv_bal}>Qty</Text>
          <Text style={styles.inv_addr}>1</Text>
          <Text style={styles.inv_addr}>2</Text>
        </View>
        <View style={{ gap: 12, alignItems: "flex-end" }}>
          <Text style={styles.inv_bal}>Amount</Text>
          <Text style={styles.inv_addr}>
            {["$", data.items_purchased && data.items_purchased[0].price]}
          </Text>
          <Text style={styles.inv_addr}>
            {["$", data.items_purchased && data.items_purchased[1].price]}
          </Text>
        </View>
      </View>
      {/*  */}
      <View
        style={[
          styles.invoice_details_box,
          { justifyContent: "flex-end", gap: 72 },
        ]}
      >
        <View style={{ gap: 4 }}>
          <Text style={styles.inv_bal}>Sub-total</Text>
          <Text style={styles.inv_bal}>Discount</Text>
          <Text style={styles.inv_bal}>VAT</Text>
        </View>
        <View style={{ gap: 4, alignItems: "flex-end" }}>
          <Text style={[styles.inv_addr]}>
            {[
              "$",
              data.items_purchased &&
                data.items_purchased[0].price * 1 +
                  data.items_purchased[1].price * 2,
            ]}
          </Text>
          <Text style={[styles.inv_addr]}>0.00</Text>
          <Text style={[styles.inv_addr]}>0.00</Text>
        </View>
      </View>
      {/*  */}
      <View
        style={[
          styles.invoice_details_box,
          { justifyContent: "flex-end", gap: 48, borderBottomWidth: 0 },
        ]}
      >
        <View style={{ gap: 4 }}>
          <Text style={styles.total_amt_col}>Total</Text>
          <Text style={styles.total_amt}>Balance Due</Text>
        </View>
        <View style={{ gap: 4, alignItems: "flex-end" }}>
          <Text style={styles.total_amt_col}>
            {[
              "$",
              data.items_purchased &&
                data.items_purchased[0].price * 1 +
                  data.items_purchased[1].price * 2,
            ]}
          </Text>
          <Text style={styles.total_amt}>{data.invoice_bal}</Text>
        </View>
      </View>
      <Text
        style={[
          styles.text_norm,
          { fontFamily: "Fellix-SemiBold", marginTop: 12 },
        ]}
      >
        Payment Details{" "}
        <Text style={[styles.text_norm, { fontFamily: "Fellix-Regular" }]}>
          00100010056 Kelly Audu; UBA
        </Text>
      </Text>
    </>
  );
};

export default InvoiceDetails;

const styles = StyleSheet.create({
  invoice_details_box: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#D6DADD",
    paddingVertical: 8,
  },
  invoice_heading: {
    fontSize: 18,
    fontFamily: "Fellix-Medium",
  },
  inv: {
    fontSize: 16,
    fontFamily: "Fellix-Medium",
  },
  inv_bal: {
    fontSize: 14,
    fontFamily: "Fellix-Medium",
  },
  inv_addr: {
    fontFamily: "Fellix-Regular",
    fontSize: 14,
  },
  total_amt_col: {
    fontFamily: "Fellix-SemiBold",
    color: "#044E97",
    fontSize: 14,
  },
  total_amt: {
    fontFamily: "Fellix-SemiBold",
    fontSize: 14,
  },
  text_color: {
    color: "#044E97",
    fontSize: 14,
    fontFamily: "Fellix-SemiBold",
  },
  text_norm: {
    fontSize: 14,
  },
});
