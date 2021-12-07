import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

const Pokemons = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetchPokemons();
    console.log(props.navigation)
  }, []);

  const fetchPokemons = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=500")
      .then((response) => response.json())
      .then((pokemons) => setPokemons(pokemons.results));
      
  };

  return (
    <View>
      <View style={styles.searchCont}>
        <TextInput
          style={styles.searchField}
          placeholder="Search Pokemons"
          onChangeText={(value) => setSearchField(value)}
          value={searchField}
        />
      </View>

      <ScrollView>
        <View style={styles.container}>
          {pokemons
            .filter((pokemon) =>
              pokemon.name.toLowerCase().includes(searchField.toLowerCase())
            )
            .map((pokemon, index) => {
              return (
                <TouchableOpacity
                  style={styles.card}
                  activeOpacity={0.5}
                  key={index}
                  onPress={() =>
                    props.navigation.navigate("Details", {
                      pokemon: pokemon.name,
                    })
                  }
                >
                  <Image
                    style={{width: 150, height: 150}}
                    source={{
                      uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon.name}.png`,
                    }}
                  />
                  <Text>{pokemon.name}</Text>
                </TouchableOpacity>
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Pokemons;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: 30
    },
    card: {
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#000",
        marginHorizontal: 20,
        marginVertical: 10
    },
    searchCont: {
        position: "absolute",
        marginBottom: 70,
        left: "20%",
        zIndex: 1,
        marginTop: 10
    },
    searchField: {
        height: 40,
        borderWidth: 1,
        borderColor: "#000",
        textAlign: "center",
        width: 250,
        borderRadius: 50
    }
})
