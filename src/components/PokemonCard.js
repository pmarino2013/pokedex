import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import getColorByPokemonType from "../utils/geTColorByPokemonType";
import { capitalize } from "lodash";

import { useNavigation } from "@react-navigation/native"; //Para poder enviar parametros a otra página

export default function PokemonCard(props) {
  const navigation = useNavigation(); //usamos el hook
  const { pokemon } = props;

  // console.log(pokemon.type);
  const pokemonColor = getColorByPokemonType(pokemon.type);
  // console.log(pokemonColor);
  const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles };

  const goToPokemon = () => {
    console.log(pokemon.id);
    navigation.navigate("Pokemon", { id: pokemon.id }); //enviamos a la página Pokemon el id como parámetro
  };
  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      {/* <Text>Hola mundo</Text> */}
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.number}>
              #{`${pokemon.order}`.padStart(3, 0)}
            </Text>
            <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
            <Image source={{ uri: pokemon.imagen }} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#fff",
    fontSize: 11,
  },
  name: {
    color: "#ffff",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
    paddingLeft: 5,
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
});
