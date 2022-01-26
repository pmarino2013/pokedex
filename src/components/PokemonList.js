import React from "react";

import PokemonCard from "./PokemonCard";

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Platform,
} from "react-native";

//ActivityIndicator para generar un spinner cuando se esta cargando
//Platform me permite segun el sistema operativo en el que se esté ejecutando tomar desiciones de estilos

export default function PokemonList(props) {
  // console.log(props);
  // console.log(Platform.OS);

  const { pokemons, loading, loadPokemons, isNext } = props;
  const loadMore = () => {
    // console.log("Cargando más pokemons...");
    loadPokemons();
  };

  if (loading) {
    return (
      // <View style={styles.loaderContainer}>
      //   <Text style={styles.loader}>Cargando...</Text>
      // </View>
      <ActivityIndicator size="large" style={styles.spinner} color="#EAEA" />
    );
  } else {
    return (
      <FlatList
        data={pokemons}
        numColumns={2}
        shows_VerticalScrollIndicator={false}
        keyExtraxtor={(pokemon) => String(pokemon.id)}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        contentContainerStyle={styles.flatListContentContainer}
        onEndReached={isNext && loadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          isNext && (
            <ActivityIndicator
              size="large"
              style={styles.spinner}
              color="#EAEA"
            />
          )
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  loaderContainer: {
    minHeight: 300,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    fontSize: 20,
    fontWeight: "bold",
  },
  flatListContentContainer: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === "android" ? 30 : 0,
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === "android" ? 90 : 60,
  },
});
