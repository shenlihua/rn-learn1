import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import Svg from '../components/Svg'

export default class TipDetail extends Component {
    static propTypes = {
        style:PropTypes.object,
        styleContent:PropTypes.object,
        title:PropTypes.string,
        rightTitle:PropTypes.string,
        onBindClick:PropTypes.func,
    }
    static defaultProps = {
        style:{},
        styleContent:{},
        title:'',
        rightTitle:'',
    }
    render() {
        return (
            <View style={{...style.root,...this.props.style}}>

                <TouchableOpacity style={style.tip} onPress={() => this.props.onBindClick()}>
                    <Text style={style.title}>{this.props.title}</Text>
                    <View style={style.rightContent}>
                        <Text style={style.rightTitle}>{this.props.rightTitle}</Text>
                        <Svg size='25' fill={'#ccc'} icon="right" />
                    </View>
                </TouchableOpacity>
                <View style={[style.content,this.props.styleContent]}>
                    {this.props.children}
                </View>
            </View>
        );
    }
}



const style=StyleSheet.create({
    root:{
        backgroundColor:'#fff'
    },
    tip:{
        flex:1,
        flexDirection:'row',
        height:40,
        justifyContent:'space-between',
        alignItems: 'center',
        paddingLeft: 10,
        borderBottomWidth: 1,
        borderBottomColor:'#ececec',
    },
    title:{
        fontSize:14,
        fontWeight: '600',

    },
    rightContent:{
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 8,

    },
    rightTitle:{
        fontSize:12,
        fontWeight: '400',
        color:'#c4c4c4',
        marginRight: 8,

    },
    content:{
        flex:1,
    }
})