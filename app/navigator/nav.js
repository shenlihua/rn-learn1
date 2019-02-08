import React from 'react'
import {Text,View} from 'react-native'
import {createStackNavigator,createBottomTabNavigator,createMaterialTopTabNavigator} from 'react-navigation'

import SvgUri from 'react-native-svg-uri'

import IndexContainer from "../container/Index";
import CateContainer from "../container/Cate";
import MineContainer from "../container/Mine";
import DetailContainer from "../container/Detail";
import OrdersContainer from "../container/Orders";

//title样式--居中
const TitleStyle = {
    headerTitleStyle:{
        flex:1,
        textAlign: 'center',
    },
    /// 注意：如果右边没有视图，那么添加一个空白视图即可
    headerRight: <View />
}

//首页
const IndexStack = createStackNavigator(
    {
        Detail:{
            screen:DetailContainer,
            navigationOptions:({ navigation,screenProps }) => ({
                title:'详情',
                tabBarOnPress: ({ previousScene, scene, jumpToIndex }) => {
                    StatusBar.setBarStyle('dark-content');
                    isAndroid && StatusBar.setBackgroundColor('#ecf0f1');
                    jumpToIndex(scene.index);
                },
            }),
        },
        Index:{
            screen:IndexContainer,
            navigationOptions:({ navigation }) => ({
                header:null,
            }),
        }
    },
    {
        initialRouteName:'Detail',
        defaultNavigationOptions: {
            headerTintColor: '#000',
            headerStyle: {
                backgroundColor: '#fff',
            },
        },
    }
)


//我的
const MineStack = createStackNavigator(
    {
        Mine:{
            screen:MineContainer,
            navigationOptions:({ navigation }) => ({
                title:'我的',
                header: null,

            }),
        },
        Orders:{
            screen:createMaterialTopTabNavigator(
                {
                    OrdersALl:{
                        screen:OrdersContainer,
                        params: { product: 'all' },
                        navigationOptions:({ navigation }) => ({
                            title:'全部',
                        }),
                    },
                    OrdersWaitPay:{
                        screen:OrdersContainer,
                        navigationOptions:({ navigation }) => ({
                            title:'待支付',
                        }),
                    },
                    OrdersWaitSend:{
                        screen:OrdersContainer,
                        navigationOptions:({ navigation }) => ({
                            title:'待发货',
                        }),
                    },
                    OrdersWaitRec:{
                        screen:OrdersContainer,
                        navigationOptions:({ navigation }) => ({
                            title:'待收货',
                        }),
                    },
                    OrdersWaitComment:{
                        screen:OrdersContainer,
                        navigationOptions:({ navigation }) => ({
                            title:'待评价',
                        }),
                    },
                },
                {
                    initialRouteName:'OrdersALl',
                    lazy:true,
                    tabBarOptions: {
                        activeTintColor:'red',
                        inactiveTintColor:'#878787',
                        indicatorStyle :{
                            backgroundColor: 'red'
                        },

                        labelStyle: {
                            fontSize: 12,
                            fontWeight: '600',
                        },
                        style: {
                            backgroundColor: '#fff',
                        },
                    }
                }
            ),
            navigationOptions:({navigation})=>({
                title:'订单详情',
                ...TitleStyle
            })
        }
    },
    {
        initialRouteName:'Mine',
    }
)

const nav = createBottomTabNavigator(
    {
        Index:{
            screen:IndexStack,
            navigationOptions: ({ navigation }) => ({
                title: `首页`,
                tabBarIcon: ({ focused, horizontal, tintColor })=>{
                    return <SvgUri width='30' fill={tintColor}  source={require('../assert/icons/homepage.svg')}/>
                }
            }),
        },
        Cate:{
            screen:CateContainer,
            navigationOptions: ({ navigation }) => ({
                title: '分类',
                tabBarIcon: ({ focused, horizontal, tintColor })=>{
                    return <SvgUri width='30' fill={tintColor}  source={require('../assert/icons/manage.svg')}/>
                }
            }),
        },
        Mine:{
            screen:MineStack,
            navigationOptions: ({ navigation }) => ({
                title: '我的',

                tabBarIcon: ({ focused, horizontal, tintColor })=>{
                    return <SvgUri width='30' fill={tintColor}  source={require('../assert/icons/people.svg')}/>
                }
            }),
        }
    },
    {
        initialRouteName:'Index',
        tabBarOptions:{
            // activeTintColor:'yellow',
            // activeBackgroundColor:'blue',
            // inactiveTintColor:'green',
            // inactiveBackgroundColor :'red',
            // showLabel :false,
        }
    }
)




export default nav;