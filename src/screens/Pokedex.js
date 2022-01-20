import { Text } from "react-native";
import { getPokemonsApi } from "../api/pokemon";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useEffect } from "react";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState();

  useEffect(() => {
    getPokemonsApi().then((respuesta) => {
      console.log(respuesta);
    });
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     await loadPokemons();
  //   })();
  // }, []);

  // const loadPokemons = async () => {
  //   try {
  //     const response = await getPokemonsApi();
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <SafeAreaView>
      <Text>Pokedex</Text>
    </SafeAreaView>
  );
}
