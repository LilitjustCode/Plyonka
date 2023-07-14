import React from 'react';
import {LoginScreen} from '../screens/notAuthScreens/LoginScreen';
import {RegisterScreen} from '../screens/notAuthScreens/RegisterScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {THEMES} from '../components/theme';
import {TabNavigation} from './TabNavigation';
import {ForgotPasswordScreen} from '../screens/notAuthScreens/ForgotPasswordScreen';

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
        statusBarAnimation: 'slide',
        statusBarStyle: 'dark',
        statusBarColor: THEMES.BACKGROUND,
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
    </Stack.Navigator>
  );
};
