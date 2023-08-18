import {useNavigation} from '@react-navigation/native';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {THEMES} from '../../components/theme';
import {MainInput} from '../../components/inputs/inputs';
import {Wrapper} from '../../components/Wrapper';
import {SemiBoldText} from '../../components/ui/texts/SemiBoldText';
import {DarkButton} from '../../components/ui/buttons/DarkButton';
import {RegularText} from '../../components/ui/texts/RegularText';
import {useState} from 'react';
import {AngleLeftBlack} from '../../components/includeSvg';
import {MediumText} from '../../components/ui/texts/MediumText';

export const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const [changeSecurity, setChangeSecurity] = useState(true);
  const [changeSecurityConfirm, setChangeSecurityConfirm] = useState(true);

  return (
    <Wrapper barStyle="dark-content" backgroundColor={THEMES.BACKGROUND}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          navigation.goBack();
        }}>
        <AngleLeftBlack />
        <MediumText style={styles.backText}>Назад</MediumText>
      </TouchableOpacity>
      <View style={styles.container}>
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
          style={{borderRadius: 10}}
          onPress={() => {
            navigation.navigate('TabNavigation');
          }}>
          <Text style={styles.darkButtonText}>Установить новый пароль</Text>
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
  darkButtonText: {
    fontSize: 17,
    fontFamily: 'Montserrat-Medium',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 25,
    left: 15,
  },
});
