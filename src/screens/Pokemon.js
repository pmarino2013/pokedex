import React, { useState, useEffect } from "react";
import Header from "../components/pokemon/Header";
import Type from "../components/pokemon/Type";
import Stats from "../components/pokemon/Stats";
import { ScrollView } from "react-native";
import { getPokemonDetailsApiById } from "../api/pokemon";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Pokemon(props) {
  const {
    navigation,
    route: { params },
  } = props; //desestructuro lo que llega de navigation

  // console.log(params.id);
  const [pokemon, setPokemon] = useState(null); //estado donde guardo la info del pokemon

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => null,
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="#fff"
          size={20}
          style={{ marginLeft: 20, marginBottom: 20 }}
          onPress={navigation.goBack}
        />
      ),
    });
  }, [navigation, params]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApiById(params.id); //llamo a la funcion que hace la petición
        // console.log(response);
        setPokemon(response); //la guardo en el estado
      } catch (error) {
        navigation.goBack(); //Si hay un error vuelve a la página anterior
      }
    })();
  }, [params]); //El useEffect se ejecuta cada vez que cambia el params que trae el id

  if (!pokemon) return null; //Si el estado es null no hace nada
  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        imagen={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
      <Type types={pokemon.types} />
      <Stats stats={pokemon.stats} />
    </ScrollView>
  );
}
