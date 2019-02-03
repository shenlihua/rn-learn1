import React, {Component} from 'react';

import {View,Text,TextInput} from 'react-native'

class PizzaTranslator extends Component {
    constructor(props){
        super(props)
        this.state = {
            text:'',
        }
    }
    render() {
        return (
            <View>
                <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translate!"
                    onChangeText = {(text)=>{this.setState({text:text})}}
                />
                <Text>
                    {this.state.text}
                </Text>
            </View>
        );
    }
}

export default PizzaTranslator;