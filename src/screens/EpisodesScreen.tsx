import React, { useContext, useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import type { NativeScrollEvent, NativeSyntheticEvent } from "react-native";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import {
  ActivityIndicator,
  Searchbar,
  Switch,
  TouchableRipple,
  useTheme,
} from "react-native-paper";

import { getEpisodesQuery } from "../api/apiQuery";
import EpisodeItem from "../components/EpisodeItem";
import { episodesColor, episodesTheme } from "../constants/themes";
import type { episodesItemType, getEpisodesQueryType } from "../types/apiTypes";
import { PreferencesContext } from "../../App";

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
  searchbar: {
    borderRadius: 20,
    elevation: 1,
    width: "90%",
    alignSelf: "center",
  },
});

const EpisodesList = () => {
  const [filterName, setFilterName] = useState<string>("");
  const [dataList, setDataList] = useState<episodesItemType[]>([]);

  const theme = useTheme();
  const { toggleTheme, isThemeDark } = useContext(PreferencesContext);
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
      <TouchableRipple onPress={() => toggleTheme()}>
        <Switch
          style={{ backgroundColor: theme.colors.accent }}
          color={episodesColor}
          value={isThemeDark}
        />
      </TouchableRipple>

      <Searchbar
        testID="TextInput"
        style={styles.searchbar}
        value={filterName}
        onChangeText={setFilterName}
        placeholder={"Search episodes..."}
        selectionColor={episodesColor}
        theme={episodesTheme}
        clearIcon={"close-box"}
      />

      <ScrollView
        style={styles.list}
        testID="ScrollView"
        onScroll={onScrollHandler}
      >
        {dataList.map((item, index) => (
          <EpisodeItem key={index} item={item} />
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
