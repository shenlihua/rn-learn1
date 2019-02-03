/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import nav from "./app/navigator/nav";
import combine from "./app/reducers/combine";

const AppContainer = createAppContainer(nav)
const store = createStore(combine)
export default class App extends Component<Props> {

    render() {

        return (
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        );
    }
}
