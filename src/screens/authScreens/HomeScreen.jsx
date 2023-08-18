import React, {useCallback, useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import {Wrapper} from '../../components/Wrapper';
import {DarkHeader} from '../../components/ui/DarkHeader';
import {Slider} from '../../components/slider/Slider';
import {Boxes} from '../../components/renderedBoxes/Boxes';
import {THEMES} from '../../components/theme';
import {SearchInput} from '../../components/inputs/searchInput';
import {Navbar} from '../../components/Navbar';
import {MediumText} from '../../components/ui/texts/MediumText';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import {SemiBoldText} from '../../components/ui/texts/SemiBoldText';
import {LightText} from '../../components/ui/texts/LightText';
import {CloseCircle} from '../../components/includeSvg';

const data = [
  {
    image:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    aspectRatio: 100 / 80,
  },
  {
    image:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    aspectRatio: 100 / 80,
  },
  {
    image:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    aspectRatio: 100 / 80,
  },
  {
    image:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    aspectRatio: 100 / 80,
  },
  {
    image:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    aspectRatio: 100 / 80,
  },
  {
    image:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    aspectRatio: 100 / 80,
  },
  {
    image:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    aspectRatio: 100 / 80,
  },
  {
    image:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    aspectRatio: 100 / 80,
  },
  {
    image:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    aspectRatio: 100 / 80,
  },
  {
    image:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    aspectRatio: 100 / 80,
  },
  {
    image:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    aspectRatio: 100 / 80,
  },
  {
    image:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    aspectRatio: 100 / 80,
  },
];

const bottomSheetHeight = Dimensions.get('window').height;

export const HomeScreen = ({navigation}) => {
  const [headerHeight, setHeaderHeight] = useState(null);
  const bottomSheetModalRef = useRef(null);
  const [bottomSheetVisible, setBottomSheetVisible] = React.useState(false);
  // variables
  const snapPoints = ['50%'];
  const openBottomSheet = () => {
    setBottomSheetVisible(true);
  };

  // Close the bottom sheet
  const closeBottomSheet = () => {
    setBottomSheetVisible(false);
  };

  // callbacks
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
    openBottomSheet();
  }, []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current.present();
  }, []);

  const handleIndicator = () => {
    return (
      <View
        style={{
          height: 45,
          justifyContent: 'center',
          alignItems: 'flex-end',
          paddingHorizontal: THEMES.PADDING_HORIZONTAL_20,
        }}>
        <CloseCircle
          onPress={() => {
            bottomSheetModalRef.current?.dismiss();
          }}
        />
      </View>
    );
  };

  return (
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
        <Slider onPress={openBottomSheet} />
        <View style={styles.renderedParent}>
          {data.map((item, index) => {
            return (
              <Boxes
                onPress={() => navigation.navigate('CatalogScreen')}
                key={index}
                image={item.image}
                aspectRatio={item.aspectRatio}
              />
            );
          })}
        </View>
      </ScrollView>
      {/* <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          // snapPoints={snapPoints}
          backgroundStyle={{
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
          }}
          // handleComponent={handleIndicator}
          // onChange={handleSheetChanges}
          // visible={true}
          // onClose={closeBottomSheet}
          visible={bottomSheetVisible}
          onClose={closeBottomSheet}                                                                                                                                                
          snapPoints={['30%', '50%', '80%']} // Set appropriate snap points
          index={1} // Set the initial snap point index                                                                                        
          enablePanDownToClose={true}> 
          <View style={styles.bottomSheetContainer}>
            <ScrollView>
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
            </ScrollView>
          </View>
        </BottomSheetModal>
      </BottomSheetModalProvider> */}
      {bottomSheetVisible ? (
        <View style={styles.bottomSheett}>
          <View style={styles.backWhite}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                // paddingRight: 20,
              }}>
              <TouchableOpacity>
                <CloseCircle
                  onPress={() => {
                    closeBottomSheet();
                  }}
                />
              </TouchableOpacity>
            </View>
            <ScrollView style={{width: '100%'}}>
              <View>
                <Image
                  source={require('../../../assets/images/Rectangle1195.png')}
                  style={{
                    width: '100%',
                    height: 302,
                    borderRadius: 25,
                    position: 'relative',
                  }}
                />
                <TouchableOpacity
                  style={{position: 'absolute', bottom: 10, right: 10}}>
                  <Image
                    style={{width: 35, height: 35}}
                    source={require('../../../assets/images/arrow-right.png')}
                  />
                </TouchableOpacity>
              </View>

              <SemiBoldText style={styles.bottomSheetTitle}>
                Коллекции
              </SemiBoldText>
              <LightText style={styles.bottomSheetText}>
                При создании генератора мы использовали небезизвестный
                универсальный код речей. Текст генерируется...
              </LightText>
            </ScrollView>
          </View>
        </View>
      ) : (
        ''
      )}
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
    paddingBottom: 40,
  },
  search: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  contentContainer: {
    flex: 1,
  },
  pageTitle: {
    color: THEMES.LIGHT,
    fontSize: 20,
    textAlign: 'center',
    marginTop: 15,
  },
  bottomSheetContainer: {
    flex: 1,
    paddingHorizontal: THEMES.PADDING_HORIZONTAL_20,
    height: 200,
  },
  bottomSheetTitle: {
    marginTop: 30,
    color: THEMES.DARK,
    fontSize: 20,
  },
  bottomSheetText: {
    marginTop: 25,
    color: THEMES.DARK,
    fontSize: 20,
  },
  bottomSheett: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'flex-end',
  },
  backWhite: {
    height: 490,
    width: '100%',
    backgroundColor: 'white',
    paddingTop: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    zIndex: 1,
    paddingBottom: 20,
    paddingHorizontal: 23,
  },
});
