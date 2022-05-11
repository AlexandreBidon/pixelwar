import React, { useRef } from "react";
{/*import "./../styles/drawingPanel.scss";*/ }
import Row from "../drawing_panel/Row";
// import { exportComponentAsPNG } from "react-component-export-image";

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';

export default function DrawingPanel(props) {
    const { length, height, selectedColor, time, resettime, color_matrix, update_matrix } = props;


    let rows = [];

    for (let i = 0; i < height; i++) {
        rows.push(
            <Row
                selectedColor={selectedColor}
                length={length}
                key={i}
                y_id={i}
                time={time}
                resettime={resettime}
                color_row={color_matrix[i]}
                update_matrix={update_matrix}
            />
        );
    }

    return (
        <View style={{
            flex: 5,
            overflow: "hidden",
        }}>
            <ReactNativeZoomableView
                maxZoom={2}
                minZoom={0.9}
                zoomStep={0.5}
                initialZoom={0.95}
                bindToBorders={true}
                style={{
                    padding: 10,
                    backgroundColor: 'ghostwhite',
                }}
            >
                <View style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: 0
                }}>
                    {rows}
                </View>
            </ReactNativeZoomableView>

        </View>
    );
}