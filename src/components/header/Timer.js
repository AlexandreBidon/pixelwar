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

class Timer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: props.time
        }
    }

    static getDerivedStateFromProps(props, state) {
        //Update the time if it was changed
        if (props.time !== state.time) {
            return {
                time: props.time
            };
        }        // Return null to indicate no change to state.
        return null;
    }




    shouldComponentUpdate(nextProps, nextState) {
        //Only update a pixel if the new color is differend from the previous one
        if (this.state.time === nextState.time) {
            return false
        }
        return true
    }

    render() {
        return (
            <Text style={{
                fontSize: 24,
                fontWeight: '600',
            }}>{this.state.time}</Text>
        )
    }
}

export default Timer;