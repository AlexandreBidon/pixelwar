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

import ColorSquare from "./ColorSquare";


export default function ColorSelector(props) {
    const { setSelectedColor } = props;




    return (
        <View
            style={{
                flexDirection: "column",
                justifyContent: "space-evenly",
                flex: 1
            }}>
            < View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    flex: 1
                }}>
                <ColorSquare Color="#ff3881" setColor={setSelectedColor} />
                <ColorSquare Color="#6a5cff" setColor={setSelectedColor} />
                <ColorSquare Color="#009eaa" setColor={setSelectedColor} />
                <ColorSquare Color="lightskyblue" setColor={setSelectedColor} />
                <ColorSquare Color="#7eed56" setColor={setSelectedColor} />
                <ColorSquare Color="#ffa800" setColor={setSelectedColor} />
                <ColorSquare Color="#ffffff" setColor={setSelectedColor} />
            </View >
            < View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    flex: 1
                }}>
                <ColorSquare Color="#b44ac0" setColor={setSelectedColor} />
                <ColorSquare Color="#2450a4" setColor={setSelectedColor} />
                <ColorSquare Color="#51e9f4" setColor={setSelectedColor} />
                <ColorSquare Color="yellow" setColor={setSelectedColor} />
                <ColorSquare Color="#00cc78" setColor={setSelectedColor} />
                <ColorSquare Color="#ff4500" setColor={setSelectedColor} />
                <ColorSquare Color="#898d90" setColor={setSelectedColor} />
            </View >
            < View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    flex: 1
                }}>
                <ColorSquare Color="#811e9f" setColor={setSelectedColor} />
                <ColorSquare Color="#493ac1" setColor={setSelectedColor} />
                <ColorSquare Color="#3690ea" setColor={setSelectedColor} />
                <ColorSquare Color="#00756f" setColor={setSelectedColor} />
                <ColorSquare Color="#00a368" setColor={setSelectedColor} />
                <ColorSquare Color="#be0039" setColor={setSelectedColor} />
                <ColorSquare Color="#000000" setColor={setSelectedColor} />
            </View >
        </View>
    );
}
