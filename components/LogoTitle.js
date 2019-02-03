import React, {Component} from 'react';
import {Image} from 'react-native'
class LogoTitle extends Component {
    render() {
        return (
            <Image
                source={require('../images/abc.png')}
                style={{ width: 30, height: 30 }}
            />
        );
    }
}

export default LogoTitle;