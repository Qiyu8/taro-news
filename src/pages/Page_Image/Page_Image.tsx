import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Image, Swiper, SwiperItem } from '@tarojs/components'
import './Page_Image.scss'

export default class Page_Image extends Component {
    config: Config = {
        navigationBarTitleText: '图片',
        navigationBarTextStyle: 'black'
    }

    constructor() {
        super(...arguments)
        this.state = {
            isShow: true,
            autoplay: true,
            indicatorDots: false,
            datas: [{
              imgsrc: "../../asset/to_delete/picture.png",
              text: ["1/3 周杰伦演唱会一直被许多人列为必看的演唱会之一，而其中最被人们期待的就是点歌环节，现场随机抽取歌迷向周杰伦点歌现场随机抽取歌迷向周杰伦点歌现场随机抽取歌迷向周杰伦点歌"]
            }, {
              imgsrc: "../../asset/to_delete/picture.png",
              text: ["2/3 通讯事件暴露出中国企业管控合规风险的能力滞后、企业合规管理体系存在明显漏洞。在全球化进入新阶段，企业竞争进入到全球价值链竞争的当今时代，这是一个重大隐患"]
            }, {
              imgsrc: "../../asset/to_delete/picture.png",
              text: ["3/3 4月16日，美国商务部网站公告，7年内禁止美国企业与通讯开展任何业务往来。公告称，违反了2017年与美国政府达成的和解协议。当时，美国政府指控非法向伊朗和朝鲜出口。"]
            }]
        }
    }

    showDesc() {
        this.state.isShow = !this.state.isShow
    }

    render () {
        const {datas, autoplay, indicatorDots} = this.state
        const len = datas.length
        return (
            <View className="image_container">
                <Swiper className="swiper" autoplay={autoplay} indicatorDots={indicatorDots}>
                    {
                        datas.map((item, index) => {
                            return (
                                <SwiperItem>
                                    <View className="swiper_item">
                                        <Image className="image" src={item.imgsrc} onClick={this.showDesc}></Image>
                                        <View className="desc_div"></View>
                                        <View className="desc_divs">
                                            <Text className="desc_page">{index + 1}/{len}</Text>
                                            <View id="list">
                                                {
                                                    item.text.map((textValue, textIndex) => {
                                                        return (
                                                            <View>
                                                                <Text className="desc_text">{textValue}</Text>
                                                            </View>
                                                        )
                                                    })
                                                }
                                            </View>
                                        </View>
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