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
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SemiBoldText} from '../../components/ui/texts/SemiBoldText';
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

const bottomSheetHeight = Dimensions.get('window').height;

export const HomeScreen = () => {
  const [headerHeight, setHeaderHeight] = useState(null);
  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = [bottomSheetHeight - headerHeight - 50];

  // callbacks
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleIndicator = () => {
    return (
      <View
        style={{
          height: 45,
          justifyContent: 'center',
          alignItems: 'flex-end',
          paddingHorizontal: 20,
        }}>
        <AntDesign
          name="closecircleo"
          size={25}
          color={THEMES.DARK}
          onPress={() => {
            bottomSheetModalRef.current?.dismiss();
          }}
        />
      </View>
    );
  };

  return (
    <BottomSheetModalProvider>
      <Wrapper
        style={styles.wrapper}
        barStyle="light-content"
        backgroundColor={THEMES.DARK}>
        <DarkHeader
          onLayout={e => {
            const {height} = e.nativeEvent.layout;
            console.log(height);
            setHeaderHeight(height);
          }}>
          <Navbar />
          <SearchInput
            placeholder={'Поиск'}
            placeholderColor={THEMES.LIGHT}
            keyboardType="web-search"
            style={styles.search}
          />
          <MediumText style={styles.pageTitle}>Коллекции</MediumText>
        </DarkHeader>
        <ScrollView>
          <Slider onPress={handlePresentModalPress} />
          <View style={styles.renderedParent}>
            <View style={{rowGap: 10}}>
              {data
                .filter((_, i) => i % 2 === 0)
                .map((item, index) => (
                  <Boxes
                    key={index}
                    image={item.image}
                    aspectRatio={item.aspectRatio}
                  />
                ))}
            </View>
            <View style={{rowGap: 10}}>
              {data
                .filter((_, i) => i % 2 !== 0)
                .map((item, index) => (
                  <Boxes
                    key={index}
                    image={item.image}
                    aspectRatio={item.aspectRatio}
                  />
                ))}
            </View>
          </View>
        </ScrollView>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          snapPoints={snapPoints}
          // containerStyle={{
          //   backgroundColor: 'blue',
          // }}
          backgroundStyle={{
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
          }}
          handleComponent={handleIndicator}
          onChange={handleSheetChanges}>
          <View style={styles.bottomSheetContainer}>
            <Image
              source={require('../../../assets/images/Rectangle1195.png')}
              style={{width: '100%', height: 302, borderRadius: 25}}
            />
            <SemiBoldText style={styles.bottomSheetTitle}>
              Коллекции
            </SemiBoldText>
            <LightText style={styles.bottomSheetText}>
              При создании генератора мы использовали небезизвестный
              универсальный код речей. Текст генерируется...
            </LightText>
          </View>
        </BottomSheetModal>
      </Wrapper>
    </BottomSheetModalProvider>
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
  bottomSheetContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  bottomSheetTitle: {
    marginTop: 30,
    color: THEMES.DARK,
    fontSize: 20,
  },
  bottomSheetText: {
    marginTop: 40,
    color: THEMES.DARK,
    fontSize: 20,
  },
});
