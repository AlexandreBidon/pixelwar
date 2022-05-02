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



class ColorIndicator extends Component {

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
        console.log('ColorIndicator did update with' + this.state.selectedColor)
    }


    shouldComponentUpdate(nextProps, nextState) {
        //Only update the indicator if the new color is different from the previous one
        if (this.state.selectedColor === nextState.selectedColor) {
            return false
        }
        return true
    }

    render() {
        return (

            <View style={{
                backgroundColor: selectedColor,
                height: 45,
                width: 45,
                borderRadius: 10
            }}></View>
        )
    }
}

export default ColorIndicator;