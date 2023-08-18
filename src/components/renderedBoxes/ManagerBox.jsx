import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  ScrollView,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import {WhiteArrow} from '../includeSvg';

export const ManagerBoxes = () => {
  const [open, setOpen] = useState(false);

  return open ? (
    <TouchableOpacity
      onPress={() => {
        setOpen(false);
      }}
      style={styles.blockOpen}>
      <View style={styles.header}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{width: 29, height: 25}}
            source={require('../../../assets/images/manager.png')}
          />
          <Text style={styles.blockText}>Ваш Менеджер</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setOpen(false);
          }}>
          <Image
            style={{width: 31, height: 26, transform: [{rotateX: '180deg'}]}}
            source={require('../../../assets/images/whiteArrow.png')}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.desriptionText}>Ольга Рыбкина</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View>
          <View style={{marginTop: 12}}>
            <Text style={styles.headerBoldText}>Электронная почта</Text>
            <Text style={styles.headerText}>Olga@maiI.ru</Text>
          </View>
          <View style={{marginTop: 11}}>
            <Text style={styles.headerBoldText}>Номер телефона</Text>
            <Text style={styles.headerText}>8-707-488-22-22</Text>
          </View>
        </View>
        <View>
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
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Написать Менеджеру</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      onPress={() => {
        setOpen(true);
      }}
      style={styles.block}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          style={{width: 29, height: 25}}
          source={require('../../../assets/images/manager.png')}
        />
        <Text style={styles.blockText}>Ваш Менеджер</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          setOpen(true);
        }}>
        <Image
          style={{width: 31, height: 26}}
          source={require('../../../assets/images/whiteArrow.png')}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  block: {
    width: '100%',
    height: 59,
    backgroundColor: '#0B0C10',
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
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'Montserrat-Regular',
    marginLeft: 17,
  },
  blockOpen: {
    width: '100%',
    // height: 59,
    backgroundColor: 'black',
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
    fontSize: 20,
    color: '#FFF',
    marginTop: 25,
  },
  button: {
    marginTop: 31,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    paddingHorizontal: 21,
    paddingVertical: 7,
  },
  buttonText: {
    fontSize: 17,
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
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
