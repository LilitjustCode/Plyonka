import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {SemiBoldText} from './ui/texts/SemiBoldText';
import {THEMES} from './theme';
import {MediumText} from './ui/texts/MediumText';
import {AngleLeftWhite} from './includeSvg';
import {useNavigation} from '@react-navigation/native';

export const Navbar = ({backIcon}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.bar}>
      {backIcon ? (
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            navigation.goBack();
          }}>
          <AngleLeftWhite />
          <MediumText style={styles.backText}>Назад</MediumText>
        </TouchableOpacity>
      ) : (
        <View style={{width: '20%'}} />
      )}

      <SemiBoldText style={styles.text}>LOGO</SemiBoldText>

      <View style={styles.chatProfileParent}>
        <TouchableOpacity onPress={() => navigation.navigate('RequestsScreen')}>
          <Image
            source={require('../../assets/images/ChatIconNav.png')}
            style={{tintColor: THEMES.LIGHT, width: 25}}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('ProfileScreen')}
          style={styles.avatarParent}>
          <Image
            source={require('../../assets/images/Ellipse3.png')}
            style={styles.avatar}
          />
          <MediumText style={styles.profileText}>Профиль</MediumText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bar: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: THEMES.LIGHT,
    alignSelf: 'center',
    fontSize: 25,
  },
  chatProfileParent: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },
  backText: {
    color: THEMES.LIGHT,
    fontSize: 17,
  },
  backButton: {
    flexDirection: 'row',
    columnGap: 10,
    alignItems: 'center',
  },
  avatar: {
    width: 25,
    height: 25,
  },
  avatarParent: {
    alignItems: 'center',
  },
  profileText: {
    color: THEMES.LIGHT,
    fontSize: 12,
  },
});
