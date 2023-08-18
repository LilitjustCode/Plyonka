import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {HomeScreen} from '../screens/authScreens/HomeScreen';
import {THEMES} from '../components/theme';
import {CameraInBar, CatalogIcon, Heart} from '../components/includeSvg';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CatalogScreen} from '../screens/authScreens/CatalogScreen';
import {ProductSingleScreen} from '../screens/authScreens/ProductSingleScreen';
import {ProfileScreen} from '../screens/authScreens/ProfileScreen';
import {FavoriteScreen} from '../screens/authScreens/FavoriteScreens';
import {ChatScreen} from '../screens/authScreens/ChatScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: THEMES.DARK,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          paddingHorizontal: 35,
        },
      }}>
      <Tab.Screen
        name="CatalogStack"
        component={CatalogStack}
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
        name="Hom"
        component={FavoriteScreen}
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

const CatalogStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        gestureDirection: 'horizontal',
        gestureEnabled: true,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CatalogScreen" component={CatalogScreen} />

      <Stack.Screen
        name="ProductSingleScreen"
        component={ProductSingleScreen}
      />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
 
    </Stack.Navigator>
  );
};
