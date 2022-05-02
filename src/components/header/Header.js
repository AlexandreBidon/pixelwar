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
import { render } from "react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod";
import { Component } from "react/cjs/react.production.min";

import ColorIndicator from "./ColorIndicator";

import Timer from "./Timer";

class DrawHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedColor: props.selectedColor,
            time: props.time
        }
    }

    static getDerivedStateFromProps(props, state) {
        //Update the selectedColor if it was changed
        if (props.selectedColor !== state.selectedColor) {
            return {
                selectedColor: props.selectedColor
            };
        }
        else {
            if (props.time !== state.time) {
                return {
                    time: props.time
                };
            }        // Return null to indicate no change to state.
            return null;
        }
    }




    shouldComponentUpdate(nextProps, nextState) {
        //Only update a pixel if the new color is differend from the previous one
        if (this.state.selectedColor === nextState.selectedColor & this.state.time === nextState.time) {
            return false
        }
        return true
    }

    render() {
        return (
            <View style={{
                flexDirection: "row",
                backgroundColor: 'dimgrey',
                paddingTop: 10,
                paddingBottom: 10,
                justifyContent: "space-evenly",
                alignContent: 'center',
                alignItems: 'center',
            }}>
                <ColorIndicator selectedColor={this.state.selectedColor} />
                <Timer time={this.state.time} />
            </View>
        )
    }
}

export default DrawHeader;