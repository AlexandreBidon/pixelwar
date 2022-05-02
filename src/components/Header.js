import React from "react";

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';



export default function Header(props) {
    const { selectedColor } = props;

    for (let i = 0; i < length; i++) {
        pixels.push(<Pixel key={i} x_id={i} y_id={y_id} selectedColor={selectedColor} />);
    }

    return (
        <View
            style={{
                flexDirection: "row",
                flex: 1
            }}
        >
            {pixels}
        </View>
    )
}