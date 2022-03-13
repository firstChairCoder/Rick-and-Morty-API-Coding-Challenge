import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { IconButton } from "react-native-paper";

import { CharactersScreen } from "../screens/CharactersScreen";
import { SingleCharacterScreen } from "../screens/SingleCharacterScreen";
import type { charactersNativeStackNavigatorParams } from "../types/navigationTypes";

const styles = StyleSheet.create({
  // charactersHeader: {
  //   backgroundColor: charactersColor,
  // },
  // headerTitle: {
  //   color: "black",
  //   fontSize: 20,
  //   fontWeight: "bold",
  //   textAlignVertical: "center",
  // },
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
    // Workaround around screen not rendering ---
    //github.com/software-mansion/react-native-screens/issues/1197/#issuecomment-993682256
    <View style={{ flex: 1 }} collapsable={false}>
      <CharStack.Navigator>
        <CharStack.Screen
          name={"AllCharacters"}
          component={CharactersScreen}
          options={{
            title: "All Characters",
          }}
        />
        <CharStack.Screen
          name={"Character"}
          component={SingleCharacterScreen}
          // options={({ route, navigation }) => ({
          //   headerTitle: () => (
          //     <Text style={styles.headerTitle}>{route.params.name}</Text>
          //   ),
          // headerLeft: () => (
          //   <IconButton
          //     testID="goToInitScreen"
          //     icon="chevron-left"
          //     size={32}
          //     color="white"
          //     onPress={() => {
          //       navigation.navigate("AllCharacters");
          //     }}
          //   />
          // ),
          // })}
        />
      </CharStack.Navigator>
    </View>
  );
};

export default CharactersStack;
