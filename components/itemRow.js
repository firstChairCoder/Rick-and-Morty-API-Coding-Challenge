//import liraries
import React from "react";
import { View, Text, StyleSheet } from "react-native";

import colors from "../assets/colors/colors";

// create a component
const Row = ({ title, value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <Text textBreakStrategy={"simple"} style={styles.value}>{value}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: 200,
    borderWidth: 1,
    borderColor: colors.black,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    color: colors.white,
    fontSize: 14,
    flex: 0.4,
  },
  value: {
    color: colors.yellow,
    fontSize: 14,
    flex: 0.6,
    textAlign: "right"
  },
});

//make this component available to the app
export default Row;
