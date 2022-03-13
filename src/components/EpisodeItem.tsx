import type { FC } from "react";
import React, { memo } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Divider } from "react-native-paper";

import type { episodesItemType } from "../types/apiTypes";
import type { bottomNavigationProp } from "../types/navigationTypes";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    backgroundColor: "linen",
  },
  item: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    padding: 5,
    paddingVertical: 10,
  },
  itemNumber: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  itemName: {
    flex: 1,
    fontSize: 16,
  },
});

const EpisodesItem: FC<{ item: episodesItemType }> = ({ item }) => {
  const navigation = useNavigation<bottomNavigationProp>();

  return (
    <TouchableOpacity
      style={styles.container}
      testID="EpisodesItem"
      onPress={() => {
        navigation.navigate("Episodes", {
          screen: "Episode",
          params: { id: item.id },
        });
      }}
    >
      <View style={styles.item}>
        <Text style={styles.itemNumber}>{item.id}</Text>
        <Text style={styles.itemName}>{item.name}</Text>
      </View>
      <Divider />
    </TouchableOpacity>
  );
};

export default memo(EpisodesItem);
