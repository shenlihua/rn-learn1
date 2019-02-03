import React, {Component} from 'react';
import {Button, Text, View} from "react-native";

export default class DetailsScreen extends Component {
    // static navigationOptions = ({ navigation, navigationOptions }) => {
    //     const { params } = navigation.state;
    //     console.log(params)
    //     return {
    //         title: params ? params.otherParam : 'A Nested Details Screen',
    //         /* These values are used instead of the shared configuration! */
    //         headerStyle: {
    //             backgroundColor: navigationOptions.headerTintColor,
    //         },
    //         headerTintColor: navigationOptions.headerStyle.backgroundColor,
    //
    //     };
    // };

    render() {

        const {navigation} = this.props;
        console.log(navigation)
        const itemId = navigation.getParam('itemId','NO-ID')
        const otherParam = navigation.getParam('otherParam', 'some default value')

        return (
            <View>
                <Text>Details Screen</Text>
                <Text>Details Screen</Text>
                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Text>otherParam: {JSON.stringify(otherParam)}</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
                <Button
                    title="Update the title"
                    onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}
                />
            </View>
        );
    }
}

