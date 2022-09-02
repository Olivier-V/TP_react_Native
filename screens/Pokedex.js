/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import PokemonDetails from './PokemonDetails';
import PokemonList from './PokemonList';

const Stack = createNativeStackNavigator();

const Pokedex = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Pokedex list" component={PokemonList} />
        <Stack.Screen name="Pokemon details" component={PokemonDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Pokedex;
