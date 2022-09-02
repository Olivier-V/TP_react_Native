/* eslint-disable prettier/prettier */
import {ScrollView, TouchableOpacity, Text} from 'react-native';
import React, {useState} from 'react';
import CardPokemon from '../components/CardPokemon';
import {useEffect} from 'react';

const ProductList = ({navigation}) => {
  const [listePokemon, setListePokemon] = useState([]);

  useEffect(() => {
    const newlist = [];
 console.log('-1');
      for (let i = 0; i <= 151; i++) {
        console.log(i);
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
          .then(json => json.json())
          .then(resultat => {
            newlist.push(resultat);
            console.log(newlist.length);
            if (newlist.length >= 151){
              newlist.sort( (a,b) =>{
                return -(b.id - a.id);
              });
              setListePokemon([...newlist]);
              console.log('1');
            }
          });
      }

    }, []);
console.log('2');
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Text>Voici le Pokedex complet de la première génération.</Text>
      {listePokemon.map(pokemon => (
        <TouchableOpacity
          key={pokemon.id}
          onPress={() => navigation.navigate('Pokemon details', {pokemon})}>
          <CardPokemon
            name={pokemon.name}
            type={pokemon.types[0].type.name}
            base_experience={pokemon.base_experience}
            sprite={pokemon.sprites.front_default}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};
export default ProductList;
