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

export const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const [changeSecurity, setChangeSecurity] = useState(true);
  const [changeSecurityConfirm, setChangeSecurityConfirm] = useState(true);

  return (
    <Wrapper>
      <View style={styles.container}>
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
        <SemiBoldText style={styles.logo}>LOGO</SemiBoldText>

        <RegularText style={styles.welcome}>Восстановление</RegularText>

        <MainInput
          placeholder={'Код подтверждения'}
          placeholderColor={THEMES.PLACEHOLDER}
          style={styles.inputs}
          keyboardType="number-pad"
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
          Установить новый пароль
        </DarkButton>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
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
    left: 0,
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    width: '100%',
  },
});
