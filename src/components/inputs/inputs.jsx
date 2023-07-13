import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {THEMES} from '../theme';

export const MainInput = ({placeholder, style}) => {
  return (
    <View style={{...styles.parent, ...style}}>
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: THEMES.DARK,
    borderRadius: 10,
  },
  input: {
    width: '100%',
    height: '100%',
    paddingLeft: 30,
  },
});
