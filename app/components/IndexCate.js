import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {View,Text,StyleSheet,Image} from 'react-native'
class IndexCate extends Component {

    static propTypes = {
        cate_data: PropTypes.array,
    }

    render() {
        return (
            <View style={style.root}>
                {this.props.cate_data.map(function(obj,i){
                    return (
                        <View key={'index_cate_item_'+i} style={[style.item,{width:'25%'}]}>
                            <View style={style.itemViewImage}>
                                <Image style={style.itemImage} source={obj.img}/>
                            </View>
                            <Text style={style.itemText}>{obj.name}</Text>
                        </View>
                    )

                })}

            </View>
        );
    }
}

export default IndexCate;

const style = StyleSheet.create({
    root:{
        backgroundColor:'#fff',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item:{
        height:80,
        borderRightWidth:1,
        borderBottomWidth:1,
        borderColor:'#e2e2e2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemText: {
        flex:1,
        fontSize:12,
        fontWeight:'500',
    },
    itemViewImage: {
        flex:3,
        justifyContent: 'center',
    },
    itemImage: {
        width:60,
    },
    revokeItemRightWidth:{
        borderRightWidth:0,
    }
})