/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import Colors from '../Colors';

const CardProduct = ({
  name,
  type,
  base_experience,
  sprite,
}) => {

  return (
    <View style={[styles.card, styles.shadow]}>
        <View style={styles.imageCard}>
        <ImageBackground style={styles.image} source={{uri:sprite }} />
      </View>
      <View style={styles.contentCard}>
        <Text style={styles.titleCard}>{name}</Text>
        <Text
          numberOfLines={3}
          ellipsizeMode="tail"
          style={styles.descriptionCard}>
          Type : {type}
        </Text>
        <Text
          numberOfLines={3}
          ellipsizeMode="tail"
          style={styles.descriptionCard}>
          Experience : {base_experience}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  newPrice: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  oldPrice: {
    fontSize: 20,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  descriptionCard: {
    fontFamily: 'Comfortaa Medium',
    fontSize: 16,
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  imageCard: {
    width: 150,
    backgroundColor: '#BC8F8F',
  },
  contentCard: {
    color: Colors.black,
    padding: 5,
    flexShrink: 1,
  },
  titleCard: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Comfortaa',
  },
  test: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
    height: 200,
    borderRadius: 5,
     backgroundColor: '#FFF5EE',
  },
  shadow: {
    elevation: 2,
    shadowColor: Colors.black,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});

export default CardProduct;
