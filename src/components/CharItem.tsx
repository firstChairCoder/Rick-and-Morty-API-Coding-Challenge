/* eslint-disable react-native/no-unused-styles */
import React, { memo } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import type { charactersItemType } from "../types/apiTypes";
import type { bottomNavigationProp } from "../types/navigationTypes";

const SPACING = 20;
const AVI_SIZE = 70;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: SPACING,
    marginBottom: SPACING,
    borderRadius: SPACING / 2,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 3,
  },
  item: {
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  itemImage: {
    height: AVI_SIZE,
    width: AVI_SIZE,
    borderRadius: AVI_SIZE / 2,
    marginRight: SPACING / 2,
  },
  itemName: {
    fontSize: 22,
    fontWeight: "500",
  },
  itemSpecies: {
    fontSize: 16,
    color: "darkgray",
  },
});

const CharItem: React.FC<{ item: charactersItemType }> = ({ item }) => {
  const navigation = useNavigation<bottomNavigationProp>();

  return (
    // <TouchableOpacity
    //   key={item.id}
    //   style={styles.container}
    //   testID="CharactersItem"
    //   onPress={async () => {
    //     navigation.navigate("Characters", {
    //       screen: "Character",
    //       params: { id: item.id, name: item.name },
    //     });
    //   }}
    // >
    //   <View style={styles.item}>
    //     <Image style={styles.itemImage} source={{ uri: item.image }} />
    //     <Text style={styles.itemName}>{item.name}</Text>
    //   </View>
    //   <Divider />
    // </TouchableOpacity>
    <Pressable
      key={item.id}
      style={styles.container}
      testID="CharactersItem"
      onPress={async () => {
        navigation.navigate("Characters", {
          screen: "Character",
          params: { id: item.id, name: item.name, species: item.species },
        });
      }}
    >
      <Image style={styles.itemImage} source={{ uri: item.image }} />
      <View>
        <Text style={styles.itemName}>{item.name}</Text>

        <View style={{ flexDirection: "row" }}>
          <Text style={styles.itemSpecies}>{item?.species}</Text>
          <Text style={styles.itemSpecies}> . {item?.status}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default memo(CharItem);
