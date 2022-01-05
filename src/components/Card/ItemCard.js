/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import useWindowDimensions from "react-native/Libraries/Utilities/useWindowDimensions";

import colors from "../../../assets/colors/colors";
// import Row from "./itemRow";

const Card = ({
  display,
  name,
  species,
  gender,
  status,
  // location,
  // origin,
  // episodes,
}) => {
  const height = useWindowDimensions().height;
  const badgeStyles = [styles.statusWrapper];

  if (status === "Alive") {
    badgeStyles.push(styles.alive);
  } else if (status === "Dead") {
    badgeStyles.push(styles.dead);
  } else {
    badgeStyles.push(styles.unknown);
  }

  // console.log(height);
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View
        style={{
          width: "80%",
          height: height * 0.7,
          backgroundColor: "lime",
          borderColor: "cyan",
          borderWidth: 3.5,
          borderTopLeftRadius: 75,
          borderBottomRightRadius: 75,
          overflow: "hidden",
          marginBottom: "20%",
        }}
      >
        <Image
          style={{ width: "100%", height: "60%", resizeMode: "cover" }}
          source={{
            uri: `${display}`,
          }}
        />
        <View style={badgeStyles}>
          <Text style={{ fontWeight: "bold", fontSize: 22, color: "#FFF" }}>
            {status}
          </Text>
        </View>

        <View
          style={{
            justifyContent: "space-between",
            marginVertical: 10,
            paddingHorizontal: 10,
            overflow: "hidden",
            backgroundColor: "khaki",
            flex: 1,
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: "bold", flex: 1 }}>
            NAME:{" "}
            <Text style={{ fontSize: 18, fontWeight: "normal" }}>{name}</Text>
          </Text>
          <Text style={{ fontSize: 24, fontWeight: "bold", flex: 1 }}>
            SPECIES:{" "}
            <Text style={{ fontSize: 18, fontWeight: "normal" }}>
              {species}
            </Text>{" "}
          </Text>
          <Text style={{ fontSize: 24, fontWeight: "bold", flex: 1 }}>
            GENDER:{" "}
            <Text style={{ fontSize: 18, fontWeight: "normal" }}>{gender}</Text>{" "}
          </Text>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  imageWrapper: {
    width: 250,
    borderColor: colors.black,
    borderWidth: 1,
    alignItems: "center",
    paddingBottom: 15,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "cover",
  },
  name: {
    fontSize: 18,
    color: colors.white,
    margin: 10,
    marginHorizontal: 25,
    alignSelf: "flex-start",
  },
  numWrapper: {
    width: 40,
    height: 28,
    backgroundColor: "#0062CC",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    width: 200,
    height: 50,
    borderWidth: 1,
    borderColor: colors.black,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statusWrapper: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "crimson",
    position: "absolute",
    top: 0,
    right: 0,
    // width: "35%",
    height: "12%",
    margin: 5,
    padding: 5,
    borderRadius: 10,
  },
  alive: {
    backgroundColor: "gold",
  },
  dead: {
    backgroundColor: "indigo",
  },
  unknown: {
    backgroundColor: "navy",
  },
  title: {
    color: colors.white,
    fontSize: 16,
  },
  value: {
    color: colors.white,
    fontSize: 16,
  },
  loading: {
    marginVertical: 20,
  },
});

export default Card;
