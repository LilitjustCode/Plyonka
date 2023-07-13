import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {THEMES} from '../theme';

export const BoldText = props => {
  return <Text style={{...styles.text, ...props.style}}>{props.children}</Text>;
};
const styles = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat-SemiBold.ttf',
    fontSize: 20,
    color: THEMES.DARK,
  },
});
