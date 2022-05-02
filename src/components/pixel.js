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
            color: "#ffffff",
            x_id: props.x_id,
            y_id: props.y_id,
            selectedColor: props.selectedColor
        }
        this.updateColor = () => {
            this.setState({ color: this.state.selectedColor })
            console.log("Placed a pixel in " + this.state.x_id + "," + this.state.y_id + " with color " + this.state.selectedColor)
        }

    }

    static getDerivedStateFromProps(props, state) {
        //Update the selectedColor if it was changed
        if (props.selectedColor !== state.selectedColor) {
            return {
                selectedColor: props.selectedColor
            };
        }        // Return null to indicate no change to state.
        return null;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('PixelDidUpdate at ' + this.state.x_id + "," + this.state.y_id)
    }


    shouldComponentUpdate(nextProps, nextState) {
        //Only update a pixel if the new color is differend from the previous one
        if (this.state.color === nextState.color) {
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
                        backgroundColor: this.state.color,
                    }} >
                </View>
            </TouchableHighlight >);
    }
}

export default Pixel;