import {TransitionSpecs, createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {LoginScreen} from '../screens/authScreens/LoginScreen';
import {RegisterScreen} from '../screens/authScreens/RegisterScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export const AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        gestureDirection: 'horizontal',
        gestureEnabled: true,
        fullScreenGestureEnabled: true,

      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
