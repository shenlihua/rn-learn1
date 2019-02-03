import React, {Component} from 'react';
import {View,ScrollView,Image,Text,Button,StyleSheet} from 'react-native'
import SvgUri from 'react-native-svg-uri'
import TipDetail from "../components/TipDetail";
import ItemCard from "../components/ItemCard";
export default class MineContainer extends Component {
    static defaultProps = {
        order_btn:[
            {name:'待付款',uri:'',icon:require('../assert/icons/creditcard.svg')},
            {name:'待发货',uri:'',icon:require('../assert/icons/gift.svg')},
            {name:'待收货',uri:'',icon:require('../assert/icons/31daishouhuo.svg')},
            {name:'评价管理',uri:'',icon:require('../assert/icons/message.svg')},
            {name:'退款/售后',uri:'',icon:require('../assert/icons/tuikuantuihuo.svg')},
        ],
        info_data:[
            {name:'我的收藏',number:0,ext:''},
            {name:'我的积分',number:0,ext:''},
            {name:'优惠券',number:0,ext:''},
            {name:'礼品卡',number:0,ext:''},
        ]

    }
    render() {
        return (
            <ScrollView style={style.root}>
                <View style={style.header}>
                    <View style={style.leftContent}>
                        <Image style={style.image} source={require('../assert/images/goods_card.png')}/>
                        <Text style={style.name}>xxxx</Text>
                    </View>
                    <View style={style.rightContent}>
                        <SvgUri width='30' height='30' fill='#fff'  source={require('../assert/icons/homepage.svg')}/>
                    </View>
                </View>
                <View style={style.main}>
                    <View style={style.mainItem}>
                        <TipDetail
                            title="全部订单"
                            rightTitle="订单详情"
                            onBindClick={()=>{this.props.navigation.navigate('Orders')}}
                        >
                            <View style={style.orderBlock}>
                                {this.props.order_btn.map(function(value, index){
                                    return (
                                        <View key={'orderBlock'+index} style={style.orderItem}>
                                            <SvgUri width='30' height='30' fill='#000'  source={value.icon}/>
                                            <Text style={style.orderItemText}>{value.name}</Text>
                                        </View>
                                    )
                                })}
                            </View>
                        </TipDetail>

                    </View>

                    <View style={style.mainItem}>
                        <View style={style.infoBlock}>
                            {this.props.info_data.map(function(value, index){
                                return (
                                    <View key={'infoBlock'+index} style={style.infoItem}>
                                        <Text style={style.infoItemNumber}>{value.number}</Text>
                                        <Text style={style.infoItemText}>{value.name}</Text>
                                    </View>
                                )
                            })}
                        </View>
                    </View>

                    <View style={style.mainItem}>
                        <Button title={'xxxx'} onPress={()=>this.props.navigation.navigate('Orders')}/>
                        <ItemCard
                            leftIcon={require('../assert/icons/question-circle-fill.svg')}
                            leftIconFill='#FBAF86'
                            text='帮助中心'
                        />
                        <ItemCard
                            leftIcon={require('../assert/icons/chilun.svg')}
                            leftIconFill='#96E5FB'
                            text='设置'
                            extra='账户设置、地址'
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const style=StyleSheet.create({
    root:{
        backgroundColor: '#f8f8f8'
    },
    header:{
        flexDirection:'row',
        height:130,
        backgroundColor:'#8c91fb',

    },
    leftContent:{
        flex:7,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image:{
        width: 60,
        height: 60,
        marginLeft: 8,
        borderRadius: 50
    },
    name:{
        fontSize:16,
        fontWeight:'500',
        color:'#fff',
        marginLeft: 8,
    },
    rightContent:{
        flex:3,
        alignItems: 'flex-end',
        paddingRight: 8,
        paddingTop: 8,

    },
    main:{
    },
    mainItem:{
        marginTop:10,
        backgroundColor:'#fff'

    },
    orderBlock:{
        height:80,
        flexDirection:'row',
    },
    orderItem:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    orderItemText:{

    },
    infoBlock:{
        height:80,
        flexDirection:'row',
    },
    infoItem:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    infoItemNumber:{
        fontSize: 16,
    },
    infoItemText:{
        fontSize: 12,
    },

})