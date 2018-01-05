import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, FlatList } from 'react-native';
import axios from 'axios';
import PokemonDetail from './PokemonDetail';
import { CapitalizeFirstLetter } from './Utils';

class PokemonList extends Component {
  state = { pokemons: [], loadMoreUrl: '' }

  componentWillMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151')
      .then(response => this.setState({ pokemons: response.data.results, loadMoreUrl: response.data.next }));
  }

  render() {
    return (
      <ScrollView>
        <FlatList
          data={this.state.pokemons}
          initialNumToRender={20}
          renderItem={({ item }) => <TouchableOpacity onPress={() => this.props.navigation.navigate('PokemonInfo', { url: item.url })} key={item.name}><PokemonDetail name={CapitalizeFirstLetter(item.name)} /></TouchableOpacity>}
        />
      </ScrollView>
    );
  }
}

export default PokemonList;
