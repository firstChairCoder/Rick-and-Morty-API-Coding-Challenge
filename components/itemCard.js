//import liraries
import React from "react";
import { View, Text, StyleSheet, Image} from "react-native";

import colors from "../assets/colors/colors";
import Row from "./itemRow";

// create a component
const Card = ({
  display,
  name,
  species,
  gender,
  status,
  location,
  origin,
  episodes,
}) => {
  return (
    <View style={styles.imageWrapper}>
      <Image
        style={styles.image}
        source={{
          uri: `${ display }`,
        }}
      />
      <Text style={styles.name}>{name}</Text>
      <Row title={"Species"} value={species} />

      <Row title={"Gender"} value={gender} />

      <Row title={"Status"} value={status} />

      <Row title={"Location"} value={location} />
      {/* chars.location.name */}

      <Row title={"Origin"} value={origin} />
      {/* chars.origin.name */}

      <View style={styles.wrapper}>
        <Text style={styles.title}>Episodes</Text>
        <View style={styles.numWrapper}>
          <Text style={styles.value}>{episodes}</Text>
          {/* chars.episode.length */}
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

//make this component available to the app
export default Card;
