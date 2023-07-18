import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {THEMES} from '../../theme';
import {MediumText} from '../texts/MediumText';

export const DarkButton = ({children, onPress, style, textStyle}) => {
  return (
    <TouchableOpacity style={{...styles.button, ...style}} onPress={onPress}>
      <MediumText style={{...styles.text, ...textStyle}}>{children}</MediumText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: THEMES.DARK,
    width: '100%',
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: THEMES.LIGHT,
    fontSize: 20,
  },
});
