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

export const MessageBlock = ({pageStyle, onPress}) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.imageParent,
          {
            width: 250,
            height: 150,
          },
        ]}>
        <Image
          source={require('../../../assets/images/plyonka.png')}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
            borderRadius: 10,
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
              width: 132,
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
      <View style={styles.block}>
        <MediumText
          style={{
            opacity: 0.3,
            textAlign: 'center',
            marginTop: pageStyle == 1 ? 20 : 15,
            fontSize: 13,
          }}>
          Артикул
        </MediumText>
        <MediumText
          style={{
            opacity: 0.3,
            textAlign: 'center',
            marginTop: pageStyle == 1 ? 20 : 15,
            fontSize: 13,
          }}>
          Артикул
        </MediumText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: THEMES.LIGHT,
    borderRadius: 10,
    marginTop: 10,
  },
  header: {
    // height: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  imageParent: {
    borderWidth: 1,
    width: '100%',
    position: 'relative',
    borderRadius: 10,
  },
  moreButtonParent: {
    alignSelf: 'center',
    position: 'absolute',
    width: 132,
    backgroundColor: THEMES.LIGHT,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: -5,
  },
  title: {
    fontSize: 13,
  },
  block: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
