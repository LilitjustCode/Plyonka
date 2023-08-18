import React, {useState, useRef, useCallback, useMemo} from 'react';
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

import {THEMES} from '../theme';
import {DarkButton} from '../ui/buttons/DarkButton';

export const DescriptionBlock = ({navigation}) => {
  return (
    <View style={styles.bottomSheetContainer}>
      <Text style={styles.bottomSheetHeaderText}>Ольга Рыбкина</Text>
      <View style={styles.descBlock}>
        <View>
          <Text style={styles.btnlightText}>Электронная почта</Text>
          <Text style={styles.btnboldText}>Olga@maiI.ru</Text>
        </View>
        <View style={{paddingRight: 10}}>
          <Text style={styles.btnlightText}>Электронная почта</Text>
          <Text style={styles.btnboldText}>Olga@maiI.ru</Text>
        </View>
      </View>
      <View style={styles.descBlock}>
        <View>
          <Text style={styles.btnlightText}>Номер телефона</Text>
          <Text style={styles.btnboldText}>8-707-488-22-22</Text>
        </View>
        <View>
          <Text style={styles.btnlightText}>Номер телефона</Text>
          <Text style={styles.btnboldText}>8-707-488-22-22</Text>
        </View>
      </View>
      <View style={styles.descBlock}>
        <Text style={[styles.cyrcleText, {marginLeft: 0}]}>Статус заявки</Text>
        <View style={styles.downMenu}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={styles.cyrcle}></View>
            <Text style={styles.cyrcleText}>Резерв подтвержден</Text>
          </View>
          <TouchableOpacity>
            <Image
              style={{width: 25, height: 25}}
              source={require('../../../assets/images/arr.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Image
        style={styles.imgstyle}
        source={require('../../../assets/images/plyonka.png')}
      />
      <View style={[styles.descBlock, {justifyContent: 'flex-start'}]}>
        <Text style={styles.productName}>Пленка 202 AMGa</Text>
        <Text style={styles.articul}>Артикул</Text>
      </View>
      <View style={[styles.descBlock]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.size}>Размер</Text>
          <View style={[styles.input]}>
            <TextInput
              placeholder="20м"
              placeholderTextColor={'#202833CF'}
              maxLength={3}
              style={{height: 35}}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.size}>Размер</Text>
          <View style={[styles.input]}>
            <TextInput
              placeholder="20м"
              placeholderTextColor={'#202833CF'}
              maxLength={3}
              style={{height: 35}}
            />
          </View>
        </View>
      </View>
      <View style={[styles.descBlock]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.size}>Шт.</Text>
          <View style={[styles.input, {marginLeft: 52}]}>
            <TextInput
              placeholder="2"
              placeholderTextColor={'#202833CF'}
              maxLength={1}
              style={{height: 35}}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.size}>Шт.</Text>
          <View style={[styles.input, {marginLeft: 52}]}>
            <TextInput
              placeholder="2"
              placeholderTextColor={'#202833CF'}
              maxLength={1}
              style={{height: 35}}
            />
          </View>
        </View>
      </View>
      <View style={styles.bigInput}>
        <TextInput
          multiline
          style={[{paddingVertical: 0}]}
          placeholder="Комментарий"
          placeholderTextColor={'#2028334F'}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <DarkButton
          onPress={() => navigation.navigate('ChatScreen')}
          style={{width: 195, marginTop: 10, borderRadius: 10}}>
          Отправить
        </DarkButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomSheetContainer: {
    width: '100%',
    flex: 1,
    paddingHorizontal: THEMES.PADDING_HORIZONTAL_20,
    marginBottom: 40,
  },
  bottomSheetHeaderText: {
    fontSize: 20,
    color: '#0B0C10',
    fontFamily: 'Montserrat-Medium',
  },
  descBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  btnlightText: {
    fontSize: 12,
    color: 'rgba(11, 12, 16, 0.36)',
    fontFamily: 'Montserrat-Light',
  },
  btnboldText: {
    fontSize: 16,
    color: '#0B0C10',
    fontFamily: 'Montserrat-Regular',
  },
  downMenu: {
    // width: '60%',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 5,
    height: 28,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 11,
  },
  btnnormalText: {
    fontSize: 14,
    color: '#0B0C10',
    fontFamily: 'Montserrat-Medium',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 11,
  },
  cyrcle: {
    width: 15,
    height: 15,
    borderRadius: 150,
    backgroundColor: '#58C7DFE0',
  },
  cyrcleText: {
    fontSize: 14,
    color: '#0B0C10',
    fontFamily: 'Montserrat-Medium',
    marginLeft: 5,
  },
  imgstyle: {
    width: '100%',
    height: 209,
    resizeMode: 'contain',
    marginTop: 12,
    borderRadius: 10,
    borderColor: '#0B0C10',
    borderWidth: 1,
  },
  productName: {
    fontSize: 20,
    color: '#0B0C10',
    fontFamily: 'Montserrat-Medium',
  },
  articul: {
    color: '#82868D',
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    marginLeft: 30,
  },
  size: {
    fontSize: 17,
    fontFamily: 'Montserrat-Regular',
    color: '#202833CF',
    opacity: 0.8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#0B0C10',
    height: 30,
    width: 86,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingHorizontal: 26,
    marginLeft: 15,
    flexDirection: 'row',
  },
  bigInput: {
    borderWidth: 1,
    borderColor: '#0B0C10',
    width: '100%',
    height: 108,
    marginTop: 10,
    borderRadius: 7,
    paddingVertical: 0,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
});
