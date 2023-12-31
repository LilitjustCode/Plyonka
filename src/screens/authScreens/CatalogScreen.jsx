import React, {useState} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Wrapper} from '../../components/Wrapper';
import {DarkHeader} from '../../components/ui/DarkHeader';
import {THEMES} from '../../components/theme';
import {SearchInput} from '../../components/inputs/searchInput';
import {Navbar} from '../../components/Navbar';
import {MediumText} from '../../components/ui/texts/MediumText';
import {LightText} from '../../components/ui/texts/LightText';
import {ProductItems} from '../../components/renderedBoxes/ProductItems';
import {
  BiGrid,
  FormatListBulleted,
  GrayFormatListBulleted,
  BoldBiGrid,
} from '../../components/includeSvg';
import {useNavigation} from '@react-navigation/native';

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
  const navigation = useNavigation();
  const [pageStyle, setPageStyle] = useState(1);
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
        <Navbar backIcon={true} />
        <SearchInput
          placeholder={'Поиск'}
          placeholderColor={THEMES.LIGHT}
          keyboardType="web-search"
          style={styles.search}
        />
        <MediumText style={styles.pageTitle}>Каталог товаров</MediumText>
      </DarkHeader>

      <View style={styles.renderedParent}>
        <View style={styles.changeStylePageParent}>
          <LightText style={styles.textChangeTab}>
            Пленки для окутывания
          </LightText>
          <View
            style={{height: '70%', width: 0.5, backgroundColor: '#0B0C10'}}
          />
          <LightText style={styles.textChangeTab}>Вид страницы</LightText>
          <View style={styles.changeTabRightSideParent}>
            <TouchableOpacity
              style={[pageStyle == 0 && {marginRight: 4, marginTop: 4}]}
              onPress={() => setPageStyle(0)}>
              {pageStyle == 0 ? <BoldBiGrid /> : <BiGrid />}
            </TouchableOpacity>

            <TouchableOpacity
              // style={[pageStyle != 1 && {marginTop: 4}]}
              onPress={() => setPageStyle(1)}>
              {pageStyle == 1 ? (
                <FormatListBulleted />
              ) : (
                <GrayFormatListBulleted />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.scrollContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.renderedItems}>
              {new Array(10).fill(null).map((_, i) => (
                <ProductItems
                  key={i}
                  pageStyle={pageStyle}
                  onPress={() => navigation.navigate('ProductSingleScreen')}
                />
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
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
    paddingHorizontal: THEMES.PADDING_HORIZONTAL_20,
    marginTop: 20,
    columnGap: 10,

    flex: 1,
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
    marginBottom: 20,
  },
  textChangeTab: {
    fontSize: 12,
  },
  changeTabRightSideParent: {
    flexDirection: 'row',
    marginRight: 4,
  },
  renderedItems: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    rowGap: 10,
    justifyContent: 'space-between',
    flex: 1,
    paddingBottom: 45,
  },
  scrollContainer: {
    flex: 1,
    paddingBottom: 45,
  },
});
