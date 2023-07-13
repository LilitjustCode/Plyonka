/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import 'react-native-gesture-handler';
import {AuthNavigation} from './src/navigation/AuthNavigation';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  );
}

export default App;
