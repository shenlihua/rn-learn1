import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {View,Text,StyleSheet} from "react-native";
import Svg from '../components/Svg'

class ItemCard extends Component {
    static propTypes = {
        leftIcon:PropTypes.string,
        leftIconFill:PropTypes.string,
        text:PropTypes.string,
        extra:PropTypes.string,

    }
    render() {
        return (
            <View style={style.otherBlockItem}>
                <View style={style.otherBlockItemCommentContent}>
                    <Svg size='30' fill={this.props.leftIconFill}  icon={this.props.leftIcon}/>
                    <Text style={style.otherBlockItemText}>{this.props.text}</Text>
                </View>
                <View style={style.otherBlockItemCommentContent}>
                    <Text style={style.otherBlockItemTextExtra}>{this.props.extra}</Text>
                    <Svg size='15' fill='#B4B4B4' icon="right"/>
                </View>
            </View>
        );
    }
}

export default ItemCard;

const style = StyleSheet.create({
    otherBlockItem:{
        height: 50,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        paddingRight: 8,
        paddingLeft: 8,
        flex:1,
        borderBottomColor:'#ececec',
        borderBottomWidth: 1,
    },
    otherBlockItemCommentContent:{
        flexDirection:'row',
        alignItems:'center',
    },
    otherBlockItemText:{
        fontWeight: '400',
    },
    otherBlockItemTextExtra:{
        fontWeight: '300',
        color:'#B4B4B4',
    }
})