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

const ws = new WebSocket('ws://51.91.209.204:8000/ws')

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
    let clone_matrix = [...color_matrix]
    let clone_row = [...clone_matrix[y]]
    clone_row[x] = color
    clone_matrix[y] = clone_row
    setColorMatrix(clone_matrix)
    console.log(color_matrix)
  }

  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);



  React.useEffect(() => {

    ws.onopen = () => {

      ws.onmessage = (e) => {
        var message = JSON.parse(e.data)
        console.log("Received message")
        console.log(message)
        if (message.type == "init") {
          var message_content = JSON.parse(message.message)
          setColorMatrix(message_content)
        }
        if (message.type == "update") {
          console.log("received update!")
          var message_content = JSON.parse(message.message)
          console.log(color_matrix)
          update_matrix(message_content["x"], message_content["y"], message_content["color"])

        }
        //ws.send('{ "x": 5, "y": 5, "color": "#ffffff" }')
      }
      console.log("Websocket open")
    };

    ws.onclose = (e) => {
      console.log("Websocket disconnected")
    };



  }, [])


  React.useEffect(() => { }, [color_matrix])

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
        web_socket={ws}
      />

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
