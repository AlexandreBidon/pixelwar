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

import ColorIndicator from "./ColorIndicator";

class Pixel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedColor: props.selectedColor
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
            <View style={{
                flexDirection: "row",
                backgroundColor: 'dimgrey',
                paddingTop: 10,
                paddingBottom: 10,
                justifyContent: "space-evenly",
                alignContent: 'center',
                alignItems: 'center',
            }}>
                <ColorIndicator selectedColor={this.state.selectedColor}></ColorIndicator>
                <Text style={{
                    fontSize: 24,
                    fontWeight: '600',
                }}>TIMER PLACEHOLDER</Text>
            </View>
        )
    }
}