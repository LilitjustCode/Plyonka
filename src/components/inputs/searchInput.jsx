import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {THEMES} from '../theme';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {MiFilter} from '../includeSvg';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {MediumText} from '../ui/texts/MediumText';

export const SearchInput = ({
  placeholder,
  placeholderColor,
  style,
  keyboardType = 'default',
  onFocus,
  onPress,
}) => {
  const animation = useSharedValue({height: 0});

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(animation.value.height, {
        duration: 200,
      }),
    };
  });

  return (
    <View style={{...styles.parent, ...style}}>
      <TouchableOpacity style={styles.search} onPress={() => {}}>
        <Fontisto name="search" size={22} color={THEMES.LIGHT} />
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
        keyboardType={keyboardType}
        onFocus={onFocus}
      />

      <TouchableOpacity
        style={styles.filter}
        onPress={() => {
          if (animation.value.height > 0) {
            animation.value = {height: 0};
          } else {
            animation.value = {height: 300};
          }
        }}>
        <MiFilter />
      </TouchableOpacity>
      <Animated.View style={[styles.dropDown, animatedStyle]}>
        <MediumText style={styles.fadingText}>Fading View!</MediumText>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: THEMES.LIGHT,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // overflow: 'hidden',
    position: 'relative',
    zIndex: 10,
  },
  input: {
    flex: 1,
    height: '100%',
    color: THEMES.LIGHT,
    fontFamily: 'Montserrat-Medium',
  },
  search: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filter: {
    backgroundColor: THEMES.LIGHT,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  dropDown: {
    backgroundColor: THEMES.LIGHT,
    position: 'absolute',
    right: 0,
    width: 200,
    top: 40,
    zIndex: 10,
  },
});
