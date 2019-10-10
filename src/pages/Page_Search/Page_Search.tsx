import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Image, Block } from '@tarojs/components'
import SearchTitle from '../../component/c_search_title/c_search_title'
import Items from '../../component/c_news_items/c_news_items'
import Single from '../../component/c_news_single/c_news_single'
import './Page_Search.scss'

export default class Page_Search extends Component {
    config: Config = {
        navigationBarTitleText: '搜索',
        navigationBarTextStyle: 'black'
    }

    constructor() {
        super(...arguments)
        this.state = {
            title: "搜索历史",
            clear: "清空",
            inputvalue: "",
            rslist: ["贸易战", "特朗普", "演唱会", "金特会"],
            searchImg: "../../asset/img/search_1.png",
            items: [{
                url: "/Page_Hot",
                title: "索尼A9大师说：开启专业摄影的微单时代获奖作品欣赏",
                imglist: [{ src: "../../asset/to_delete/picture2.png" }, { src: "../../asset/to_delete/picture3.png" }, { src: "../../asset/to_delete/picture4.png" }],
                footword: "纵观世界",
                footsource: "30分钟前"
            }],
            singles: [{
                url: "/Page_Video",
                title: "想要真全面屏手机？还得看前置摄像头",
                imgsrc: "../../asset/to_delete/picture5.png",
                footword: "不执着财经",
                footsource: "2小时前"
            }]
        }
    }

    clearHis() {
        this.state.rslist = []
    }

    changeInputValue(evt) {
        this.state.inputvalue = evt.detail.params
    }

    itemClick(str) {
        this.state.inputvalue = str
    }

    render() {
        const { inputvalue, title, clear, rslist, searchImg, items, singles } = this.state
        return (
            <View className="container">
                <SearchTitle></SearchTitle>
                {
                    inputvalue == '' ? (
                        <View className="his_div">
                            <View className="his_div_head">
                                <Text className="search_his">{title}</Text>
                                <Text className="search_clear" onClick={this.clearHis}>{clear}</Text>
                            </View>
                            {
                                rslist.map((item) => {
                                    return (
                                        <View>
                                            <View className="search_rs" onClick={this.itemClick.bind(this, item)}>
                                                <View className="rs_img">
                                                    <Image className="search_img" src={searchImg}></Image>
                                                </View>
                                                <View className="rs_content">
                                                    <Text className="rs_content_text">{item}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    )
                                })
                            }
                        </View>
                    ) : (
                            <View className="rs_div">
                                {
                                    items.map(item => {
                                        return (
                                            <Block>
                                                <Items url={item.url} title={item.title} imglist={item.imglist} footword={item.footword} footsource={item.footsource}></Items>
                                            </Block>
                                        )
                                    })
                                }
                                {
                                    singles.map(item => {
                                        return (
                                            <Block>
                                                <Single url={item.url} title={item.title} imgsrc={item.imgsrc} footword={item.footword} footsource={item.footsource}></Single>
                                            </Block>
                                        )
                                    })
                                }
                            </View>
                        )
                }
            </View>
        )
    }
}