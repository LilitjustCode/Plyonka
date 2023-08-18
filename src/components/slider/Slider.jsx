import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import {SemiBoldText} from '../ui/texts/SemiBoldText';
import {LightText} from '../ui/texts/LightText';

const {width, height} = Dimensions.get('window');
const itemWidth = (width / 5) * 4;
const itemHeight = (height / 8) * 2;
const padding = (width - itemWidth) / 2;
const offset = itemWidth;

const data = ['violet', 'indigo', 'blue', 'orange'];

export const Slider = ({onPress}) => {
  const [activeIndex, setActiveIndex] = useState({current: 0, previous: null});
  const scale = useRef(new Animated.Value(0)).current;
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animate();
  }, []);

  useEffect(() => {
    animate();
  }, [activeIndex]);

  const animate = () => {
    scale.setValue(0);
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
      speed: 1,
      bounciness: 1000,
    }).start();
  };

  const onScroll = e => {
    const x = e.nativeEvent.contentOffset.x;
    let newIndex = Math.floor(x / itemWidth + 0.5);
    if (activeIndex.current != newIndex) {
      setActiveIndex({current: newIndex, previous: activeIndex.current});
    }
  };
  return (
    <View style={styles.container}>
      {/* {data.map((x, i) => (
        <Animated.View
          key={x}
          style={[
            styles.bgColor,
            {
              zIndex:
                i == activeIndex.current
                  ? 0
                  : i == activeIndex.previous
                  ? -1
                  : -2,
              backgroundColor: x,
              transform: [{scale: i == activeIndex.current ? scale : 1}],
            },
          ]}
        />
      ))} */}
      {/* <View style={styles.container} /> */}
      <ScrollView
        horizontal
        pagingEnabled
        decelerationRate="fast"
        style={{flexGrow: 0}}
        contentContainerStyle={styles.scrollView}
        showsHorizontalScrollIndicator={false}
        snapToInterval={offset}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
            listener: onScroll,
          },
        )}>
        {data.map((x, i) => (
          <Item key={x} data={x} i={i} scrollX={scrollX} onPress={onPress} />
        ))}
      </ScrollView>
      <View style={styles.indicatorContainer}>
        {data.map((x, i) => (
          <View
            key={x}
            style={[
              styles.indicator,
              i == activeIndex.current && {backgroundColor: '#fff'},
            ]}
          />
        ))}
      </View>
    </View>
  );
};

function Item({i, data, scrollX, onPress}) {
  const scale = scrollX.interpolate({
    inputRange: [-offset + i * offset, i * offset, offset + i * offset],
    outputRange: [0.9, 1, 0.9],
  });
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <Animated.View style={[styles.item, {transform: [{scale}]}]}>
        <Image
          // resizeMode="contain"
          onPress={onPress}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 25,
            position: 'relative',
          }}
          source={require('../../../assets/images/Rectangle1195.png')}
        />
        {/*  */}
        <View style={{position: 'absolute', top: 25, paddingHorizontal: 28}}>
          <SemiBoldText style={styles.bottomSheetTitle}>Коллекции</SemiBoldText>
          <LightText style={styles.bottomSheetText}>
            При создании генератора мы использовали небезизвестный универсальный
            код речей. Текст генерируется...
          </LightText>
          <View>
            <Image
              style={{
                width: 35,
                height: 35,
                position: 'absolute',
                bottom: -35,
                right: -20,
              }}
              source={require('../../../assets/images/arrow-right.png')}
            />
          </View>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 256,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    paddingHorizontal: padding,
    alignItems: 'center',
    paddingVertical: 10,
    zIndex: 1,
  },
  item: {
    height: itemHeight,
    width: itemWidth,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 25,
  },
  bgColor: {
    position: 'absolute',
    height: (height * 3) / 2,
    width: (height * 3) / 2,
    borderRadius: height,
  },
  indicatorContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: 3,
    backgroundColor: '#444',
  },
  bottomSheetTitle: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'Montserrat-Medium',
  },
  bottomSheetText: {
    fontFamily: 'Montserrat-Light',
    color: '#FFF',
    fontSize: 15,
    marginTop: 25,
  },
});
