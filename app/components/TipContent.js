import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View,Text,StyleSheet} from 'react-native'
import Svg from '../components/Svg'

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
                    <Svg size='25' fill={'#ffb016'} icon="browse" />
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