import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {MediumText} from '../ui/texts/MediumText';
import {THEMES} from '../theme';

export const Boxes = props => {
  return (
    <View style={{...styles.box, ...props.style}}>
      <MediumText>Боксы</MediumText>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: THEMES.LIGHT,
    width: Dimensions.get('window').width / 2 - THEMES.PADDING_HORIZONTAL,
    // height: Math.random() * 200,
  },
});
