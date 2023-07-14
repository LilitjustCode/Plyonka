import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {THEMES} from '../../theme';

export const RegularText = props => {
  return (
    <Text style={{...styles.text, ...props.style}} onPress={props.onPress}>
      {props.children}
    </Text>
  );
};
const styles = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
    color: THEMES.DARK,
  },
});
