import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {THEMES} from '../../theme';
import {MediumText} from '../texts/MediumText';

export const LightButton = ({children, onPress, style}) => {
  return (
    <TouchableOpacity style={{...styles.button, ...style}} onPress={onPress}>
      <MediumText style={styles.text}>{children}</MediumText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: THEMES.BACKGROUND,
    width: '100%',
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: THEMES.DARK,
  },
  text: {
    color: THEMES.DARK,
    fontSize: 20,
  },
});
