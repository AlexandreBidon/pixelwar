import React from "react";
// import "./../styles/row.scss";
import Pixel from "../drawing_panel/pixel";

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
    const { y_id, selectedColor, length, time, resettime, color_row, update_matrix } = props;
    let pixels = [];

    for (let i = 0; i < length; i++) {
        pixels.push(
            <Pixel
                key={i}
                x_id={i}
                y_id={y_id}
                selectedColor={selectedColor}
                time={time}
                resettime={resettime}
                color_test={color_row[i]}
                update_matrix={update_matrix} />);
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
