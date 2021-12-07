//import liraries
import React from "react";
import { View, Text, StyleSheet } from "react-native";

import colors from "../assets/colors/colors";

// create a component
const Card = ({name}) => {
  return (
    <View style={styles.imageWrapper} key={item.id}>
      <Image
        style={styles.image}
        source={{
          uri: `${item.image}`,
        }}
      />
      <Text style={styles.name}>{item.name}</Text>

      <Row title={"Species"} value={item.species} />

      <Row title={"Gender"} value={item.gender} />

      <Row title={"Status"} value={item.status} />

      <Row title={"Location"} value={item.location.name} />
      {/* chars.location.name */}

      <Row title={"Origin"} value={item.origin.name} />
      {/* chars.origin.name */}

      <View style={styles.wrapper}>
        <Text style={styles.title}>Episodes</Text>
        <View style={styles.numWrapper}>
          <Text style={styles.value}>{item.episode.length}</Text>
          {/* chars.episode.length */}
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
});

//make this component available to the app
export default Card;
