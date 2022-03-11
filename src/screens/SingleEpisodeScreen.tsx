import { useQuery } from "@apollo/client";
import type { RouteProp } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ActivityIndicator } from "react-native-paper";

import { getSingleEpisodeQuery } from "../api/apiQuery";
import CharItem from "../components/CharItem";
import { episodesColor } from "../constants/themes";
import type { getSingleEpisodeType } from "../types/apiTypes";
import type { episodesNativeStackNavigatorParams } from "../types/navigationTypes";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  preloader: {
    flex: 1,
    width: "90%",
    height: 400,
  },
  text: {
    fontSize: 16,
  },
  title: {
    flex: 1,
    textAlign: "center",
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  screenContainer: {
    flex: 1,
    paddingHorizontal: 10,
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
});

const EpisodeContainer: React.FC<getSingleEpisodeType> = ({ episode }) => {
  return (
    <ScrollView style={styles.screenContainer}>
      <Text style={styles.title}>{episode.name}</Text>

      <View style={styles.field}>
        <Text style={styles.fieldName}>AIR DATE</Text>
        <Text style={styles.fieldVal}>{episode.airDate}</Text>
      </View>

      <View style={styles.field}>
        <Text style={styles.fieldName}>CHARACTERS</Text>

        {episode.characters.map((item) => (
          <CharItem key={item.id} item={item} />
        ))}
      </View>
    </ScrollView>
  );
};

export const SingleEpisodeScreen = () => {
  const route =
    useRoute<RouteProp<episodesNativeStackNavigatorParams, "Episode">>();
  const { loading, data } = useQuery<getSingleEpisodeType, { id: string }>(
    getSingleEpisodeQuery,
    { variables: { id: route.params.id } }
  );

  console.log(data?.episode);

  if (loading) {
    return (
      <ActivityIndicator
        testID="Loader"
        size="large"
        color={episodesColor}
        style={styles.preloader}
      />
    );
  }
  if (data) {
    return <EpisodeContainer episode={data?.episode} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Error</Text>
    </View>
  );
};
