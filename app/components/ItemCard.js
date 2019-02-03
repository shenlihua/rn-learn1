import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {View,Text,StyleSheet} from "react-native";
import SvgUri from 'react-native-svg-uri'

class ItemCard extends Component {
    static propTypes = {
        leftIcon:PropTypes.number,
        leftIconFill:PropTypes.string,
        text:PropTypes.string,
        extra:PropTypes.string,

    }
    render() {
        return (
            <View style={style.otherBlockItem}>
                <View style={style.otherBlockItemCommentContent}>
                    <SvgUri width='30' height='30' fill={this.props.leftIconFill}  source={this.props.leftIcon}/>
                    <Text style={style.otherBlockItemText}>{this.props.text}</Text>
                </View>
                <View style={style.otherBlockItemCommentContent}>
                    <Text style={style.otherBlockItemTextExtra}>{this.props.extra}</Text>
                    <SvgUri width='15' height='15' fill='#B4B4B4' source={require('../assert/icons/right.svg')}/>
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