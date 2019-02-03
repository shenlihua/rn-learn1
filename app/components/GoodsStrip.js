import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {View,Image,Text,StyleSheet} from 'react-native'
export default class GoodsStrip extends Component {
    static propTypes = {
        data:PropTypes.array,
    }
    render() {
        return (
            <View style={style.root}>
                {this.props.data.map(function(value,index){
                    return (
                        <View key={'goodsStrip'+index} style={style.item}>
                            <View style={style.imageContent}>
                                <Image style={style.image} source={value.img}/>
                            </View>
                            <View style={style.info}>
                                <Text numberOfLines={2} style={style.name}>{value.name}</Text>
                                <Text style={style.price}>{value.price}</Text>
                            </View>
                        </View>
                    )
                })}
            </View>
        );
    }
}

const style=StyleSheet.create({
    root:{

    },
    item:{
        height:100,
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'#ececec'
    },
    imageContent:{
        flex:3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
        width: 80,
        height: 80,
    },
    info:{
        flex:5,
        paddingTop: 10
    },
    price:{
        marginTop: 8,
        color:'#E6120A',
    }

})