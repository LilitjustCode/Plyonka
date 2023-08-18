import React, {useState, useRef} from 'react';
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
import {IonArrowUp} from '../includeSvg';

export const RequestBoxes = ({navigation}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.txtBlock}>
        <View>
          <Text style={styles.mediumText}>Имя пользователя</Text>
          <Text style={styles.boldText}>Ольга Рыбкина</Text>
        </View>
        <View style={{marginTop: 12}}>
          <Text style={styles.mediumText}>Название/Артикул</Text>
          <Text style={styles.normalText}>Пленка 0569543Y</Text>
        </View>
        <View style={{marginTop: 12}}>
          <Text style={styles.mediumText}>Объем</Text>
          <Text style={styles.normalText}>Объем: 20м</Text>
        </View>
      </View>
      <View>
        <View>
          <Text style={styles.mediumText}>Статус заявки:</Text>
          <View style={styles.onlineBlock}>
            <View style={styles.cyrcle}></View>
            <Text style={[styles.normalText, {marginLeft: 5}]}>
              Заяка подтверждена
            </Text>
          </View>
        </View>
        <View style={{height: 50}}></View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('ChatScreen')}>
            <IonArrowUp />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 13,
    backgroundColor: '#FFFEFE',
    marginTop: 13,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mediumText: {
    fontSize: 10,
    color: '#0B0C10',
    fontFamily: 'Montserrat-Light',
  },
  boldText: {
    fontSize: 15,
    color: '#0B0C10',
    fontFamily: 'Montserrat-Medium',
  },
  normalText: {
    fontSize: 12,
    color: '#0B0C10',
    fontFamily: 'Montserrat-Regular',
  },
  onlineBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cyrcle: {
    width: 15,
    height: 15,
    backgroundColor: '#58C7DF',
    borderRadius: 100,
  },
});
