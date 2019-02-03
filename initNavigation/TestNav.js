import React, {Component} from 'react';
import {createStackNavigator,createBottomTabNavigator,createDrawerNavigator,createSwitchNavigator} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from "../components/HomeScreen";
import DetailScreen from "../components/DetailScreen";
import ModalScreen from "../components/ModalScreen";
import SettingsScreen from "../components/SettingsScreen";
import MyHomeScreen from "../components/MyHomeScreen";
import MyNotificationsScreen from "../components/MyNotificationsScreen";
import AuthA from "../components/AuthA";
import AuthB from "../components/AuthB";


const HomeStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
            tabBarOnPress: ({ previousScene, scene, jumpToIndex }) => {
                // TODO: This doesn't handle the initial render because the second screen renders last. What to do?
                StatusBar.setBarStyle('light-content');
                isAndroid && StatusBar.setBackgroundColor('#6a51ae');
                jumpToIndex(scene.index);
            },
        },
        },
        Details: {
            screen: DetailScreen,
            navigationOptions: {
              tabBarOnPress: ({ previousScene, scene, jumpToIndex }) => {
                StatusBar.setBarStyle('dark-content');
                isAndroid && StatusBar.setBackgroundColor('#ecf0f1');
                jumpToIndex(scene.index);
              },
            },
        },
    },
    {
        // headerMode: 'none',
    }

);

const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
    Details: DetailScreen,
});

// const MyDrawerNavigator = {
//     Home: {
//         screen: MyHomeScreen,
//     },
//     Notifications: {
//         screen: MyNotificationsScreen,
//     },
// };
//
// const SwitchStack = createSwitchNavigator({
//     AuthA:AuthA,
//     AuthB:AuthB,
// })
//
// export const RootStack = createStackNavigator(
//     {
//         auth:SwitchStack,
//         mainPage:HomeStack
//     },
//     {
//         headerMode: 'none',
//     }
// )

export const RootStack = createBottomTabNavigator(
    {
        Home: HomeStack,
        Settings: SettingsStack,
    }
);