import React from "react";
// import "./../styles/row.scss";
import Pixel from "./pixel";

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

export default function Row(props) {
    const { y_id, selectedColor, length } = props;
    let pixels = [];

    for (let i = 0; i < length; i++) {
        pixels.push(<Pixel key={i} x_id={i} y_id={y_id} selectedColor={selectedColor} />);
    }

    return (
        <View
            style={{
                flexDirection: "row",
                height: 10,
                justifyContent: "center",
                padding: 0
            }}
        >
            {pixels}
        </View>
    )
}