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

export const ProfileBoxes = () => {
  const [open, setOpen] = useState(false);

  return open ? (
    <TouchableOpacity
      onPress={() => {
        setOpen(false);
      }}
      style={styles.blockOpen}>
      <TouchableOpacity style={styles.header}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{width: 29, height: 25}}
            source={require('../../../assets/images/premium.png')}
          />
          <Text style={styles.blockText}>Купить премиум</Text>
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
      </TouchableOpacity>
      <Text style={styles.desriptionText}>
        Excepteur sint occaecat cupidatat non proident, quis nostrum
        exercitationem ullam corporis suscipit laboriosam, qui dolorem eum
        fugiat, quo voluptas nulla pariatur?
      </Text>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Купить премиум</Text>
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
          source={require('../../../assets/images/premium.png')}
        />
        <Text style={styles.blockText}>Купить премиум</Text>
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
    color: '#FFFFFF',
    marginTop: 25,
    opacity: 0.7,
    fontFamily: 'Montserrat-Regular',
  },
  button: {
    marginTop: 59,
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
});
