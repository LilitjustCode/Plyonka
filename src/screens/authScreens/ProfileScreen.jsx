import {Wrapper} from '../../components/Wrapper';
import {THEMES} from '../../components/theme';
import React, {useState} from 'react';
import {DarkHeader} from '../../components/ui/DarkHeader';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  ScrollView,
  Text,
} from 'react-native';
import {ProfileBoxes} from '../../components/renderedBoxes/PremiumBox';
import {ManagerBoxes} from '../../components/renderedBoxes/ManagerBox';
import {YourDataBoxes} from '../../components/renderedBoxes/YourDataBox';
import {ChangePass} from '../../components/renderedBoxes/ChangePass';
import {CloseBox} from '../../components/renderedBoxes/CloseBox';

export const ProfileScreen = () => {
  const [headerHeight, setHeaderHeight] = useState(null);
  return (
    <Wrapper
      style={styles.wrapper}
      barStyle="dark-content"
      backgroundColor={THEMES.BACKGROUND}>
      <DarkHeader
        onLayout={e => {
          const {height} = e.nativeEvent.layout;
          console.log(height);
          setHeaderHeight(height);
        }}>
        <View style={styles.headerBlock}>
          <TouchableOpacity>
            <Image
              style={styles.headerImage}
              source={require('../../../assets/images/Ellipse3.png')}
            />
            <Text style={styles.headerImageText}>Выбрать фотографию</Text>
          </TouchableOpacity>
          <View style={{marginLeft: 28}}>
            <Text style={styles.userName}>Ольга Рыбкина</Text>
            <View style={{marginTop: 12}}>
              <Text style={styles.headerBoldText}>Электронная почта</Text>
              <Text style={styles.headerText}>Olga@maiI.ru</Text>
            </View>
            <View style={{marginTop: 11}}>
              <Text style={styles.headerBoldText}>Номер телефона</Text>
              <Text style={styles.headerText}>8-707-488-22-22</Text>
            </View>
          </View>
        </View>
      </DarkHeader>
      <ScrollView
        style={{
          flex: 1,
          paddingHorizontal: 17,
          marginTop: 22,
          marginBottom: 30,
        }}>
        <ProfileBoxes />
        <ManagerBoxes />
        <YourDataBoxes />
        <ChangePass />
        <CloseBox />
      </ScrollView>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  wrapper: {paddingHorizontal: 0},
  headerBlock: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerImage: {
    width: 100,
    height: 94,
    alignSelf: 'center',
  },
  headerImageText: {
    textAlign: 'center',
    color: '#95BEC0',
    marginTop: 6,
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
  },
  userName: {
    color: '#FFF',
    // marginTop: 6,
    fontSize: 20,
    fontFamily: 'Montserrat-Regular',
  },
  headerBoldText: {
    color: 'rgba(255, 255, 255, 0.50)',
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
  },
  headerText: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
  },
});
