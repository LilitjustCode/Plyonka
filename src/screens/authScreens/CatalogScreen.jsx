import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Wrapper} from '../../components/Wrapper';
import {DarkHeader} from '../../components/ui/DarkHeader';
import {THEMES} from '../../components/theme';
import {SearchInput} from '../../components/inputs/searchInput';
import {Navbar} from '../../components/Navbar';
import {MediumText} from '../../components/ui/texts/MediumText';
import {LightText} from '../../components/ui/texts/LightText';
import {ProductItems} from '../../components/renderedBoxes/ProductItems';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

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
        <Navbar />
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
            style={{height: '70%', width: 0.5, backgroundColor: THEMES.DARK}}
          />
          <LightText style={styles.textChangeTab}>Вид страницы</LightText>
          <View style={styles.changeTabRightSideParent}>
            <Feather
              name="grid"
              size={24}
              color={pageStyle == 0 ? 'black' : 'grey'}
              onPress={() => setPageStyle(0)}
            />
            <MaterialCommunityIcons
              name="format-list-bulleted"
              size={24}
              color={pageStyle == 1 ? 'black' : 'grey'}
              onPress={() => setPageStyle(1)}
            />
          </View>
        </View>
        <View style={styles.scrollContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.renderedItems}>
              {new Array(10).fill(null).map((_, i) => (
                <ProductItems key={i} pageStyle={pageStyle} />
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
    paddingHorizontal: 20,
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
    fontSize: 13,
  },
  changeTabRightSideParent: {
    flexDirection: 'row',
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
