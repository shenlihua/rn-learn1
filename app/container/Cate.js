import React, {Component} from 'react';
import {View,ScrollView,Text,StyleSheet} from 'react-native'
import CateList from "../components/CateList";
import TipContent from "../components/TipContent";
import CateHot from "../components/CateHot";
import GoodsStrip from "../components/GoodsStrip";
class CateContainer extends Component {
    static defaultProps = {
        cate_list:[
            {name:'空调',img:require('../assert/images/goods_card.png'),active:true},
            {name:'冰箱',img:require('../assert/images/goods_card.png'),active:false},
            {name:'洗衣机',img:require('../assert/images/goods_card.png'),active:false},
            {name:'厨房小电器',img:require('../assert/images/goods_card.png'),active:false},
            {name:'厨房大电器',img:require('../assert/images/goods_card.png'),active:false},
            {name:'生活家电',img:require('../assert/images/goods_card.png'),active:false},
            {name:'热水/净水',img:require('../assert/images/goods_card.png'),active:false},
            {name:'配件及周边',img:require('../assert/images/goods_card.png'),active:false},
        ],
        cate_data:[
            {name:'壁挂式空调',img:require('../assert/images/1.png')},
            {name:'立柜空调',img:require('../assert/images/1.png')},
            {name:'中央空调',img:require('../assert/images/1.png')},
            {name:'移动空调',img:require('../assert/images/1.png')},
        ],
        goods_list:[
            {name:'《汉书·于定国传》：“恶吏负贼，妄意良民，至亡辜死……今丞相、御史将欲何施以塞此咎？悉意条状，陈朕过失。”',price:99.99,img:require('../assert/images/goods_card.png')},
            {name:'《汉书·于定国传》：“恶吏负贼，妄意良民，至亡辜死……今丞相、御史将欲何施以塞此咎？悉意条状，陈朕过失。”',price:99.99,img:require('../assert/images/goods_card.png')},
            {name:'空调 xxxxxx',price:99.99,img:require('../assert/images/goods_card.png')},
            {name:'空调 xxxxxx',price:99.99,img:require('../assert/images/goods_card.png')},
            {name:'空调 xxxxxx',price:99.99,img:require('../assert/images/goods_card.png')},
            {name:'空调 xxxxxx',price:99.99,img:require('../assert/images/goods_card.png')},

        ],
    }
    render() {
        return (
            <View style={style.root}>
                <View style={style.leftContent}>
                    <CateList
                        data ={this.props.cate_list}
                    />
                </View>
                <View style={style.rightContent}>
                    <ScrollView>
                        <TipContent
                            title="热门分类"
                        >
                            <CateHot
                                cate_data={this.props.cate_data}
                            />
                        </TipContent>

                        <TipContent
                            title="热门单品"
                        >
                            <GoodsStrip
                                data = {this.props.goods_list}
                            />
                        </TipContent>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

export default CateContainer;

const style=StyleSheet.create({
    root:{
        flexDirection: 'row',
        height:'100%',
        backgroundColor:'#fff'
    },
    leftContent:{
        flex:2,
        borderRightWidth: 1,
        borderRightColor:'#ececec'
    },
    rightContent:{
        flex:7,
    }
})