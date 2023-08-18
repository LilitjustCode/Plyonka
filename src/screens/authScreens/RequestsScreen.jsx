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
import {DarkHeader} from '../../components/ui/DarkHeader';
import {AngleLeftWhite} from '../../components/includeSvg';
import {THEMES} from '../../components/theme';
import {MediumText} from '../../components/ui/texts/MediumText';
import {Search} from '../../components/includeSvg';
import {MiFilter} from '../../components/includeSvg';
import {RequestBoxes} from '../../components/renderedBoxes/RequestBoxes';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export const RequestsScreen = ({navigation}) => {
  const [headerHeight, setHeaderHeight] = useState(null);
  const [show, setShow] = useState(false);

  const animation = useSharedValue({height: 0});

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(animation.value.height, {
        duration: 200,
      }),
    };
  });

  return (
    <SafeAreaView style={styles.requestContainer}>
      <DarkHeader
        onLayout={e => {
          const {height} = e.nativeEvent.layout;
          console.log(height);
          setHeaderHeight(height);
        }}>
        <View style={styles.navbar}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
              navigation.goBack();
            }}>
            <AngleLeftWhite />
            <MediumText style={styles.backText}>Назад</MediumText>
          </TouchableOpacity>
          <View style={styles.searchInput}>
            <Search />
            <TextInput
              style={styles.input}
              placeholder="Поиск по чатам"
              placeholderTextColor={'white'}
            />
          </View>
        </View>
      </DarkHeader>
      <View style={styles.requestBlock}>
        <MediumText style={styles.requestText}>Запросы</MediumText>
        <TouchableOpacity
          onPress={() => {
            setShow(!show);
            if (animation.value.height > 0) {
              animation.value = {height: 0};
            } else {
              animation.value = {height: 300};
            }
          }}>
          <MiFilter />
        </TouchableOpacity>
        {show && (
          <Animated.View style={[styles.dropDown, animatedStyle]}>
            <ScrollView>
              {new Array(10).fill(null).map((x, i) => (
                <TouchableOpacity key={i} style={styles.filterItems}>
                  <MediumText style={styles.fadingText}>
                    Заяка подтверждена
                  </MediumText>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </Animated.View>
        )}
      </View>
      <ScrollView style={{paddingHorizontal: 16, width: '100%'}}>
        <View style={{marginBottom: 40}}>
          <RequestBoxes navigation={navigation} />
          <RequestBoxes navigation={navigation} />
          <RequestBoxes navigation={navigation} />
          <RequestBoxes navigation={navigation} />
          <RequestBoxes navigation={navigation} />
          <RequestBoxes navigation={navigation} />
        </View>
      </ScrollView>
      <View style={{height: 20}}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  requestContainer: {
    width: '100%',
    backgroundColor: '#DFDFDF',
    flex: 1,
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 25,
  },
  backText: {
    color: THEMES.LIGHT,
    fontSize: 17,
  },
  backButton: {
    flexDirection: 'row',
    columnGap: 5,
    alignItems: 'center',
  },
  searchInput: {
    width: '70%',
    height: 40,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 8,
  },
  input: {
    marginLeft: 5,
    color: 'white',
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    width: '100%',
  },
  requestBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 25,
    position: 'relative',
  },
  requestText: {
    fontSize: 18,
    color: '#0B0C10',
    fontFamily: 'Montserrat-Medium',
    marginLeft: 14,
  },
  dropDown: {
    backgroundColor: THEMES.LIGHT,
    position: 'absolute',
    right: 20,
    width: 200,
    top: 25,
    zIndex: 10,
  },
  filterItems: {
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
});
