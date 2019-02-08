import React, {Component} from 'react';
import {View, Text, Button} from 'react-native'
class DetailContainer extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;

        return {
            title: params ? params.otherParam : 'A Nested Details Screen',
            /* These values are used instead of the shared configuration! */
            headerStyle: {
                backgroundColor: navigationOptions.headerTintColor,
            },
            headerTintColor: navigationOptions.headerStyle.backgroundColor,
        };
    };

    render() {
        const { navigation } = this.props;
        return (
            <View>
                <Text>{navigation.getParam('id', 'NO-ID')}</Text>
                <Button title='跳转Index' onPress={()=>this.props.navigation.navigate('Index')}/>
            </View>
        );
    }
}

export default DetailContainer;