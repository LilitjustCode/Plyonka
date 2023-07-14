import {SafeAreaView, StyleSheet, View} from 'react-native';
import {THEMES} from './theme';

export const Wrapper = props => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={{...styles.container, ...props.style}}>
        {props.children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: THEMES.BACKGROUND,
  },
  container: {
    flex: 1,
    paddingHorizontal: THEMES.PADDING_HORIZONTAL,
  },
});
