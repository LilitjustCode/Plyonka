import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {THEMES} from '../../components/theme';
import {MainInput} from '../../components/inputs/inputs';
import {Wrapper} from '../../components/Wrapper';
import {SemiBoldText} from '../../components/ui/texts/SemiBoldText';
import {DarkButton} from '../../components/ui/buttons/DarkButton';
import {RegularText} from '../../components/ui/texts/RegularText';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AngleLeftBlack} from '../../components/includeSvg';
import {MediumText} from '../../components/ui/texts/MediumText';

export const RegisterScreen = () => {
  const navigation = useNavigation();
  const [changeSecurity, setChangeSecurity] = useState(true);
  const [changeSecurityConfirm, setChangeSecurityConfirm] = useState(true);
  return (
    <Wrapper backgroundColor={THEMES.BACKGROUND} barStyle={'dark-content'}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          navigation.goBack();
        }}>
        <AngleLeftBlack />
        <MediumText style={styles.backText}>Назад</MediumText>
      </TouchableOpacity>
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
        contentContainerStyle={{
          height: Dimensions.get('window').height - 100,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}>
        <SemiBoldText style={styles.logo}>LOGO</SemiBoldText>

        <RegularText style={styles.welcome}>Регистрация</RegularText>

        <MainInput
          placeholder={'Имя Пользователя'}
          placeholderColor={THEMES.PLACEHOLDER}
          style={styles.inputs}
        />
        <MainInput
          placeholder={'Телефон'}
          placeholderColor={THEMES.PLACEHOLDER}
          style={styles.inputs}
          keyboardType={'phone-pad'}
        />
        <MainInput
          placeholder={'E-mail'}
          placeholderColor={THEMES.PLACEHOLDER}
          style={styles.inputs}
          keyboardType={'email-address'}
        />
        <MainInput
          placeholder={'Придумайте пароль'}
          placeholderColor={THEMES.PLACEHOLDER}
          password={true}
          secureTextEntry={changeSecurity}
          changeSecurity={() => setChangeSecurity(!changeSecurity)}
          style={styles.inputs}
        />
        <MainInput
          placeholder={'Придумайте пароль'}
          placeholderColor={THEMES.PLACEHOLDER}
          style={styles.inputs}
          password={true}
          secureTextEntry={changeSecurityConfirm}
          changeSecurity={() =>
            setChangeSecurityConfirm(!changeSecurityConfirm)
          }
        />
        <DarkButton
          style={{borderRadius: 10}}
          onPress={() => {
            navigation.navigate('TabNavigation');
          }}>
          Создать
        </DarkButton>
      </ScrollView>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  logo: {
    marginBottom: 62,
    fontSize: 25,
  },
  welcome: {
    marginBottom: 40,
  },
  forgot: {
    fontSize: 12,
    width: '100%',
    marginLeft: 16,
    marginBottom: 5,
  },
  inputs: {
    marginBottom: 23,
  },
  lightButton: {
    marginTop: 10,
  },
  goBack: {
    position: 'absolute',
    zIndex: 10,
    top: 20,
    left: 40,
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    width: '100%',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 25,
    left: 15,
  },
});
