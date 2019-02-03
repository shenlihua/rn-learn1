import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {View,ScrollView,Text,Image,StyleSheet} from 'react-native'
class CateList extends Component {
    static propTypes = {
        data:PropTypes.array
    }
    render() {
        return (
            <ScrollView style={style.root}>
                {this.props.data.map(function(value,index){
                    return (
                        <View key={'cateList'+index} style={style.content}>
                            <View style={[style.block,value.active?style.blockActive:'']}>
                                <Image style={style.image} source={value.img}/>
                                <Text style={style.text}>{value.name}</Text>
                            </View>
                        </View>
                    )
                })}


            </ScrollView>
        );
    }
}

export default CateList;

const style=StyleSheet.create({
    root:{

    },
    content:{
        height:100,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ececec',
    },
    block:{
        height:60,
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    blockActive:{
        borderLeftWidth: 3,
        borderLeftColor:'#39eeec',
        color:'#39eeec',
    },
    image:{
        width:40,
        height: 40
    },
    text:{
        fontSize:14,
        fontWeight: '400'
    }
})