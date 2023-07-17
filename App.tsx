/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar, View} from 'react-native';
import 'react-native-gesture-handler';
import {AuthNavigation} from './src/navigation/AuthNavigation';
import {THEMES} from './src/components/theme';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <AuthNavigation />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
