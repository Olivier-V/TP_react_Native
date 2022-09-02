/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, ImageBackground, Linking} from 'react-native';
import Colors from '../Colors';
import React, {} from 'react';

import CustomButton from '../components/CustomButton';

const Accueil = () => {

    const onPress = async () => {
      const url = 'https://www.pokemon.com/fr/';
      await Linking.canOpenURL(url);
      Linking.openURL(url);
    };
  return (
    <ImageBackground style={styles.accueil} source={require('../assets/home.jpg')} >
    <View>
      <Text style={styles.title}>Bienvenue sur le Pokedex Genération 1</Text>
      <CustomButton
            style={styles.button}
            onPress={onPress}>
            Aller vers POKEMON.COM
          </CustomButton>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  accueil: {
    flex: 1,
  },
  title: {
    fontSize: 35,
    color: Colors.white,
    paddingTop: 80,
    marginBottom: 10,
  },
  button:{
    marginBottom: 10,
    marginLeft: 50,
  },
});

export default Accueil;
