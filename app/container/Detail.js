import React, {Component} from 'react';
import {View, Text, Button} from 'react-native'
class DetailContainer extends Component {
    render() {
        return (
            <View>
                <Text>DetailContainer</Text>
                <Button title='跳转Index' onPress={()=>this.props.navigation.navigate('Index')}/>
            </View>
        );
    }
}

export default DetailContainer;