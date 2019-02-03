import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View,Text,StyleSheet} from 'react-native'
import SvgUri from 'react-native-svg-uri'

class TipContent extends Component {
    static propTypes = {
        style:PropTypes.object,
        styleContent:PropTypes.object,
        title:PropTypes.string,
    }
    static defaultProps = {
        style:{},
        styleContent:{},
        title:'',
    }
    render() {
        return (
            <View style={{...style.root,...this.props.style}}>
                <View style={style.tip}>
                    <SvgUri width='25' height='25' fill={'#ffb016'} source={require('../assert/icons/browse.svg')} />
                    <Text style={style.title}>{this.props.title}</Text>
                </View>
                <View style={[style.content,this.props.styleContent]}>
                    {this.props.children}
                </View>
            </View>
        );
    }
}

export default TipContent;

const style=StyleSheet.create({
    root:{
        backgroundColor:'#fff'
    },
    tip:{
        flexDirection:'row',
        height:40,
        alignItems: 'center',
        paddingLeft: 10,
        borderBottomWidth: 1,
        borderBottomColor:'#ececec',
    },
    title:{
        fontSize:16,
        fontWeight: '600',

    },
    content:{
        flex:1,
    }
})