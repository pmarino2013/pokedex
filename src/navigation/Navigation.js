import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from "react-native-vector-icons/FontAwesome5";
// import AccountScreen from "../screens/Account";
import AccountNavigation from "./AccountNavigation";
// import PokedexScreen from "../screens/Pokedex";
import PokedexNavigation from "../navigation/PokedexNavigation";
// import FavoriteScreen from "../screens/Favorite";
import FavoriteNavigation from "../navigation/FavoriteNavigation";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Favorite"
        component={FavoriteNavigation}
        options={{
          tabBarLabel: "Favoritos", //Para poner un título en el menú
          //Colocar un icono
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Pokedex"
        component={PokedexNavigation}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderPokeball(),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigation}
        options={{
          tabBarLabel: "Mi cuenta",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const renderPokeball = () => {
  return (
    <Image
      source={require("../../assets/pokeball.png")}
      style={{ width: 70, height: 70, top: -15 }}
    />
  );
};
