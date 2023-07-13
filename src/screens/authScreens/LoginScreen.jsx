import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {THEMES} from '../../components/theme';
import {MainInput} from '../../components/inputs/inputs';
import {Wrapper} from '../../components/Wrapper';
import {BoldText} from '../../components/ui/BoldText';

export const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <Wrapper>
      <View style={styles.container}>
        <BoldText style={styles.logo}>LOGO</BoldText>
        <MainInput placeholder={'Введите логин/Номер телефона'} />
        <MainInput placeholder={'Введите пароль'} style={styles.input} />
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
  },
  input: {
    marginTop: 23,
  },
});
