import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import PokemonList from './components/PokemonList';
import PokemonInfo from './components/PokemonInfo';

const RootNavigator = StackNavigator({
  Home: {
    screen: PokemonList,
    navigationOptions: {
      headerTitle: 'Pokemons',
    }
  },
  PokemonInfo: {
    screen: PokemonInfo,
    navigationOptions: {
      headerTitle: 'Pokemon Info',
    }
  }
});

export default RootNavigator;
