import React, {useCallback, useMemo, useRef, useState} from 'react';
import {View, StyleSheet, ScrollView, Dimensions, Image} from 'react-native';
import {Wrapper} from '../../components/Wrapper';
import {DarkHeader} from '../../components/ui/DarkHeader';
import {Slider} from '../../components/slider/Slider';
import {Boxes} from '../../components/renderedBoxes/Boxes';
import {THEMES} from '../../components/theme';
import {SearchInput} from '../../components/inputs/searchInput';
import {Navbar} from '../../components/Navbar';
import {MediumText} from '../../components/ui/texts/MediumText';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {LightText} from '../../components/ui/texts/LightText';

const data = [
  {
    image:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    aspectRatio: 100 / 40,
  },
  {
    image:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    aspectRatio: 200 / 100,
  },
  {
    image:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    aspectRatio: 50 / 40,
  },
  {
    image:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    aspectRatio: 30 / 20,
  },
  {
    image:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    aspectRatio: 20 / 25,
  },
  {
    image:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    aspectRatio: 1,
  },
  {
    image:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    aspectRatio: 100 / 115,
  },
  {
    image:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    aspectRatio: 3 / 2,
  },
  {
    image:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    aspectRatio: 100 / 80,
  },
  {
    image:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    aspectRatio: 100 / 120,
  },
  {
    image:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    aspectRatio: 50 / 80,
  },
];

export const CatalogScreen = () => {
  return (
    <Wrapper
      style={styles.wrapper}
      barStyle="light-content"
      backgroundColor={THEMES.DARK}>
      <DarkHeader
        onLayout={e => {
          const {height} = e.nativeEvent.layout;
          console.log(height);
        }}>
        <Navbar />
        <SearchInput
          placeholder={'Поиск'}
          placeholderColor={THEMES.LIGHT}
          keyboardType="web-search"
          style={styles.search}
        />
        <MediumText style={styles.pageTitle}>Каталог товаров</MediumText>
      </DarkHeader>

      <ScrollView>
        <View style={styles.renderedParent}>
          <View style={styles.changeStylePageParent}>
            <LightText style={styles.textChangeTab}>
              Пленки для окутывания
            </LightText>
            <View
              style={{height: '75%', width: 0.5, backgroundColor: THEMES.DARK}}
            />
            <View style={styles.changeTabRightSideParent}>
              <LightText style={styles.textChangeTab}>Вид страницы</LightText>
            </View>
          </View>
        </View>
      </ScrollView>
    </Wrapper>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 0,
  },
  renderedParent: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
    columnGap: 10,
    paddingBottom: 40,
  },
  search: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  pageTitle: {
    color: THEMES.LIGHT,
    fontSize: 20,
    textAlign: 'center',
    marginTop: 15,
  },
  changeStylePageParent: {
    width: '100%',
    height: 40,
    backgroundColor: THEMES.LIGHT,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 13,
  },
  textChangeTab: {
    fontSize: 15,
  },
  changeTabRightSideParent: {
    flexDirection: 'row',
  },
});
