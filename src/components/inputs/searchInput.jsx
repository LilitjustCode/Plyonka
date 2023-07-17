import React from 'react';
import {StyleSheet, TextInput, View, TouchableOpacity} from 'react-native';
import {THEMES} from '../theme';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {MiFilter} from '../includeSvg';

export const SearchInput = ({
  placeholder,
  placeholderColor,
  style,
  keyboardType = 'default',
  onFocus,
  onPress,
}) => {
  return (
    <View style={{...styles.parent, ...style}}>
      <TouchableOpacity style={styles.search} onPress={onPress}>
        <Fontisto name="search" size={22} color={THEMES.LIGHT} />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
        keyboardType={keyboardType}
        onFocus={onFocus}
      />
      <TouchableOpacity style={styles.filter} onPress={onPress}>
        <MiFilter />
      </TouchableOpacity>
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
    overflow: 'hidden',
  },
  input: {
    flex: 1,
    height: '100%',
    color: THEMES.DARK,
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
  },
});
