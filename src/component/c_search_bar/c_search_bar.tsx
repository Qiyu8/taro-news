import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Block } from '@tarojs/components'
import search from '../../asset/c_search_search/search.png'
import './c_news_bar.scss'

export default class SearchBar extends Component {
    static defaultProps = {
        placeholder: '搜索栏组件默认字符'，
        url: ''
    }

    rediect(url) {
        Taro.navigateTo({
            url: url
        })
    }

    render() {
        return (
            <View className="container">
                <View className="div_search" onClick={this.rediect.bind(this, this.props.url)}>
                    <Image className="image_search" src={search}></Image>
                    <Text className="place_holder">搜索</Text>
                </View>
            </View>
        )
    }
}