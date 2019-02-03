import React, {Component} from 'react';
import {View,Text} from 'react-native'
class Blink extends Component {

    constructor(props) {
        super(props)
        this.state = {
            is_show:true
        }

    }

    render() {
        return (
            <View>
                <Text style={{color:'red'}}>我是闪烁的文字</Text>
            </View>
        );
    }
}

export default Blink;