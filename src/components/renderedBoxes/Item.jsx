import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {MediumText} from '../ui/texts/MediumText';
import {THEMES} from '../theme';
import {DarkButton} from '../ui/buttons/DarkButton';
import {CameraSmall, HeartDark} from '../includeSvg';

const innerWidth = Dimensions.get('window').width - THEMES.PADDING_HORIZONTAL;

export const Item = ({pageStyle, onPress}) => {
  return (
    <View
      style={[
        styles.container,
        {
          width: 150,
          height: 146,
          paddingHorizontal: 6,
          marginTop: 9,
        },
      ]}>
      <View style={styles.header}>
        <View style={{width: '12%'}} />
        <MediumText style={styles.title}>Пленка</MediumText>
        <View
          style={[
            styles.headerIcons,
            {
              columnGap: pageStyle == 1 ? 10 : 6,
            },
          ]}>
          <TouchableOpacity onPress={() => alert('Heart')}>
            <HeartDark />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={[
          styles.imageParent,
          {
            height: '65%',
          },
        ]}>
        <Image
          source={require('../../../assets/images/plyonka.png')}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
          }}
        />
        <View
          style={[
            styles.moreButtonParent,
            {
              bottom: -13,
            },
          ]}>
          <DarkButton
            style={{
              height: 26,
            }}
            textStyle={{
              fontSize: 12,
            }}
            onPress={onPress}>
            Подробнее
          </DarkButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEMES.LIGHT,

    marginRight: 10,
  },
  header: {
    height: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  imageParent: {
    // borderWidth: 1,
    width: '100%',
    position: 'relative',
  },
  moreButtonParent: {
    alignSelf: 'center',
    position: 'absolute',
    width: '80%',
    backgroundColor: THEMES.LIGHT,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 13,
  },
});
