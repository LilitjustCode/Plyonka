import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Wrapper} from '../../components/Wrapper';
import {DarkHeader} from '../../components/ui/DarkHeader';
import {Slider} from '../../components/slider/Slider';
import {Boxes} from '../../components/renderedBoxes/Boxes';
import {THEMES} from '../../components/theme';

export const HomeScreen = () => {
  return (
    <Wrapper style={styles.wrapper}>
      <DarkHeader></DarkHeader>
      <ScrollView style={{flex: 1}}>
        <Slider />
        <View style={styles.renderedParent}>
          {new Array(10).fill(null).map((item, index) => (
            <Boxes key={index} style={{height: 20 * index}} />
          ))}
        </View>
      </ScrollView>
    </Wrapper>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 0,
  },
  renderedParent: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
    rowGap: 20,
  },
});
