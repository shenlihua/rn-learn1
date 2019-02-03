import React, {Component} from 'react';
import {View,Text,Image,StyleSheet} from 'react-native'
import SvgUri from 'react-native-svg-uri'

export default class GoodsCard extends Component {
    static defaultProps = {
        style:{},
        image:'',
        name:'',
        intro:'',
        price:'',
        view:0,
        comment:0,
        coll:0,
    }
    render() {
        return (

            <View style={{...style.root,...this.props.style}}>

                <View style={style.image}>
                    <Image style={style.imageCom} source={this.props.image}/>
                </View>
                <View style={style.info}>
                    <View style={style.intro}>
                        <Text style={style.introName}>{this.props.name}</Text>
                        <Text style={style.introIntro}>{this.props.intro}</Text>
                    </View>
                    <View style={style.other}>
                        <Text style={style.otherPrice}>{this.props.price}</Text>
                        <View style={style.number}>
                            <View style={style.numberBlock}>
                                <SvgUri width='25' height='25' fill={'#ccc'}  source={require('../assert/icons/browse.svg')} />
                                <Text style={style.numberBlockText}>{this.props.view}</Text>
                            </View>
                            <View style={style.numberBlock}>
                                <SvgUri width='25' height='25' fill={'#ccc'}  source={require('../assert/icons/interactive.svg')} />
                                <Text style={style.numberBlockText}>{this.props.comment}</Text>
                            </View>
                            <View style={style.numberBlock}>
                                <SvgUri width='25' height='25' fill={'#ccc'}  source={require('../assert/icons/collection.svg')} />
                                <Text style={style.numberBlockText}>{this.props.coll}</Text>
                            </View>
                        </View>
                    </View>
                </View>

            </View>
        );
    }
}




const style = StyleSheet.create({
    root:{
        height:210,
        backgroundColor:'#fff'
    },
    image:{
        flex:4
    },
    imageCom:{
        flex:1
    },
    info:{
        flex: 3,
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
    },
    intro:{
        flex: 3,
        justifyContent: 'center',
    },
    introName:{
        fontSize:16,
        fontWeight: '500',
    },
    introIntro:{
        fontSize:12,
        fontWeight: '400',
        color:'#c3c3c3',
    },
    other:{
        flex: 2,
        flexDirection:'row',
        alignItems: 'center'
    },
    otherPrice:{
        flex:3,
        fontSize:16,
        color:'#E6120A',
    },
    number:{
        flex:4,
        flexDirection: 'row',
    },
    numberBlock:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    numberBlockText:{
        fontSize:12,
        marginLeft:2,
        fontWeight: '400',
        color:'#e2e2e2',
    },
})