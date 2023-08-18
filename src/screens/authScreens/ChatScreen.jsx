import React, {useState, useRef, useCallback, useMemo} from 'react';
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
import {ChatHeader} from '../../components/renderedBoxes/ChatHeader';
import {MessageBlock} from '../../components/renderedBoxes/MessageBlock';
import {THEMES} from '../../components/theme';
import {CloseCircle} from '../../components/includeSvg';


export const ChatScreen = ({navigation}) => {
  const scrollViewRef = useRef();

  return (
    <SafeAreaView style={styles.chatScreenContainer}>
      <ChatHeader navigation={navigation} />
      <ScrollView ref={scrollViewRef} style={{paddingHorizontal: 16}}>
        <View style={{marginTop: 20, paddingBottom: 50}}>
          <View style={styles.secondMess}>
            <View style={styles.messageBlockMe}>
              <MessageBlock
                onPress={() => navigation.navigate('ProductSingleScreen')}
              />
            </View>
          </View>
          <View style={styles.firstMess}>
            <View style={styles.messageBlockComm}>
              <Text style={styles.messTextComm}>
                Lorem ipsum dolor sit amet
              </Text>
            </View>
          </View>
          <View style={styles.secondMess}>
            <View style={styles.messageBlockMe}>
              <Text style={styles.messTextComm}>Lorem</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TextInput
          style={styles.input}
          placeholder="Написать сообщение..."
          placeholderTextColor={'#8A8996'}
        />
        <View style={styles.icons}>
          <TouchableOpacity>
            <Image
              style={{width: 25, height: 25, marginRight: 13}}
              source={require('../../../assets/images/input.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{width: 25, height: 25}}
              source={require('../../../assets/images/add.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  chatScreenContainer: {
    width: '100%',
    backgroundColor: '#DFDFDF',
    position: 'relative',
    flex: 1,
  },
  footer: {
    height: 70,
    backgroundColor: 'white',
    borderTopColor: '#000000',
    borderTopWidth: 1,
    paddingLeft: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 11,
  },

  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageBlock: {
    paddingHorizontal: 16,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  firstMess: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 20,
    marginBottom: 15,
  },
  secondMess: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  messageBlockComm: {
    marginLeft: 5,
    backgroundColor: '#FFF',
    borderRadius: 16,
    borderTopLeftRadius: 4,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  messTextComm: {
    fontSize: 14,
    color: '#141413',
    fontWeight: '400',
    fontFamily: 'Montserrat-Regular',
  },
  messageBlockMe: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    paddingHorizontal: 24,
    paddingVertical: 12,
    marginTop: 5,
    borderTopRightRadius: 4,
  },
});
