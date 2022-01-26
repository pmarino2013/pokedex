import React, { useState, useEffect } from "react";

import { getPokemonsApi, getPokemonDetailApi } from "../api/pokemon";
import { SafeAreaView } from "react-native-safe-area-context";
import PokemonList from "../components/PokemonList";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  const [nextUrl, setNextUrl] = useState(null);
  console.log("Pokemons-->", pokemons);

  // useEffect(() => {
  //   getPokemonsApi().then((respuesta) => {
  //     for (const pokemon of respuesta.results) {
  //       getPokemonDetailApi(pokemon.url).then((resolve) => {
  //         setPokemons(resolve);
  //         console.log(resolve);
  //       });
  //     }
  //   });
  // }, []);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi(nextUrl);
      setNextUrl(response.next);

      const pokemonArray = [];
      for await (const pokemon of response.results) {
        const pokemonDwetails = await getPokemonDetailApi(pokemon.url);

        pokemonArray.push({
          id: pokemonDwetails.id,
          name: pokemonDwetails.name,
          type: pokemonDwetails.types[0].type.name,
          order: pokemonDwetails.order,
          imagen:
            pokemonDwetails.sprites.other["official-artwork"].front_default,
        });
      }
      setPokemons([...pokemons, ...pokemonArray]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView>
      <PokemonList
        pokemons={pokemons}
        loading={loading}
        loadPokemons={loadPokemons}
        isNext={nextUrl}
      />
    </SafeAreaView>
  );
}
