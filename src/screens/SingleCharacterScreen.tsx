import { useQuery } from "@apollo/client";
import type { RouteProp } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

import { getSingleCharacterQuery } from "../api/apiQuery";
import EpisodeItem from "../components/EpisodeItem";
import { charactersColor } from "../constants/themes";
import type { getSingleCharacterType } from "../types/apiTypes";
import type { charactersNativeStackNavigatorParams } from "../types/navigationTypes";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
  preloader: {
    flex: 1,
    width: "90%",
    height: 400,
  },
  screenContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  image: {
    marginTop: 20,
    height: 250,
    width: 250,
    borderRadius: 250,
    alignSelf: "center",
  },
  title: {
    flex: 1,
    textAlign: "center",
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  field: {
    flex: 1,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  fieldName: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  fieldVal: {
    fontSize: 16,
  },
  //   characterContainer: {
  //     width: "100%",
  //   },
  //   character: {
  //     paddingVertical: 10,
  //     flexDirection: "row",
  //     alignItems: "center",
  //   },
  //   characterImage: {
  //     height: 30,
  //     width: 30,
  //     borderRadius: 100,
  //     marginRight: 10,
  //   },
  //   characterName: {
  //     flex: 1,
  //     fontSize: 16,
  //   },
});

const SingleCharacterView: React.FC<getSingleCharacterType> = ({
  character,
}) => (
  <ScrollView style={styles.screenContainer}>
    <Image style={styles.image} source={{ uri: character.image }} />

    <Text style={styles.title}>{character.name}</Text>

    <View style={styles.field}>
      <Text style={styles.fieldName}>STATUS</Text>
      <Text style={styles.fieldVal}>{character.status}</Text>
    </View>

    <View style={styles.field}>
      <Text style={styles.fieldName}>SPECIES</Text>
      <Text style={styles.fieldVal}>{character.species}</Text>
    </View>

    <View style={styles.field}>
      <Text style={styles.fieldName}>GENDER</Text>
      <Text style={styles.fieldVal}>{character.gender}</Text>
    </View>

    <View style={styles.field}>
      <Text style={styles.fieldName}>EPISODES</Text>

      {character.episode.map((item) => (
        <EpisodeItem key={item.id} item={item} />
      ))}
    </View>
  </ScrollView>
);

export const SingleCharacterScreen = () => {
  const route =
    useRoute<RouteProp<charactersNativeStackNavigatorParams, "Character">>();
  const { loading, data } = useQuery<getSingleCharacterType, { id: string }>(
    getSingleCharacterQuery,
    { variables: { id: route.params.id } }
  );

  if (loading) {
    return (
      <ActivityIndicator
        testID="Loader"
        size="large"
        color={charactersColor}
        style={styles.preloader}
      />
    );
  }
  if (data) {
    return <SingleCharacterView character={data?.character} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Error</Text>
    </View>
  );
};
