import React, {Component} from 'react';
import {View,ScrollView,Text,Button,StyleSheet,RefreshControl} from 'react-native'

import FlowImages_index from "../components/FlowImages_index";
import IndexCate from "../components/IndexCate";
import GoodsCard from "../components/GoodsCard";
import TipContent from "../components/TipContent";
import GoodsChip from "../components/GoodsChip";
// import {req} from "../request";
class IndexContainer extends Component {

    static defaultProps = {
        cate_data : [
            {name:'空调',img:require('../assert/images/1.png')},
            {name:'冰箱',img:require('../assert/images/1.png')},
            {name:'洗衣机',img:require('../assert/images/1.png')},
            {name:'厨房小电器',img:require('../assert/images/1.png')},
            {name:'厨房大电器',img:require('../assert/images/1.png')},
            {name:'生活家电',img:require('../assert/images/1.png')},
            {name:'热水器/净水器',img:require('../assert/images/1.png')},
            {name:'配件及周边',img:require('../assert/images/1.png')},
        ],
    }

    constructor(props){
        super(props)
        this.state={
            // msg :'test',

        }
    }

    onGoodsDetail = (id=0)=>{
        console.log(id)
        this.props.navigation.navigate('Detail',{
            id:id
        })
    }

    render() {
        // console.log(typeof this.props.cate_data)
        return (
            <ScrollView
                style={style.root}

            >
                {/*轮播图*/}
                <FlowImages_index/>
                <Text>{this.state.msg}</Text>
                {/*分类*/}
                <IndexCate
                    cate_data={this.props.cate_data}
                />
                {[1,2,3,4,5,6].map(function(value,index){
                    return (

                            <GoodsCard
                                key={'GoodsCard'+index}
                                style={style.goodsCard}
                                id={value}
                                image={require('../assert/images/goods_card.png')}
                                name={'我的商品'+index}
                                intro='NBDSdf65465'
                                price={199.99}
                                view={9999}
                                comment={9999}
                                coll={9999}
                                onGoodsDetail={this.onGoodsDetail}
                            />
                    )
                },this)}

                <TipContent
                    title='精选单品'
                    styleContent={style.styleContent}
                >
                    <GoodsChip
                        style={style.goodsChip}
                        name="商品名称"
                        price={99.99}
                        image={require('../assert/images/goods_card.png')}
                    />
                    <GoodsChip
                        style={style.goodsChip}
                        name="商品名称"
                        price={99.99}
                        image={require('../assert/images/goods_card.png')}
                    />
                    <GoodsChip
                        style={style.goodsChip}
                        name="商品名称"
                        price={99.99}
                        image={require('../assert/images/goods_card.png')}
                    />
                    <GoodsChip
                        style={style.goodsChip}
                        name="商品名称"
                        price={99.99}
                        image={require('../assert/images/goods_card.png')}
                    />
                    <GoodsChip
                        style={style.goodsChip}
                        name="商品名称"
                        price={99.99}
                        image={require('../assert/images/goods_card.png')}
                    />
                </TipContent>


            </ScrollView>
        );
    }
}

export default IndexContainer;


const style = StyleSheet.create({
    root:{
        flex: 1,
        backgroundColor: '#fafafa',
        overflow: 'scroll'
    },
    goodsCard:{
        marginTop:18,
        borderBottomWidth: 1,
        borderBottomColor: '#ececec',
    },
    styleContent:{
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    goodsChip:{
        width: '50%',
        borderBottomWidth: 1,
        borderBottomColor:'#ececec',
        borderRightWidth: 1,
        borderRightColor:'#ececec',
    }
})
