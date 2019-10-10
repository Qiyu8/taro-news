import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Swiper, Block, SwiperItem } from '@tarojs/components'
import Items from '../c_news_items/c_news_items'
import Single from '../c_news_single/c_news_single'
import './c_page_recommend.scss'

export default class Recommend extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            autoPlay: true,
            indicatorDots: true,
            type: 'content_1',
            head: "头条",
            items: [{
                url: "/pages/Page_Detail/Page_Detail",
                title: "索尼A9大师说：开启专业摄影的微单时代获奖作品欣赏",
                imglist: [{ src: "../../asset/to_delete/picture2.png" }, { src: "../../asset/to_delete/picture3.png" }, { src: "../../asset/to_delete/picture4.png" }],
                footword: "纵观世界",
                footsource: "30分钟前"
            }],
            singles: [{
                url: "/pages/Page_Composite/Page_Composite",
                title: "视图新闻",
                imgsrc: "../../asset/to_delete/picture5.png",
                footword: "不执着财经",
                footsource: "2小时前"
            }, {
                url: "/pages/Page_Video/Page_Video",
                title: "想要真全面屏手机？还得看前置摄像头",
                imgsrc: "../../asset/to_delete/picture5.png",
                footword: "不执着财经",
                footsource: "2小时前"
            }, {
                url: "/pages/Page_Image/Page_Image",
                title: "纯html新闻详情页面。华为官网",
                imgsrc: "../../asset/to_delete/picture6.png",
                footword: "华为",
                footsource: "官网"
            }, {
                url: "/pages/Page_Richtext/Page_Richtext",
                title: "Richtext组件 实现新闻内容，用于简短、纯文本新闻",
                imgsrc: "../../asset/to_delete/picture5.png",
                footword: "不执着财经",
                footsource: "2小时前"
            }],
            //图集模式
            image: {
                url: "/pages/Page_Image/Page_Image",
                title: "图集新闻",
                imgsrc: "../../asset/to_delete/picture1.png",
                footword: "中央广电总台国际在线",
                footsource: "8图"
            },
            //热点模式
            text: {
                url: "/pages/Page_Hot/Page_Hot",
                title: "热点话题",
                imgsrc: "../../asset/to_delete/picture1.png",
                footword: "中央广电总台国际在线",
                footsource: "3图"
            },
            //视频模式
            video: {
                url: "/pages/Page_Video/Page_Video",
                title: "视频新闻",
                imgsrc: "../../asset/to_delete/picture1.png",
                footword: "中央广电总台国际在线",
                footsource: "3图"
            }
        }
    }

    showContent(num) {
        this.state.type = 'content_' + num
    }

    showImageNews(url) {
        if (url === 'image') {
            url = this.state.image.url
        }
        if (url === 'text') {
            url = this.state.text.url
        }
        if (url === 'video') {
            url = this.state.video.url
        }
        Taro.navigateTo({
            url: url
        })
    }

    render() {
        const {autoPlay, indicatorDots, head, image, text, video, items, singles} = this.state
        return (
            <View className="recommend_container">
                <Text className="head">{head}</Text>
                <Swiper className="swiper" autoplay={autoPlay} indicatorDots={indicatorDots}>
                    <SwiperItem className="recommend_stack">
                        <Image className="image" src={image.imgsrc} onClick={this.showImageNews.bind(this, 'image')}></Image>
                    </SwiperItem>
                    <SwiperItem className="recommend_stack">
                        <Image className="image" src={text.imgsrc} onClick={this.showImageNews.bind(this, 'text')}></Image>
                    </SwiperItem>
                    <SwiperItem className="recommend_stack">
                        <Image className="image" src={video.imgsrc} onClick={this.showImageNews.bind(this, 'video')}></Image>
                    </SwiperItem>
                </Swiper>
                <View className="line"></View>
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
}