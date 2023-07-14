import React from 'react';
import {StyleSheet, View} from 'react-native';
import {THEMES} from '../theme';

export const DarkHeader = ({children}) => {
  return <View style={styles.darkHeader}>{children}</View>;
};

const styles = StyleSheet.create({
  darkHeader: {
    width: '100%',
    height: 100,
    backgroundColor: THEMES.DARK,
    borderBottomRightRadius: 40,
  },
});
