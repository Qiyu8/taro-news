import Taro, { Component } from '@tarojs/taro'
import { View, Text, Block, Image } from '@tarojs/components'
import Single from '../../component/c_news_single/c_news_single'
import './Page_Detail.scss'

export default class Page_Detail extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            headTitle: "华为PC的光荣与梦想--MateBook X Pro",
            secondTitle: "极客公园",
            secondTitleLast: "2018/7/11 10:23",
            paragramFirst: "“之前是拼命给渠道推货，现在是渠道拼命找我要货。”负责华为 PC 产品销售的老姜虽然比以前忙了不少，但心里却乐开了花。他说，“市场对 MateBook X Pro 的反应，有点像当年华为全面打开智能手机市场的功臣 Mate 7 了。”初代产品问世两年后的2018 年 2 月底，同样是在巴塞罗那，华为用一台四边超窄边框的全面屏 MateBook X Pro 惊艳了世人。",
            middleImage: "../../asset/to_delete/p_news_four_p1.png",
            paragramMiddle: "MateBook X Pro 毫不意外地成了当下最好的笔记本电脑之一，自发布以来持续收割着用户和媒体的好评，最好的屏幕，最好的外放音效，一气呵成的指纹解锁，便携小巧的电源。Windows PC 阵营里除了微软的 Surface，其他老牌大厂无一堪战。",
            source: "内容来自网易科技",
            recommend: "推荐阅读",
            recommendTitle: "热门评论",
            unZanImage: "../../asset/img/p_news_four_icon1.png",
            zanImage: "../../asset/img/p_news_four_icon2.png",
            singles: [{
              url: "/pages/Page_Image/Page_Image",
              title: "全面屏笔电首款 5G商用芯片，华为MWC秀「肌肉」",
              imgsrc: "./to_delete/p_news_four_p2.png",
              footword: "一点咨询"
            }, {
              url: "/pages/Page_Composite/Page_Composite",
              title: "Mate 10 系列抢先上手：全面屏、AI、保时捷设计",
              imgsrc: "./to_delete/p_news_four_p3.png",
              footword: "网易"
            }, {
              url: "/pages/Page_Image/Page_Image",
              title: "二季度中国智能手机市场华为领跑，市场份额领先",
              imgsrc: "./to_delete/p_news_four_p4.png",
              footword: "新浪网"
            }],
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
            tempTotal = parseInt(items.tatol) + 1
        } else {
            tempTotal = parseInt(items.tatol) - 1
        }
        items.total = tempTotal.toString()
        items.isPrased = !items.isPrased
        this.setState({
            recommendors: this.state.recommendors
        })
    }

    render() {
        const {recommendors, singles, zanImage, unZanImage, headTitle, secondTitle, secondTitleLast, paragramFirst, middleImage, paragramMiddle, source, recommend, recommendTitle} = this.title
        return (
            <View className="detail_contaioner">
                <View className="main_content">
                    <View className="title">
                        <Text className="title_text">
                            {headTitle}
                        </Text>
                    </View>

                    <View className="second_title">
                        <Text className="second_title_text">{secondTitle}</Text>
                        <Text className="second_title_text">{secondTitleLast}</Text>
                    </View>

                    <View className="first_paragram">
                        <Text className="first_paragram_text">{paragramFirst}</Text>
                    </View>

                    <Image className="img" src={middleImage}></Image>

                    <View className="second_paragram">
                        <Text className="first_paragram_text">
                            {paragramMiddle}
                        </Text>
                    </View>

                    <View className="source">
                        <Text className="source_text">
                            {source}
                        </Text>
                    </View>

                    <View className="single_items">
                        <View className="single_item_recommend">
                            <Text className="single_item_recommend_text">
                                {recommend}
                            </Text>
                        </View>
                    </View>
                    {
                        singles.map(($items, $idx) => {
                            return (
                                <Block>
                                    <Single url ={$items.url} title={$items.title} imgsrc={$items.imgsrc} footword={$items.footword} nounderline={$idx != singles.length -1 ? '0': '1'}></Single>
                                </Block>
                            )
                        })
                    }
                </View>

                <View className="recommend">
                    <Text className="recommend_text">{recommendTitle}</Text>
                    <View className="recommend_div">
                        {
                            recommendors.map(($item, $idx) => {
                                return (
                                    <Block>
                                        <View className="recommend1">
                                            <View className="re_head">
                                                <Image className="re_head_img" src={$item.touxing}></Image>
                                                <View className="name_time">
                                                    <Text className="name">{$item.name}</Text>
                                                    <Text className="time">{$item.time}</Text>
                                                </View>
                                                <View className="zan" onClick={this.zanClick.bind(this, $idx)}>
                                                    {!$item.isPrased &&<Image className="zan_img" src={unZanImage}></Image>}
                                                    {$item.isPrased &&<Image className="zan_img" src={zanImage}></Image>}
                                                    <Text className="zan_num">{$item.total}</Text>
                                                </View>
                                            </View>

                                            <View className="re_foot">
                                                <View className="zan_text_div">
                                                    <View className="zan_text">
                                                        <Text>{$item.Text}</Text>
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
        )
    }
}