import React from 'react';
import {StyleSheet, TextInput, View, TouchableOpacity} from 'react-native';
import {THEMES} from '../theme';
import {Eye, EyeOff} from '../includeSvg';

export const MainInput = ({
  placeholder,
  placeholderColor,
  secureTextEntry,
  style,
  password,
  changeSecurity,
  keyboardType = 'default',
  onFocus,
}) => {
  return (
    <View style={{...styles.parent, ...style}}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onFocus={onFocus}
      />
      {password && (
        <TouchableOpacity style={styles.eye} onPress={changeSecurity}>
          {secureTextEntry ? <EyeOff /> : <Eye />}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: THEMES.DARK,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    // width: '100%',
    flex: 1,

    height: 40,
    paddingLeft: 30,
    color: THEMES.DARK,
    fontFamily: 'Montserrat-Regular',
  },
  eye: {
    marginRight: 10,
  },
});
