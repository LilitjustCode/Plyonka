import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  ScrollView,
  Text,
} from 'react-native';
import {Wrapper} from '../../components/Wrapper';
import {THEMES} from '../../components/theme';
import {AngleLeftBlack} from '../../components/includeSvg';
import {MediumText} from '../../components/ui/texts/MediumText';
import {useNavigation} from '@react-navigation/native';
import {RegularText} from '../../components/ui/texts/RegularText';
import {DarkButton} from '../../components/ui/buttons/DarkButton';
import ProductSlider from './ProductSlider';
import {Item} from '../../components/renderedBoxes/Item';
import {CloseCircle} from '../../components/includeSvg';
import {DescriptionBlock} from '../../components/renderedBoxes/DescriptionBlock';

const images = [
  {id: '1', source: require('../../../assets/images/picplyonka.png')},
  {id: '2', source: require('../../../assets/images/picplyonka.png')},
  {id: '3', source: require('../../../assets/images/picplyonka.png')},
  // Add more images here
];

export const ProductSingleScreen = ({}) => {
  const navigation = useNavigation();
  const [pageStyle, setPageStyle] = useState(1);
  const [bottomSheetVisible, setBottomSheetVisible] = React.useState(false);

  const openBottomSheet = () => {
    setBottomSheetVisible(true);
  };

  const closeBottomSheet = () => {
    setBottomSheetVisible(false);
  };

  return (
    <Wrapper
      style={styles.wrapper}
      barStyle="dark-content"
      backgroundColor={THEMES.BACKGROUND}>
      <View style={styles.navbar}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            navigation.goBack();
          }}>
          <AngleLeftBlack />
          <MediumText style={styles.backText}>Назад</MediumText>
        </TouchableOpacity>
        <View style={styles.ARCameraParent}>
          <RegularText style={{fontSize: 10, marginRight: 5}}>
            Посмотреть через
          </RegularText>
          <TouchableOpacity style={styles.darkButton}>
            <Text style={styles.cameraText}>Камера AR</Text>
            <TouchableOpacity>
              <Image
                style={{width: 21, height: 15, marginLeft: 10}}
                source={require('../../../assets/images/whitecameraas.png')}
              />
            </TouchableOpacity>
          </TouchableOpacity>
          {/* <DarkButton
            style={styles.ARCamera}
            textStyle={{
              fontSize: 17,
              with: 200,
              fontFamily: 'Montserrat-Light',
            }}>
            Камера AR
            <TouchableOpacity>
              <Image
                style={{width: 21, height: 15, marginLeft: 10}}
                source={require('../../../assets/images/whitecameraas.png')}
              />
            </TouchableOpacity>
          </DarkButton> */}
        </View>
      </View>
      <ScrollView style={{marginBottom: 20, paddingHorizontal: 20}}>
        <ProductSlider
          navigation={navigation}
          onPress={() => openBottomSheet()}
        />
        <View style={{marginTop: 20}}>
          <Text style={styles.headerText}>Похожие товары</Text>
          <ScrollView style={{paddingRight: 50}} horizontal>
            {new Array(10).fill(null).map((_, i) => (
              <Item
                key={i}
                pageStyle={pageStyle}
                // onPress={() => navigation.navigate('ProductSingleScreen')}
              />
            ))}
          </ScrollView>
        </View>
        <View>
          <Text style={styles.headerText}>Похожие товары</Text>
          <ScrollView horizontal>
            {new Array(10).fill(null).map((_, i) => (
              <Item
                key={i}
                pageStyle={pageStyle}
                // onPress={() => navigation.navigate('ProductSingleScreen')}
              />
            ))}
          </ScrollView>
        </View>
        <View>
          <Text style={styles.headerText}>Похожие товары</Text>
          <ScrollView horizontal>
            {new Array(10).fill(null).map((_, i) => (
              <Item key={i} pageStyle={pageStyle} />
            ))}
          </ScrollView>
        </View>
        <View>
          <Text style={styles.headerText}>Похожие товары</Text>
          <ScrollView horizontal>
            {new Array(10).fill(null).map((_, i) => (
              <Item key={i} pageStyle={pageStyle} />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
      {bottomSheetVisible ? (
        <View style={styles.bottomSheett}>
          <View style={styles.backWhite}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                // paddingRight: 20,
              }}>
              <TouchableOpacity style={{paddingHorizontal: 20}}>
                <CloseCircle
                  onPress={() => {
                    closeBottomSheet();
                  }}
                />
              </TouchableOpacity>
            </View>
            <ScrollView>
              <DescriptionBlock navigation={navigation} />
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
    flex: 1,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  backButton: {
    flexDirection: 'row',
    columnGap: 2,
    alignItems: 'center',
  },
  backText: {
    color: THEMES.DARK,
    fontSize: 17,
  },
  ARCameraParent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  ARCamera: {
    width: '50%',
  },
  carouselItem: {
    width: '100%',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  paginationContainer: {
    paddingVertical: 8,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
  },
  paginationInactiveDot: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  headerText: {
    marginTop: 14,
    fontSize: 17,
    color: 'rgba(32, 40, 51, 0.50)',
    fontFamily: 'Montserrat-Regular',
    marginLeft: 10,
  },
  cameraText: {
    // marginRight: 16,
    fontSize: 15,
    columnGap: 10,
    color: 'white',
    fontFamily: 'Montserrat-Regular',
  },
  darkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 138,
    borderRadius: 5,
    height: 28,
    backgroundColor: '#0B0C10',
  },
  bottomSheett: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'flex-end',
  },
  backWhite: {
    height: 620,
    width: '100%',
    backgroundColor: 'white',
    paddingTop: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    zIndex: 1,
    paddingBottom: 20,
  },
});
