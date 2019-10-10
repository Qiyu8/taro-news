import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './c_news_single.scss'

export default class Single extends Component {
    rediect = (url) => {
        Taro.navigateTo({
            url: url
        })
    }

    render() {
        const {url, title, footword, footsource, imgsrc} = this.props
        return (
            <View className="news_single" onClick={this.rediect.bind(this, url)}>
                <View className="news_single_content">
                    <View className="news_single_title">
                        <View className="head">
                            <Text className="font">{title}</Text>
                        </View>
                        <View className="foot">
                            <Text className="foot_font margin_right">{footword}</Text>
                            <Text className="foot_font font_color">{footsource}</Text>
                        </View>
                    </View>
                    <View className="news_single_img">
                        <Image className="three_imgs" src={imgsrc}></Image>
                    </View>
                </View>
            </View>
        )
    }
}