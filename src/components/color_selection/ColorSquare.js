import React, { useState } from "react";
// import "./../styles/pixel.scss";

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    TouchableHighlight,
    Text,
    useColorScheme,
    View,
} from 'react-native';



export default function Pixel(props) {
    const { setColor, Color } = props;

    return (
        < TouchableHighlight
            onPress={() => setColor(Color)}
            style={{
                width: 35,
                height: 35,
                borderRadius: 15,
            }} >
            <View
                style={{
                    width: 35,
                    height: 35,
                    backgroundColor: Color,
                    borderRadius: 15,
                }} >
            </View>
        </TouchableHighlight >
    );
}
