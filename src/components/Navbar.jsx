import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {SemiBoldText} from './ui/texts/SemiBoldText';
import {THEMES} from './theme';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {MediumText} from './ui/texts/MediumText';

export const Navbar = ({backIcon}) => {
  return (
    <View style={styles.bar}>
      {backIcon ? (
        <TouchableOpacity style={styles.backButton}>
          <FontAwesome
            name={'angle-left'}
            color={THEMES.LIGHT}
            size={26}
            onPress={() => {
              navigation.goBack();
            }}
          />
          <MediumText style={styles.backText}>Назад</MediumText>
        </TouchableOpacity>
      ) : (
        <View style={{width: '20%'}}></View>
      )}

      <SemiBoldText style={styles.text}>LOGO</SemiBoldText>

      <View style={styles.chatProfileParent}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/ChatIconNav.png')}
            style={{tintColor: THEMES.LIGHT}}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.avatarParent}>
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
