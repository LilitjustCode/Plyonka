import React from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import {MediumText} from '../ui/texts/MediumText';
import {THEMES} from '../theme';
import {DarkButton} from '../ui/buttons/DarkButton';
import {CameraSmall, HeartDark} from '../includeSvg';

const innerWidth = Dimensions.get('window').width - THEMES.PADDING_HORIZONTAL;

export const ProductItems = ({pageStyle}) => {
  return (
    <View
      style={[
        styles.container,
        {
          width: pageStyle == 1 ? innerWidth : innerWidth / 2 - 5,
          height: pageStyle == 1 ? 270 : 150,
          paddingHorizontal: pageStyle == 1 ? 24 : 15,
        },
      ]}>
      <View style={styles.header}>
        <View style={{width: pageStyle == 1 ? '20%' : '12%'}} />
        <MediumText style={styles.title}>Пленка</MediumText>
        <View
          style={[
            styles.headerIcons,
            {
              columnGap: pageStyle == 1 ? 10 : 6,
            },
          ]}>
          <CameraSmall onPress={() => alert('Camera')} />
          <HeartDark onPress={() => alert('Heart')} />
        </View>
      </View>

      <View
        style={[
          styles.imageParent,
          {
            height: pageStyle == 1 ? '75%' : '65%',
          },
        ]}>
        <Image
          source={require('../../../assets/images/plyonka.png')}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
          }}
        />
        <View
          style={[
            styles.moreButtonParent,
            {
              bottom: pageStyle == 1 ? -20 : -13,
            },
          ]}>
          <DarkButton
            style={{
              height: pageStyle == 1 ? 36 : 26,
            }}
            textStyle={{
              fontSize: pageStyle == 1 ? 20 : 12,
            }}>
            Подробнее
          </DarkButton>
        </View>
      </View>
      <MediumText
        style={{
          opacity: 0.3,
          textAlign: 'center',
          marginTop: pageStyle == 1 ? 20 : 10,
          fontSize: 13,
        }}>
        Артикул
      </MediumText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: THEMES.LIGHT,
    borderRadius: 10,
  },
  header: {
    height: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  imageParent: {
    borderWidth: 1,
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
