import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Image, Block, RichText } from '@tarojs/components'
import './Page_Richtext.scss'

export default class Page_Richtext extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            loading: true,
            simpleHtmlText: "",
            recommendTitle: "热门评论",
            unZanImage: "../../asset/img/p_news_four_icon1.png",
            zanImage: "../../asset/img/p_news_four_icon2.png",
            recommendors: [
                { name: "马克.扎克伯克", time: "2017/12/8 18:38", isPrased: false, total: "20", touxiang: "../../asset/to_delete/p_news_four_touxiang1.png", text: "现在的情景是 ， 你已经在本地创建了一个Git仓库后 ， 又想在 Github 创建一个Git 仓库并且让这两个仓库进行远程同步 ， 这样Github 上的仓库既可以作为备份 ，有可以让其他人通过仓库来写作 ， 真是一举多得。现在的情景是 ， 你已经在本地创建了一个Git仓库后" },
                { name: "桑德尔.皮才", time: "2017/12/8 18:38", isPrased: true, total: "20", touxiang: "../../asset/to_delete/p_news_four_touxiang2.png", text: "千万注意，把上面的自己的名字 改成自己的Github 账户名 ， 否则 ， 你在本地关联的就是我的远程库 ， 关联没有问题 ， 但是你以后推送不上去 ， 因为你的SSH key公钥不在我的账户列表中 。 添加后远程库的名字就是 origin 这就是 Git的默认叫法 ， 也可以改成别的 。" },
                { name: "提姆.库克", time: "2017/12/8 18:38", isPrased: false, total: "20", touxiang: "../../asset/to_delete/p_news_four_touxiang1.png", text: "埋头做了三年多，华为PC业务终于迎来了它的Meta7时刻。" },
                { name: "埃隆.马斯克", time: "2017/12/8 18:38", isPrased: false, total: "20", touxiang: "../../asset/to_delete/p_news_four_touxiang2.png", text: "从1991年到2000年间，PC业务高速发展，它代表的是高新技术，别的跟它比只是小儿科，如今它成了最冰冷的一个，与人的关系也越来越疏远，如非工作需要很少被人想起。" },
            ]
        }
    }

    zanClick(index) {
        var items = this.state.recommendors[index]
        var tempTotal
        if (!items.isPrased) {
            tempTotal = parseInt(items.total) + 1;
        } else {
            tempTotal = parseInt(items.total) - 1;
        }
        items.total = tempTotal.toString()
        items.isPrased = !items.isPrased
        this.setState({
            recommendors: this.state.recommendors
        })
    }

    getSimpleHtmlText() {
        this.setState({
            loading: false,
            simpleHtmlText: 
            `<div style='height:30px;line-height:30px;color:#1a1a1a;font-size:26px;'>华为PC的光荣与梦想</div>
            <div>
                <p>之前是拼命给渠道推货，现在是渠道拼命找我要货。”负责华为 PC 产品销售的老姜虽然比以前忙了不少，但心里却乐开了花。</p>
            </div>
            <img src='../../asset/to_delete/p_news_four_p3.png'></img>
            <div>
                <p>MateBook X Pro 毫不意外地成了当下最好的笔记本电脑之一，自发布以来持续收割着用户和媒体的好评，最好的屏幕，最好的外放音效，一气呵成的指纹解锁，便携小巧的电源。</p>
            </div>`
        })
    }

    componentDidMount() {
        this.getSimpleHtmlText()
    }

    render() {
        const { loading, simpleHtmlText, unZanImage, zanImage, recommendors, recommendTitle } = this.state
        return (
            <View className="richtext_container">
                {
                    loading && <View className="loading">
                        <Image src="../../asset/img/loading.gif" className="target"></Image>
                        <Text>loading...</Text>
                    </View>
                }
                {
                    !loading && <View className="main_content">
                        <RichText className="recommend" nodes={simpleHtmlText}></RichText>
                        <View className="recommend">
                            <Text className="recommend_text">{recommendTitle}</Text>
                            <View className="recommend_div">
                                {
                                    recommendors.map(($item, $idx) => {
                                        return (
                                            <Block>
                                                <View className="recommend1">
                                                    <View className="re_head">
                                                        <Image className="re_head_img" src={$item.touxiang}></Image>
                                                        <View className="name_time">
                                                            <Text className="name">{$item.name}</Text>
                                                            <Text className="time">{$item.time}</Text>
                                                        </View>
                                                        <View className="zan" onClick={this.zanClick.bind(this, $idx)}>
                                                            {!$item.isPrased && <Image className="zan_img" src={unZanImage}></Image>}
                                                            {$item.isPrased && <Image className="zan_img" src={zanImage}></Image>}
                                                            <Text className="zan_num">{$item.total}</Text>
                                                        </View>
                                                    </View>
                                                    <View className="re_foot">
                                                        <View className="zan_text_div">
                                                            <View className="zan_text">
                                                                <Text>{$item.text}</Text>
                                                            </View>
                                                        </View>
                                                    </View>
                                                </View>
                                            </Block>
                                        )
                                    })
                                }
                            </View>
                        </View>
                    </View>
                }
            </View>
        )
    }
}