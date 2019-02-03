import React, {Component} from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';
class GoodsChip extends Component {
    static defaultProps= {
        style:{},
        name:'',
        price:0.00,
        image:''
    }
    render() {
        return (
            <View style={{...style.root,...this.props.style}}>
                <View style={style.imageContent}>
                    <Image style={style.image} resizeMode='cover' source={this.props.image}/>
                </View>
                <View style={style.content}>
                    <Text style={style.goodsName}>{this.props.name}</Text>
                    <Text style={style.goodsPrice}>{this.props.price}</Text>
                </View>
            </View>
        );
    }
}

export default GoodsChip;

const style=StyleSheet.create({
    root:{
        height:180,
        padding: 8,
    },
    imageContent:{
        flex:5,
        justifyContent: 'center'
    },
    image:{
        width:'100%',
        flex: 4,
    },
    content:{
        flex: 2,
        justifyContent: 'space-around',
    },
    goodsName:{
        fontSize:12,
        fontWeight: '400'
    },
    goodsPrice:{
        color:'#E6120A'
    }
})