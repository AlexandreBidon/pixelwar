/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  TouchableHighlight,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



import DrawingPanel from './DrawingPanel';

import ColorSelector from './ColorSelector';

const App: () => Node = () => {
  console.log("test1")
  const [selectedColor, setSelectedColor] = useState('red');
  return (
    <View
      style={{
        flex: 1,
        overflow: 'hidden',
      }}>
      <View style={{
        flexDirection: "row",
        backgroundColor: 'dimgrey',
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: "space-evenly",
        alignContent: 'center',
        alignItems: 'center',
      }}>
        <View style={{
          backgroundColor: selectedColor,
          height: 45,
          width: 45,
          borderRadius: 10
        }}></View>
        <Text style={{
          fontSize: 24,
          fontWeight: '600',
        }}>TIMER PLACEHOLDER</Text>
      </View>

      <DrawingPanel length={37} height={57} selectedColor={selectedColor} />

      <View style={{
        flex: 1,
        paddingTop: 10,
        paddingBottom: 5,
        backgroundColor: "dimgrey"
      }}>

        <ColorSelector setSelectedColor={setSelectedColor} />

      </View>
    </View >
  );
};


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
    backgroundColor: '#e7e7e7',
    paddingBottom: 1,
  },
  zoomWrapper: {
    flex: 1,
    overflow: 'hidden',
  },
  header: {
    flexDirection: "row",
    backgroundColor: 'dimgrey',
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: "flex-start",
    alignContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 40,
  }
});

export default App;