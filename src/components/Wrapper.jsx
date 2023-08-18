import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {THEMES} from './theme';

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, {backgroundColor: backgroundColor}]}>
    {console.log(backgroundColor)}
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
);

export const Wrapper = ({children, barStyle, backgroundColor, style}) => {
  return (
    <View style={styles.wrapper}>
      <MyStatusBar
        barStyle={barStyle}
        animated={false}
        hidden={false}
        backgroundColor={backgroundColor}
      />
      <View style={{...styles.container, ...style}}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'relative',
  },
  container: {
    flex: 1,
    paddingHorizontal: THEMES.PADDING_HORIZONTAL,
    backgroundColor: THEMES.BACKGROUND,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor: '#79B45D',
    height: APPBAR_HEIGHT,
  },
});
