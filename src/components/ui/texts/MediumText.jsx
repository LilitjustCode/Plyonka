import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {THEMES} from '../../theme';

export const MediumText = props => {
  return <Text style={{...styles.text, ...props.style}}>{props.children}</Text>;
};
const styles = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat-Medium',
    color: THEMES.DARK,
  },
});
