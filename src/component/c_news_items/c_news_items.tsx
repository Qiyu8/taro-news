import Taro, { Component } from '@tarojs/taro'
import { View, Text, Block, Image } from '@tarojs/components'
import './c_news_items.scss'

export default class Items extends Component {
    rediect(url) {
        Taro.navigateTo({
            url: url
        })
    }

    render() {
        return (
            <View className="three_items" onClick={this.rediect.bind(this, this.props.url)}>
                <View className="three_item_title">
                    <Text className="font">{this.props.title}</Text>
                </View>
                <View className="three_item_imgs">
                    {
                        this.props.imglist.map((item) => {
                            return (
                                <Block>
                                    <Image className="three_imgs" src={item.src}></Image>
                                </Block>
                            )
                        })
                    }
                </View>
                <View className="three_items_foot">
                    <Text className="foot_font margin_right">{this.props.footword}</Text>
                    <Text className="foot_font margin_color">{this.props.footsource}</Text>
                </View>
            </View>
        )
    }
}