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
import { Component } from "react/cjs/react.production.min";


class Pixel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            x_id: props.x_id,
            y_id: props.y_id,
            selectedColor: props.selectedColor,
            time: props.time,
            resettime: props.resettime,
            color_test: props.color_test,
            update_matrix: props.update_matrix,
            web_socket: props.web_socket
        }
        this.updateColor = () => {
            if (this.props.time == 0) {
                this.state.web_socket.send(JSON.stringify({ "x": this.state.x_id, "y": this.state.y_id, "color": this.props.selectedColor }))
                this.state.resettime(5)
                console.log("Placed a pixel in " + this.state.x_id + "," + this.state.y_id + " with color " + this.props.selectedColor)
            }
        }

    }

    componentDidUpdate(prevProps, prevState) {
        console.log('PixelDidUpdate at ' + this.state.x_id + "," + this.state.y_id + "with color " + this.props.color_test)
    }


    shouldComponentUpdate(nextProps, nextState) {
        //Only update a pixel if the new color is different from the previous one
        if (this.props.color_test == nextProps.color_test) {
            return false
        }
        return true
    }

    render() {
        return (
            < TouchableHighlight
                onPress={() => this.updateColor()}
                style={{
                    width: 10,
                    height: 10
                    /* flex: 1,
                    aspectRatio: 1 */
                }} >
                <View
                    style={{
                        width: 10,
                        height: 10,
                        /* flex: 1,
                        aspectRatio: 1, */
                        backgroundColor: this.props.color_test,
                    }} >
                </View>
            </TouchableHighlight >);
    }
}

export default Pixel;