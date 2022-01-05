/* eslint-disable react-native/no-inline-styles */

import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Card from "./src/components/Card/ItemCard";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 10,
    // alignItems: "center",
    backgroundColor: "#333",
  },
});

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchChars();
  }, []);

  const fetchChars = () => {
    fetch("https://rickandmortyapi.com/api/character/?page=2")
      .then((response) => response.json())
      // .then((res) => setData([...data, ...res.results]))
      .then((res) => {
        setData(res.results);
        // console.log(data);
      });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#333",
      }}
    >
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Card
              display={item.image}
              name={item.name}
              species={item.species}
              gender={item.gender}
              status={item.status}
            />
          )}
          showsVerticalScrollIndicator={false}
          windowSize={3}
          maxToRenderPerBatch={5}
        />
      </View>
    </SafeAreaView>
  );
}
