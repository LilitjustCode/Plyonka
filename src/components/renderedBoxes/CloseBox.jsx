import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  ScrollView,
  Text,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {WhiteArrow} from '../includeSvg';
import {MainInput} from '../inputs/inputs';
import {THEMES} from '../theme';

export const CloseBox = () => {
  const [open, setOpen] = useState(false);
  const [changeSecurity, setChangeSecurity] = useState(true);
  const [changeSecurityConfirm, setChangeSecurityConfirm] = useState(true);

  return (
    <TouchableOpacity
      onPress={() => {
        setOpen(true);
      }}
      style={styles.block}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          style={{width: 25, height: 25}}
          source={require('../../../assets/images/close.png')}
        />
        <Text style={styles.blockText}>Выйти с аккаунта</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  block: {
    width: '100%',
    height: 59,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 23,
    marginTop: 22,
  },
  blockText: {
    color: '#0B0C10',
    fontSize: 20,
    fontFamily: 'Montserrat-Regular',
    marginLeft: 17,
  },
  blockOpen: {
    width: '100%',
    // height: 59,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: 22,
    paddingVertical: 16,
    paddingHorizontal: 23,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  desriptionText: {
    fontSize: 15,
    color: 'rgba(255, 255, 255, 0.73)',
    marginTop: 25,
  },
  button: {
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 21,
    paddingVertical: 7,
    backgroundColor: '#0B0C10',
  },
  buttonText: {
    fontSize: 17,
    color: 'rgba(255, 255, 255, 0.73)',
    textAlign: 'center',
  },
  change: {
    color: '#95BEC0',
    fontSize: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#0B0C10',
    borderRadius: 10,
    width: '100%',
    paddingHorizontal: 28,
    paddingVertical: 7,
    marginTop: 5,
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
  },
});
