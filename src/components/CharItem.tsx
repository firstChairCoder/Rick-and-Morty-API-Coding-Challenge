import { useNavigation } from "@react-navigation/native";
import React, { memo } from "react";
import { Text, TouchableOpacity, View, Image, StyleSheet } from "react-native";
import { Divider } from "react-native-paper";

import type { charactersItemType } from "../types/apiTypes";
import type { bottomNavigationProp } from "../types/navigationTypes";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  item: {
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  itemImage: {
    height: 30,
    width: 30,
    borderRadius: 100,
    marginRight: 10,
  },
  itemName: {
    flex: 1,
    fontSize: 16,
  },
});

const CharItem: React.FC<{ item: charactersItemType }> = ({ item }) => {
  const navigation = useNavigation<bottomNavigationProp>();

  return (
    <TouchableOpacity
      key={item.id}
      style={styles.container}
      testID="CharactersItem"
      onPress={async () => {
        navigation.navigate("Characters", {
          screen: "Character",
          params: { id: item.id, name: item.name },
        });
      }}
    >
      <View style={styles.item}>
        <Image style={styles.itemImage} source={{ uri: item.image }} />
        <Text style={styles.itemName}>{item.name}</Text>
      </View>
      <Divider />
    </TouchableOpacity>
  );
};

export default memo(CharItem);
