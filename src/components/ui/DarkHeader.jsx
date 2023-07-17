import React from 'react';
import {StyleSheet, View} from 'react-native';
import {THEMES} from '../theme';

export const DarkHeader = ({children, onLayout}) => {
  return (
    <View style={{...styles.darkHeader}} onLayout={onLayout}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  darkHeader: {
    width: '100%',
    backgroundColor: THEMES.DARK,
    borderBottomRightRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
