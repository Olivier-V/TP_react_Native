/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../Colors';

const PokemonDetails = ({ navigation, route }) => {
  let imgFront = route.params.pokemon.sprites.front_default;
  console.log(imgFront);
  return (
    <View>
      <Text style={styles.categorie} >Numéro</Text>
      <Text style={styles.valeur}>{route.params.pokemon.id}</Text>
      <Text style={styles.categorie} >Nom</Text>
      <Text style={styles.valeur}>{route.params.pokemon.name}</Text>
      <Text style={styles.categorie} >Capacité</Text>
      <Text style={styles.valeur}>{route.params.pokemon.abilities[0].ability.name}</Text>
      <Text style={styles.categorie} >Mouvement</Text>
      <Text style={styles.valeur}>{route.params.pokemon.moves[0].move.name}</Text>
      <Text style={styles.categorie} >Points de vie</Text>
      <Text style={styles.valeur}>{route.params.pokemon.stats[0].base_stat}</Text>
      <Text style={styles.categorie} >Type</Text>
      <Text style={styles.valeur}>{route.params.pokemon.types[0].type.name}</Text>
      <Text style={styles.categorie} >Poids</Text>
      <Text style={styles.valeur}>{route.params.pokemon.weight}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  categorie: {
    backgroundColor: Colors.red,
    color: '#EEE',
    fontSize: 25,
    textAlign: 'right',
    paddingRight: 10,
  },
  valeur: {
    color: Colors.red,
    textAlign: 'right',
    paddingRight: 10,
    fontSize: 25,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default PokemonDetails;
