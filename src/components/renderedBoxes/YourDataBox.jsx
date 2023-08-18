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

export const YourDataBoxes = () => {
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
            source={require('../../../assets/images/data.png')}
          />
          <Text style={styles.blockText}>Ваши данные</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setOpen(false);
          }}>
          <Image
            style={{width: 31, height: 26, transform: [{rotateX: '180deg'}]}}
            source={require('../../../assets/images/blackArrow.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 16}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity>
            <Text style={styles.change}>Изменить</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Ольга Рыбкина"
          placeholderTextColor={'#0B0C10'}
        />
      </View>
      <View style={{marginTop: 16}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity>
            <Text style={styles.change}>Изменить</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.input}
          placeholder="8-707-488-22-22"
          placeholderTextColor={'#0B0C10'}
        />
      </View>
      <View style={{marginTop: 16}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity>
            <Text style={styles.change}>Изменить</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Olga@maiI.ru"
          placeholderTextColor={'#0B0C10'}
        />
      </View>

      <View style={{alignItems: 'center'}}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Сохранить</Text>
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
          source={require('../../../assets/images/data.png')}
        />
        <Text style={styles.blockText}>Ваши данные</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          setOpen(true);
        }}>
        <Image
          style={{width: 31, height: 26}}
          source={require('../../../assets/images/blackArrow.png')}
        />
      </TouchableOpacity>
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
    paddingHorizontal: 49,
    paddingVertical: 7,
    backgroundColor: '#0B0C10',
  },
  buttonText: {
    fontSize: 17,
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
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
