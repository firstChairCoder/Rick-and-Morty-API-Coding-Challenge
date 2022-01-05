/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable react-native/no-inline-styles */

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableHighlight,
} from "react-native";
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
  const [page, setPage] = useState(2);

  let API = `https://rickandmortyapi.com/api/character/?page=${page}`;

  useEffect(() => {
    fetchChars();
  }, [API]);

  const fetchChars = () => {
    fetch(API)
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
      <View
        style={{
          width: "100%",
          height: "10%",
          backgroundColor: "azure",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 20,
        }}
      >
        <TouchableHighlight
          style={{
            width: "30%",
            height: 50,
            backgroundColor: "red",
            justifyContent: "center",
            alignItems: "center",
            // paddingHorizontal: 20,
          }}
          onPress={() => {
            if (page === 1) {
              return;
            }
            setPage(page - 1);
          }}
          activeOpacity={0.9}
        >
          <View
            style={{
              // width: "100%",
              // height: 50,
              // backgroundColor: "red",
              paddingHorizontal: 20,
            }}
          >
            <Text>Previous</Text>
          </View>
        </TouchableHighlight>

        <Text style={{ textAlign: "center", fontSize: 24 }}>{page}</Text>

        <TouchableHighlight
          style={{
            width: "30%",
            height: 50,
            backgroundColor: "green",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => setPage(page + 1)}
        >
          <View
            style={{
              paddingHorizontal: 20,
            }}
          >
            <Text>Next</Text>
          </View>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}
