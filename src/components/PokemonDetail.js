import React from 'react';
import { View, Text, Image } from 'react-native';
import Pokemon from './Pokemon';
import PokemonSection from './PokemonSection';

const PokemonDetail = (prop) => {
  return (
    <Pokemon>
      <PokemonSection>
        <View style={styles.imageContainerStyle}>
          <Image style={styles.imageContentStyle} source={require('../images/pokeball.png')} />
        </View>
        <View>
          <Text style={styles.textStyle}>{prop.name}</Text>
        </View>
      </PokemonSection>
    </Pokemon>
  );
};

const styles = {
  imageContentStyle: {
    width: 20,
    height: 20
  },
  imageContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  textStyle: {
    fontSize: 20
  }
};
export default PokemonDetail;
