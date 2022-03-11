import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { IconButton } from "react-native-paper";

import { CharactersScreen } from "../screens/CharactersScreen";
import { SingleCharacterScreen } from "../screens/SingleCharacterScreen";
import type { charactersNativeStackNavigatorParams } from "../types/navigationTypes";

const styles = StyleSheet.create({
  // charactersHeader: {
  //   backgroundColor: charactersColor,
  // },
  headerTitle: {
    flex: 1,
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlignVertical: "center",
  },
  // backButton: {
  //   height: 50,
  //   width: 50,
  //   tintColor: "white",
  //   alignSelf: "center",
  // },
});

const CharStack =
  createNativeStackNavigator<charactersNativeStackNavigatorParams>();

const CharactersStack = () => {
  return (
    <CharStack.Navigator>
      <CharStack.Screen
        name={"AllCharacters"}
        component={CharactersScreen}
        options={{
          title: "Characters",
          headerLeft: () => null,
        }}
      />
      <CharStack.Screen
        name={"Character"}
        component={SingleCharacterScreen}
        options={({ route, navigation }) => ({
          headerTitle: () => (
            <Text style={styles.headerTitle}>{route.params.name}</Text>
          ),
          headerLeft: () => (
            <IconButton
              testID="goToInitScreen"
              icon="chevron-left"
              size={32}
              color="white"
              onPress={() => {
                navigation.navigate("AllCharacters");
              }}
            />
          ),
        })}
      />
    </CharStack.Navigator>
  );
};

export default CharactersStack;
