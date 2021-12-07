import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

import colors from "../colors/colors";
import SearchIcon from "../svg/SearchIcon";

const Search = () => {
  return (
    <View style={styles.searchWrapper}>
      <SearchIcon />
      <TextInput placeholder="Search" style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchWrapper: {
    flexDirection: 'row',
    alignItems: "center",
    paddingLeft: 30,
    width: "100%",
    height: 56,
    backgroundColor: colors.form,
    borderRadius: 32,
  },
  input: {
      marginLeft: 8
  }
});

export default Search;
