import {
  Image,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {ImageSlider} from 'react-native-image-slider-banner';
import {DownloadIcon} from '../../components/includeSvg';
import {HeartDark} from '../../components/includeSvg';
import {DarkButton} from '../../components/ui/buttons/DarkButton';

export default function App({navigation, onPress}) {
  return (
    <View style={styles.container}>
      <ImageSlider
        preview={true}
        children
        data={[
          {img: 'https://ana.press/files/en/news/2023/6/19/24773_142.jpg'},
          {
            img: 'https://ana.press/files/en/news/2023/6/19/24773_142.jpg',
          },
          {img: 'https://ana.press/files/en/news/2023/6/19/24773_142.jpg'},
        ]}
        autoPlay={false}
        onItemChanged={item => console.log('def')}
        closeIconColor="#fff"
        showIndicator={false}
        caroselImageStyle={{resizeMode: 'cover', height: 310}}
      />
      <View style={styles.picsBlock}></View>
      <View style={styles.main}>
        <View style={styles.hr}></View>
      </View>
      <View style={styles.headerBlock}>
        <Text style={styles.headerText}>Пленка 202 AMGa</Text>
        <View style={styles.iconsBlock}>
          <TouchableOpacity style={{marginRight: 6}}>
            <HeartDark />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{width: 22, height: 22}}
              source={require('../../../assets/images/download.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.articul}>Артикул</Text>
      <View style={styles.sizeBlock}>
        <Text style={[styles.sizeText, {fontFamily: 'Montserrat-Medium'}]}>
          Размер
        </Text>
        <Text style={[styles.sizeText, {color: 'rgba(32, 40, 51, 0.56)'}]}>
          20 м
        </Text>
        <Text style={[styles.sizeText, {fontFamily: 'Montserrat-Medium'}]}>
          Размер
        </Text>
        <Text style={[styles.sizeText, {color: 'rgba(32, 40, 51, 0.56)'}]}>
          20 м
        </Text>
      </View>
      <View style={styles.sizeBlock}>
        <Text style={[styles.sizeText, {fontFamily: 'Montserrat-Medium'}]}>
          Размер
        </Text>
        <Text style={[styles.sizeText, {color: 'rgba(32, 40, 51, 0.56)'}]}>
          20 м
        </Text>
        <Text style={[styles.sizeText, {fontFamily: 'Montserrat-Medium'}]}>
          Размер
        </Text>
        <Text style={[styles.sizeText, {color: 'rgba(32, 40, 51, 0.56)'}]}>
          20 м
        </Text>
      </View>
      <View style={{width: 233, alignSelf: 'center', marginTop: 15}}>
        <DarkButton
          onPress={onPress}
          style={{
            height: 28,
          }}
          textStyle={{
            fontSize: 12,
          }}>
          Написать менеджеру
        </DarkButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 600,
    backgroundColor: '#FFF',
    borderBottomRightRadius: 20,
    marginTop: 11,
    paddingHorizontal: 16,
    paddingVertical: 18,
  },
  imageSlider: {
    width: '100%',
    height: 205,
  },
  hr: {
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(32, 40, 51, 0.32)',
    borderRadius: 10,
  },
  main: {
    marginTop: 25,
    paddingHorizontal: 15,
  },
  headerBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  headerText: {
    fontSize: 20,
    color: '#202833',
    fontFamily: 'Montserrat-Regular',
    marginTop: 24,
  },
  articul: {
    fontSize: 14,
    color: '#82868D',
    fontFamily: 'Montserrat-Regular',
    // marginTop: 24,
    paddingHorizontal: 10,
  },
  sizeBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 18,
    paddingHorizontal: 15,
  },
  sizeText: {
    fontSize: 12,
    color: '#202833',
    fontFamily: 'Montserrat-Regular',
  },
  picsBlock: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconsBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
});
