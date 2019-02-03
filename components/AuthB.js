import React, {Component} from 'react';
import {View,Text,Button} from 'react-native'
class AuthB extends Component {
    render() {
        return (
            <View>
                <Text>authB</Text>
                <Button title='redirect authB' onPress={()=>this.props.navigation.navigate('Home')}/>
            </View>
        );
    }
}

export default AuthB;