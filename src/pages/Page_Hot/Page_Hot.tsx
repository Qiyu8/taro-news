import Taro, { Component } from '@tarojs/taro'
import { View, Text, Block, Image } from '@tarojs/components'
import Single from '../../component/c_news_single/c_news_single'
import './Page_Hot.scss'

export default class Page_Hot extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            title: "一朵金丝皇菊的故事",
            content: "据中央广电总台国际在线报道，央广国际在线6月6日刊发评论文章指出，路透社5日援引知情人士报道，美国GDP增长大约3%。",
            labelOne: "特朗普",
            labelTwo: "美朝关系",
            hot: "热点话题",
            head: "台风山竹",
            singleOnes: [{
                url: "/pages/Page_Detail/Page_Detail",
                title: "违规做转基因实验的专家，被开除党籍",
                imgsrc: "../../asset/to_delete/p_news_two_p1.png",
                footword: "知乎"
            }],
            singleTwos: [{
                url: "/pages/Page_Detail/Page_Detail",
                title: "日本网民吐槽：台风将平等地袭击日本全境",
                imgsrc: "../../asset/to_delete/p_news_two_p2.png",
                footword: "证券时报"
            }],
            singleThrees: [{
                url: "/pages/Page_Detail/Page_Detail",
                title: "台风登陆广东，局部风力达17级，红色预警生效中",
                imgsrc: "../../asset/to_delete/p_news_two_p3.png",
                time: "05:20",
                footword: "太平洋电脑"
            }]
        }
    }

    render() {
        let {title, content, head, labelOne, labelTwo,
             hot, singleOnes, singleTwos, singleThrees} = this.state
        return (
            <View className="hot_container">
                <View className="head_image">
                    <Image className="head_image" src="../../asset/to_delete/p_news_two_banner.png"></Image>
                </View>

                <View className="head_text common_middle">
                    <View className="head_content">
                        <Text className="head_font">{title}</Text>
                    </View>
                    <View className="middle_content">
                        <Text className="middle_content_text">{content}</Text>
                    </View>
                    <View className="head_text_lable">
                        <Text className="foot_lable">{labelOne}</Text>
                        <Text className="foot_lable">{labelTwo}</Text>
                    </View>
                </View>

                <View className="single_regin common_middle">
                    <View className="single_regin_title">
                        <Text className="common_font">
                            {hot}
                        </Text>
                    </View>
                    {
                        singleOnes.map($item => {
                            return (
                                <Block>
                                    <Single url={$item.url} title={$item.title} imgsrc={$item.imgsrc} footword={$item.footword}></Single>
                                </Block>
                            )
                        })
                    }
                    <View className="single_regin_title">
                        <Text className="common_font">{head}</Text>
                    </View>
                    {
                        singleTwos.map($item => {
                            return (
                                <Block>
                                    <Single url={$item.url} title={$item.title} imgsrc={$item.imgsrc} footword={$item.footword}></Single>
                                </Block>
                            )
                        })
                    }
                    {
                        singleThrees.map($item => {
                            return (
                                <Block>
                                   <View className="stack">
                                        <Single url={$item.url} title={$item.title} imgsrc={$item.imgsrc} footword={$item.footword}></Single>
                                   </View>
                                </Block>
                            )
                        })
                    }
                </View>
                <View className="foot"></View>
            </View>
        )
    }
}
