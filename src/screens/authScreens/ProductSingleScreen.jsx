import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Wrapper} from '../../components/Wrapper';
import {THEMES} from '../../components/theme';
import {AngleLeftBlack} from '../../components/includeSvg';
import {MediumText} from '../../components/ui/texts/MediumText';
import {useNavigation} from '@react-navigation/native';
import {RegularText} from '../../components/ui/texts/RegularText';
import {DarkButton} from '../../components/ui/buttons/DarkButton';

export const ProductSingleScreen = () => {
  const navigation = useNavigation();
  return (
    <Wrapper
      style={styles.wrapper}
      barStyle="dark-content"
      backgroundColor={THEMES.BACKGROUND}>
      <View style={styles.navbar}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            navigation.goBack();
          }}>
          <AngleLeftBlack />
          <MediumText style={styles.backText}>Назад</MediumText>
        </TouchableOpacity>
        <View style={styles.ARCameraParent}>
          <RegularText style={{fontSize: 10}}>Посмотреть через</RegularText>
          <DarkButton style={styles.ARCamera} textStyle={{fontSize: 17}}>
            Камера AR
          </DarkButton>
        </View>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: THEMES.PADDING_HORIZONTAL_20,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  backButton: {
    flexDirection: 'row',
    columnGap: 10,
    alignItems: 'center',
  },
  backText: {
    color: THEMES.DARK,
    fontSize: 17,
  },
  ARCameraParent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    columnGap: 10,
  },
  ARCamera: {
    width: '50%',
  },
});
