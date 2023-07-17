import {useNavigation} from '@react-navigation/native';
import {Dimensions, StyleSheet, View} from 'react-native';
import {THEMES} from '../../components/theme';
import {MainInput} from '../../components/inputs/inputs';
import {Wrapper} from '../../components/Wrapper';
import {SemiBoldText} from '../../components/ui/texts/SemiBoldText';
import {DarkButton} from '../../components/ui/buttons/DarkButton';
import {RegularText} from '../../components/ui/texts/RegularText';
import {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export const RegisterScreen = () => {
  const navigation = useNavigation();
  const [changeSecurity, setChangeSecurity] = useState(true);
  const [changeSecurityConfirm, setChangeSecurityConfirm] = useState(true);
  return (
    <Wrapper backgroundColor={THEMES.BACKGROUND} barStyle={'dark-content'}>
      <View style={styles.goBack}>
        <FontAwesome
          name={'angle-left'}
          color={THEMES.DARK}
          size={26}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <KeyboardAwareScrollView
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
          onPress={() => {
            navigation.navigate('TabNavigation');
          }}>
          Создать
        </DarkButton>
      </KeyboardAwareScrollView>
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
});
