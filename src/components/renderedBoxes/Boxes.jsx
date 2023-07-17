import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {MediumText} from '../ui/texts/MediumText';
import {THEMES} from '../theme';
import {IonArrowUp} from '../includeSvg';

export const Boxes = ({style, image, aspectRatio}) => {
  return (
    <View style={{...styles.box, ...style}}>
      <MediumText style={{marginBottom: 30}}>Боксы</MediumText>
      <View style={styles.arrowImageParent}>
        <TouchableOpacity>
          <IonArrowUp />
        </TouchableOpacity>
        <Image
          style={{width: 100, height: 100 * aspectRatio, borderRadius: 10}}
          source={{uri: image}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: THEMES.LIGHT,
    width: Dimensions.get('window').width / 2.3,
    // height: Math.random() * 200,
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 10,
  },
  arrowImageParent: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: '100%',
    // height: '100%',
    paddingLeft: 10,
  },
});
