import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Pokemons from "./components/pokemons";
import Details from "./components/details";

const Stack = createNativeStackNavigator();

// create a component
export default function App({ navigation }) {
  console.log(navigation);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"Home"} component={Pokemons} />
        <Stack.Screen name={"Details"} component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
});
