import React, {Component} from 'react';
import {View,Text,Button} from 'react-native'
class AuthA extends Component {
    render() {
        return (
            <View>
                <Text>authA</Text>
                <Button title='redirect authb' onPress={()=> this.props.navigation.navigate('AuthB')}/>
            </View>
        );
    }
}

export default AuthA;