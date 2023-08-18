import {useNavigation} from '@react-navigation/native';
import {StatusBar, StyleSheet, View} from 'react-native';
import {THEMES} from '../../components/theme';
import {MainInput} from '../../components/inputs/inputs';
import {Wrapper} from '../../components/Wrapper';
import {SemiBoldText} from '../../components/ui/texts/SemiBoldText';
import {DarkButton} from '../../components/ui/buttons/DarkButton';
import {RegularText} from '../../components/ui/texts/RegularText';
import {LightButton} from '../../components/ui/buttons/LightButton';
import {useState} from 'react';

export const LoginScreen = () => {
  const navigation = useNavigation();
  const [changeSecurity, setChangeSecurity] = useState(true);

  return (
    <Wrapper barStyle="dark-content" backgroundColor={THEMES.BACKGROUND}>
      <View style={styles.container}>
        <SemiBoldText style={styles.logo}>LOGO</SemiBoldText>
        <RegularText style={styles.welcome}>Вход в приложение</RegularText>

        <MainInput
          placeholder={'Введите логин/Номер телефона'}
          placeholderColor={THEMES.PLACEHOLDER}
        />
        <MainInput
          placeholder={'Введите пароль'}
          placeholderColor={THEMES.PLACEHOLDER}
          style={styles.input}
          password={true}
          secureTextEntry={changeSecurity}
          changeSecurity={() => setChangeSecurity(!changeSecurity)}
        />
        <RegularText
          style={styles.forgot}
          onPress={() => navigation.navigate('ForgotPasswordScreen')}>
          Забыли пароль ?
        </RegularText>

        <DarkButton
          onPress={() => navigation.navigate('TabNavigation')}
          style={{borderRadius: 10}}>
          Войти
        </DarkButton>
        <LightButton
          style={styles.lightButton}
          onPress={() => {
            navigation.navigate('RegisterScreen');
          }}>
          Регистрация
        </LightButton>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  input: {
    marginTop: 23,
    marginBottom: 36,
  },
  lightButton: {
    marginTop: 10,
  },
});
