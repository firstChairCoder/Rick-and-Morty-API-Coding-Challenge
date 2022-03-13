import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

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
    alignSelf: "center",
  },
});

const EpiStack =
  createNativeStackNavigator<episodesNativeStackNavigatorParams>();

const EpisodesStack = () => {
  return (
    <View style={{ flex: 1 }} collapsable={false}>
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
          options={({ route }) => ({
            headerTitle: () => (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text style={styles.headerTitle}>
                  Episode {route.params.id}
                </Text>
              </View>
            ),
          })}
        />
      </EpiStack.Navigator>
    </View>
  );
};

export default EpisodesStack;
