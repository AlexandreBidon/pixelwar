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



import DrawingPanel from './drawing_panel/DrawingPanel';

import ColorSelector from './color_selection/ColorSelector';

import DrawHeader from './header/Header';

const App: () => Node = () => {

  const [selectedColor, setSelectedColor] = useState('red');

  const [counter, setCounter] = React.useState(5);

  var matrix = []
  for (var i = 0; i < 57; i++) {
    var row = []
    for (var j = 0; j < 37; j++) {
      row.push("#ffffff");
    }
    matrix.push(row)
  }

  const [color_matrix, setColorMatrix] = React.useState(matrix);

  const update_matrix = (x, y, color) => {
    color_matrix[y][x] = color
  }

  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  React.useEffect(() => {
    const ws = new WebSocket('ws://51.91.209.204:8000/ws')
    ws.onopen = () => {
      ws.onmessage = (e) => {
        var message = JSON.parse(e.data)
        console.log("Set matrix")
        setColorMatrix(message)
      }
      console.log("Websocket open")
    };

    ws.onclose = (e) => {
      console.log("Websocket disconnected")
    };

    ws.onmessage = (e) => {
      console.log("Received message")
      var message = JSON.parse(e.data)
      var matrix = color_matrix
      matrix[message["y"]][message["x"]] = message["color"]
      setColorMatrix(matrix)
      console.log(e.data)
    };
  }, [])

  return (
    <View
      style={{
        flex: 1,
        overflow: 'hidden',
      }}>
      <DrawHeader selectedColor={selectedColor} time={counter} />

      <DrawingPanel
        length={37}
        height={57}
        selectedColor={selectedColor}
        time={counter}
        resettime={setCounter}
        color_matrix={color_matrix}
        update_matrix={update_matrix}
        web_socket={ws} />

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

export default App;
