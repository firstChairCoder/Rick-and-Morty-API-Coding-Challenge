import React, { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import type { NativeSyntheticEvent, NativeScrollEvent } from "react-native";
import { Text, Keyboard, StyleSheet, View, ScrollView } from "react-native";
import { TextInput, ActivityIndicator } from "react-native-paper";

import { getEpisodesQuery } from "../api/apiQuery";
import EpisodeItem from "../components/EpisodeItem";
import { episodesColor, episodesTheme } from "../constants/themes";
import type { episodesItemType, getEpisodesQueryType } from "../types/apiTypes";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
    paddingHorizontal: 10,
  },
  notFound: {
    flex: 1,
    fontSize: 16,
    textAlign: "center",
  },
  preloader: {
    flex: 1,
    width: 50,
    height: 50,
    marginVertical: 10,
    resizeMode: "contain",
    alignSelf: "center",
  },
});

const EpisodesList = () => {
  const [filterName, setFilterName] = useState<string>("");
  const [dataList, setDataList] = useState<episodesItemType[]>([]);
  const [getEpisodes, { loading, error, data }] = useLazyQuery<
    getEpisodesQueryType,
    { page?: number | null; name?: string }
  >(getEpisodesQuery);

  useEffect(() => {
    dataList.length && setDataList([]);
    getEpisodes({ variables: { page: 1, name: filterName } });
  }, [filterName]);

  useEffect(() => {
    if (data?.episodes?.results) {
      setDataList([...dataList, ...data.episodes.results]);
    }
  }, [data]);

  const onScrollHandler = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (
      e.nativeEvent.contentOffset.y >
        e.nativeEvent.contentSize.height -
          e.nativeEvent.layoutMeasurement.height -
          50 &&
      !loading &&
      data?.episodes.info.next
    ) {
      getEpisodes({
        variables: { page: data?.episodes.info.next, name: filterName },
      });
    }
  };

  return (
    <>
      <TextInput
        testID="TextInput"
        value={filterName}
        onChangeText={setFilterName}
        label="Search episodes name..."
        selectionColor={episodesColor}
        theme={episodesTheme}
        right={
          filterName && (
            <TextInput.Icon
              name={"close"}
              testID="clearInputText"
              color={episodesColor}
              onPress={() => {
                setFilterName("");
                Keyboard.dismiss();
              }}
            />
          )
        }
      />

      <ScrollView
        style={styles.list}
        testID="ScrollView"
        onScroll={onScrollHandler}
      >
        {dataList.map((item) => (
          <EpisodeItem key={item.id} item={item} />
        ))}

        {loading && (
          <ActivityIndicator
            testID="Loader"
            style={styles.preloader}
            size="large"
            color={episodesColor}
          />
        )}
      </ScrollView>

      {error && <Text style={styles.notFound}>Not Found</Text>}
    </>
  );
};

export const EpisodesScreen = () => {
  return (
    <View style={styles.container}>
      <EpisodesList />
    </View>
  );
};
