import React, {Component} from 'react';

import {View,Button} from 'react-native'

class TestButton extends Component {
    render() {
        return (
            <View>
                <Button title='press me' onPress={()=>{alert('你点击了按钮')}}/>
            </View>
        );
    }
}

export default TestButton;