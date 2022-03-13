import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import RootTab from "./src/navigation";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://rickandmortyapi.com/graphql",
});

export default function App() {
  return (
    // {/* <Text>We don't talk about Bruno.</Text> */}
    <ApolloProvider client={client}>
      <NavigationContainer>
        <RootTab />
      </NavigationContainer>
    </ApolloProvider>
  );
}
