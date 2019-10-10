import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Block, Swiper, SwiperItem } from '@tarojs/components'
import SearchBar from '../../component/c_search_bar/c_search_bar'
import Recommend from '../../component/c_page_recommend/c_page_recommend'
import './Page_Home.scss'

export default class Page_Home extends Component {
    config: Config = {
        navigationBarTitleText: '新闻',
        navigationBarTextStyle: 'black'
    }

    constructor() {
        super(...arguments)
        this.state = {
            placeholder: "搜索新闻",
            tabs: ["推荐", "热点", "社会", "财经", "军事","时尚","旅游","美食"],
            currIndex: 0,
            autoplay: false,
            indicatorDots: false
        }
    }

    onChangeTabIndex = (evt) => {
        this.setState({
            currIndex: evt.detail.current
        })
    }

    swichNav(index) {
        Taro.showToast({
            title: index + '',
            duration: 1000
        })
        this.setState({
            currIndex: index
        })
    }

    render () {
        const {tabs, indicatorDots, autoplay, currIndex, placeholder}  = this.state
        return (
            <View className="container">
                <View className="search_view">
                    <SearchBar url="/pages/Page_Search/Page_Search" placeholder={placeholder}></SearchBar>
                </View>
                <View className="swiper_tab">
                    {
                        tabs.map(($item, index) => {
                            return (
                                <Block>
                                    <View className={index===currIndex ? 'tab-item item_bg_active' : 'tab-item item-bg'} onClick={this.swichNav.bind(this, index)}>
                                        <Text>{$item}</Text>
                                    </View>
                                </Block>
                            )
                        })
                    }
                </View>
                <Swiper current={currIndex} className="tab-bar" autoplay={autoplay} indicatorDots={indicatorDots}>
                    {
                        tabs.map((item, index) => {
                            return (
                                <SwiperItem className="tab_content">
                                    <View>
                                        <Recommend></Recommend>
                                    </View>
                                </SwiperItem>
                            )
                        })
                    }
                </Swiper>
            </View>
        )
    }
}