import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";

import { episodesColor } from "../constants/themes";
import { EpisodesScreen } from "../screens/EpisodesScreen";
import { SingleEpisodeScreen } from "../screens/SingleEpisodeScreen";
import type { episodesNativeStackNavigatorParams } from "../types/navigationTypes";

const styles = StyleSheet.create({
  episodesHeader: {
    backgroundColor: episodesColor,
  },
  headerTitle: {
    flex: 1,
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlignVertical: "center",
  },
  //   backButton: {
  //     height: 50,
  //     width: 50,
  //     tintColor: "white",
  //     alignSelf: "center",
  //   },
});

const EpiStack =
  createNativeStackNavigator<episodesNativeStackNavigatorParams>();

const EpisodesStack = () => {
  return (
    <EpiStack.Navigator
      screenOptions={{
        headerTintColor: "#FFF",
        headerStyle: styles.episodesHeader,
        headerTitleStyle: styles.headerTitle,
        headerTitleAlign: "center",
      }}
    >
      <EpiStack.Screen
        name={"AllEpisodes"}
        component={EpisodesScreen}
        options={{
          title: "Episodes",
          headerLeft: () => null,
        }}
      />
      <EpiStack.Screen
        name={"Episode"}
        component={SingleEpisodeScreen}
        options={({ route, navigation }) => ({
          headerTitle: () => (
            <Text style={styles.headerTitle}>Episode {route.params.id}</Text>
          ),
          headerLeft: () => (
            <IconButton
              testID="goToInitScreen"
              icon="chevron-left"
              size={32}
              color="#FFF"
              onPress={() => {
                navigation.navigate("Main");
              }}
            />
          ),
        })}
      />
    </EpiStack.Navigator>
  );
};

export default EpisodesStack;
