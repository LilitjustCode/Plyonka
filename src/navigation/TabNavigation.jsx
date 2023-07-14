import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {HomeScreen} from '../screens/authScreens/HomeScreen';
import {THEMES} from '../components/theme';
import {CameraInBar, CatalogIcon, Heart} from '../components/includeSvg';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: THEMES.DARK,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: () => {
            return <CatalogIcon />;
          },
          tabBarLabel: 'Каталог',
          tabBarLabelStyle: {
            fontFamily: 'Montserrat-Medium',
            color: THEMES.LIGHT,
            fontSize: 12,
          },
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => {
            return <CameraInBar />;
          },
          tabBarLabel: '',
          tabBarIconStyle: {
            marginBottom: 20,
          },
        }}
      />
      <Tab.Screen
        name="Homea"
        component={HomeScreen}
        options={{
          tabBarIcon: () => {
            return <Heart />;
          },
          tabBarLabel: 'Избранные',
          tabBarLabelStyle: {
            fontFamily: 'Montserrat-Medium',
            color: THEMES.LIGHT,
            fontSize: 12,
          },
        }}
      />
    </Tab.Navigator>
  );
};
