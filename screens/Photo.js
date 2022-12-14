/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import EditProfil from './Snap';
import CameraView from './CameraView';

const Photo = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Snap" component={EditProfil} />
        <Stack.Screen name="Take photo" component={CameraView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Photo;
