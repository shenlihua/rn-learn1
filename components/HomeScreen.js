import React, {Component} from 'react';
import {View,Text,Button,StatusBar} from 'react-native'
import LogoTitle from "./LogoTitle";


export default class HomeScreen extends Component {
    // static navigationOptions = ({navigation})=>{
    //     return {
    //         title: 'HomeScreen',
    //         headerRight: (
    //             <Button
    //                 onPress={() => navigation.navigate('MyModal')}
    //                 title="+1"
    //                 color="#fff"
    //             />
    //         ),
    //     }
    // };
    componentDidMount() {
        this.props.navigation.setParams({ increaseCount: this._increaseCount });
    }

    state = {
        count: 0,
    };

    _increaseCount = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <View>
                <StatusBar  animated={true} barStyle="dark-content" backgroundColor="white"/>
                <Text>Home Screen {this.state.count}</Text>
                <Button
                    title="Go to Details"
                    onPress={() => {
                        console.log('home onPress')
                        this.props.navigation.navigate('Details',{
                            itemId:86,
                            otherParam:"other info"
                        })
                    }}
                />
            </View>
        );
    }
}


