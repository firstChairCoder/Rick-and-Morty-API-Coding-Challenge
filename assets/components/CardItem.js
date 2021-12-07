import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import colors from "../colors/colors";
import Heart from "../svg/Heart";

const CardItem = ({id, profile, name, img, title }) => {
  return (
    <View style={{ marginLeft: 20 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <Image
          style={styles.image}
          source={profile}
        />
        <Text key={id} style={styles.imageText}>{name}</Text>
      </View>
      <Image
        style={styles.imageMain}
        source={img}
      />
      <View
        style={{
          backgroundColor: "rgba(256, 256, 256, 0.2)",
          width: 32,
          height: 32,
          borderRadius: 8,
          position: "absolute",
          top: 60,
          left: 110,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Heart />
      </View>
      <Text style={styles.bold}>{title}</Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.sub}>Food   </Text>
        <View
          style={{
            width: 8,
            height: 8,
            borderRadius: 5 / 2,
            backgroundColor: colors.outline,
            // alignSelf: "center",
          }}
        />
        <Text style={styles.sub}>   {">"}60 mins</Text>
      </View>
    </View>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  image: {
    width: 31,
    height: 31,
    borderRadius: 11,
    marginRight: 8,
  },
  imageText: {
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 14.5,
  },
  imageMain: {
    width: 151,
    height: 151,
    borderRadius: 16,
    marginBottom: 16,
  },
  bold: {
    fontSize: 17,
    lineHeight: 27,
    fontWeight: "700",
    marginBottom: 4,
    color: colors.textBold,
  },
  sub: {
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 14.5,
    color: colors.textGray,
    marginBottom: 30,
  },
})