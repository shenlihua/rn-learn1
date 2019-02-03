import React, {Component} from 'react';
import {View,Text} from 'react-native'
class OrdersContainer extends Component {
    componentDidMount(){
        console.log('componentDidMount')
    }

    render() {
        console.log(this.props.navigation.getParam('product'))
        return (
            <View>
                <Text>OrdersContainer</Text>
            </View>
        );
    }
}

export default OrdersContainer;