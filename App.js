/* eslint-disable react-native/no-inline-styles */
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Pokedex from './screens/Pokedex';
import Accueil from './screens/Accueil';
import Photo from './screens/Photo';
import {StatusBar, useColorScheme} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const Tab = createMaterialBottomTabNavigator();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Tab.Navigator barStyle={{backgroundColor: '#BDB76B'}}>
          <Tab.Screen
            name="Accueil"
            component={Accueil}
            options={{
              tabBarLabel: 'Accueil',
              tabBarIcon: ({color}) => (
                <Icon name="home" color={color} size={20} />
              ),
            }}
          />
          <Tab.Screen
            name="Pokedex"
            component={Pokedex}
            options={{
              tabBarLabel: 'Pokedex',
              tabBarIcon: ({color}) => (
                <Icon name="pokemon-go" color={color} size={20} />
              ),
            }}
          />
          <Tab.Screen
            name="Photo"
            component={Photo}
            options={{
              tabBarLabel: 'Photo',
              tabBarIcon: ({color}) => (
                <Icon name="camera" color={color} size={20} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
