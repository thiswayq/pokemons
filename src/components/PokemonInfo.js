import React, { Component } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import axios from 'axios';
import PokemonSection from './PokemonSection';
import Pokemon from './Pokemon';
import { TypeColor, CapitalizeFirstLetter } from './Utils';

class PokemonInfo extends Component {

  state = { pokemonInfo: { name: '', sprites: { front_default: '' }, types: [] } }

  componentWillMount() {
    axios.get(this.props.navigation.state.params.url)
      .then(response => this.setState({ pokemonInfo: response.data }));
  }

  pokemonTypeText(type) {
    return {
      fontSize: 25,
      marginLeft: 2,
      marginRight: 2,
      borderWidth: 1,
      borderRadius: 2,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 1,
      backgroundColor: TypeColor(type)
    };
  }

  render() {
    return (
      <Pokemon>
        <PokemonSection>
          <View style={styles.pokemonNameView}>
            <Text style={styles.PokemonNameText}>{CapitalizeFirstLetter(this.state.pokemonInfo.name)}</Text>
          </View>
        </PokemonSection>
        <PokemonSection>
          <Image style={styles.imageStyle} source={{ uri: this.state.pokemonInfo.sprites.front_default.toString() }} />
        </PokemonSection>
        <PokemonSection>
            <FlatList
              contentContainerStyle={styles.pokemonTypeView}
              data={this.state.pokemonInfo.types}
              renderItem={({ item }) => <Text style={this.pokemonTypeText(item.type.name)}>{CapitalizeFirstLetter(item.type.name)}</Text>}
            />
        </PokemonSection>
      </Pokemon>
    );
  }
}

const styles = {
  imageStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 300,
    marginLeft: 10,
    marginRight: 10
  },
  pokemonNameView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  PokemonNameText: {
    fontSize: 30
  },
  pokemonTypeView: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  }
};

export default PokemonInfo;
