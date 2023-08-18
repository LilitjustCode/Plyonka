import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  ScrollView,
  Text,
  SafeAreaView,
  TextInput,
} from 'react-native';

import {DarkHeader} from '../ui/DarkHeader';
import {THEMES} from '../theme';
import {AngleLeftWhite} from '../includeSvg';
import {MediumText} from '../ui/texts/MediumText';

export const ChatHeader = ({navigation}) => {
  const [headerHeight, setHeaderHeight] = useState(null);
  
  return (
    <DarkHeader
      onLayout={e => {
        const {height} = e.nativeEvent.layout;
        console.log(height);
        setHeaderHeight(height);
      }}>
      <View style={styles.navbar}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            navigation.goBack();
          }}>
          <AngleLeftWhite />
          <MediumText style={styles.backText}>Назад</MediumText>
        </TouchableOpacity>
        <View style={{paddingTop: 20}}>
          <Text style={styles.nameText}>Ольга Рыбкина</Text>
          <Text style={styles.online}>Онлайн</Text>
        </View>
        <View style={{paddingTop: 10}}>
          <Image
            style={{width: 52, height: 48}}
            source={require('../../../assets/images/Ellipse3.png')}
          />
        </View>
      </View>
    </DarkHeader>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 25,
  },
  backText: {
    color: THEMES.LIGHT,
    fontSize: 17,
  },
  backButton: {
    flexDirection: 'row',
    columnGap: 5,
    alignItems: 'center',
  },
  nameText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
  },
  online: {
    color: '#A6A6A7',
    fontSize: 14,
    fontFamily: 'Montserrat-Light',

    textAlign: 'center',
  },
});
