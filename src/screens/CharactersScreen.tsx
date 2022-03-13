import React, { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import type { NativeScrollEvent, NativeSyntheticEvent } from "react-native";
import { Text, Keyboard, ScrollView, StyleSheet, View } from "react-native";
import { ActivityIndicator, TextInput } from "react-native-paper";

import { getCharactersQuery } from "../api/apiQuery";
import { charactersColor, charactersTheme } from "../constants/themes";
import type {
  charactersItemType,
  getCharactersQueryType,
} from "../types/apiTypes";
import CharItem from "../components/CharItem";

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

const CharList = () => {
  const [filterName, setFilterName] = useState<string>("");
  const [dataList, setDataList] = useState<charactersItemType[]>([]);
  const [getCharacters, { loading, error, data }] = useLazyQuery<
    getCharactersQueryType,
    { page?: number | null; name?: string }
  >(getCharactersQuery);

  useEffect(() => {
    setDataList([]);
    getCharacters({ variables: { page: 1, name: filterName } });
  }, [filterName]);

  useEffect(() => {
    if (data?.characters?.results) {
      setDataList([...dataList, ...data.characters.results]);
    }
  }, [data]);

  const onScrollHandler = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (
      e.nativeEvent.contentOffset.y >
        e.nativeEvent.contentSize.height -
          e.nativeEvent.layoutMeasurement.height -
          50 &&
      !loading &&
      data?.characters.info.next
    ) {
      getCharacters({
        variables: { page: data?.characters.info.next, name: filterName },
      });
    }
  };

  return (
    <>
      <TextInput
        testID="TextInput"
        value={filterName}
        onChangeText={setFilterName}
        label="Search characters name..."
        selectionColor={charactersColor}
        right={
          filterName && (
            <TextInput.Icon
              name={"close"}
              testID="clearInputText"
              color={charactersColor}
              onPress={() => {
                setFilterName("");
                Keyboard.dismiss();
              }}
            />
          )
        }
        theme={charactersTheme}
      />
      <ScrollView
        testID="ScrollView"
        style={styles.list}
        onScroll={onScrollHandler}
      >
        {dataList.map((item, index) => (
          <CharItem key={index} item={item} />
        ))}

        {loading && (
          <ActivityIndicator
            testID="Loader"
            style={styles.preloader}
            size="large"
            color={charactersColor}
          />
        )}
      </ScrollView>
      {error && <Text style={styles.notFound}>Not Found</Text>}
    </>
  );
};

export const CharactersScreen = () => {
  return (
    <View style={styles.container}>
      <CharList />
    </View>
  );
};
