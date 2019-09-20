import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Video } from '@tarojs/components'
import './Page_Video.scss'

const videoContext = Taro.createAudioContext('video')

export default class Page_Video extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            autoPlay: false,
            headTitle: "MTV音乐盛典深圳举行 许魏洲再摘年度新人奖",
            source: "第三方媒体",
            time: "2018/1/2",
            count: "1.3万次播放",
            recommend: "推荐观看",
            videoIndex: 0,
            videoSource: "https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/cae-legoup-video-target/93be3d88-9fc2-4fbd-bd14-833bca731ca7.mp4",
            poster: "./to_delete/Bitmap.png",
            news: [
                { directUrl: "/Page_Video", url: 'https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/cae-legoup-video-target/93be3d88-9fc2-4fbd-bd14-833bca731ca7.mp4', title: "湖下冰岛北极光照片宛若仙境", from: "第三方媒体", img: "./to_delete/1.png", time: "05:20", poster: "./to_delete/1.png" },
                { directUrl: "/Page_Video", url: 'https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/cae-legoup-video-target/93be3d88-9fc2-4fbd-bd14-833bca731ca7.mp4', title: "安第斯山脉：带你去隐秘之境", from: "第三方媒体", img: "./to_delete/2.png", time: "05:20", poster: "./to_delete/2.png" },
                { directUrl: "/Page_Video", url: 'https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/cae-legoup-video-target/93be3d88-9fc2-4fbd-bd14-833bca731ca7.mp4', title: "冰雪召唤：阿尔卑斯山脉下的滑雪少年", from: "第三方媒体", img: "./to_delete/2.png", time: "05:20", poster: "./to_delete/2.png" }
            ]
        }
    }

    prepared() {
        console.log('视频连接成功')
        Taro.showToast({
            title: '视频连接成功',
            icon: 'success',
            duration: 2000
        })
    }

    start = () => {
        console.log('开始播放')
        Taro.showToast({
            title: '开始播放',
            icon: 'success',
            duration: 2000
        })
    }

    pause = () => {
        console.log('暂停播放')
        Taro.showToast({
            title: '暂停播放',
            icon: 'success',
            duration: 2000
        })
    }

    finish = () => {
        console.log('结束播放')
        Taro.showToast({
            title: '结束播放',
            icon: 'success',
            duration: 2000
        })
        this.btnpause();
    }

    error = () => {
        console.log('播放错误')
        Taro.showToast({
            title: '播放错误',
            icon: 'success',
            duration: 2000
        })
    }

    eventSeeking = (e) => {
        let msg = '事件：Seeking to ' + e.currenttime;
        console.log(msg);
        Taro.showToast({
            title: msg,
            icon: 'success',
            duration: 2000
        })
    }

    eventSeeked = (e) => {
        let msg = '事件：Seeked to ' + e.currenttime;
        console.log(msg);
        Taro.showToast({
            title: msg,
            icon: 'success',
            duration: 2000
        })
    }

    eventTimeupdate = (e) => {
        let msg = '事件： TimeUpdate : ' + e.currenttime;
        console.log(msg);
        if (e.currenttime === 10) {
            videoContext.requestFullScreen()
        } else if (e.currenttime === 20) {
            videoContext.exitFullScreen()
        }
    }

    eventFullscreenchange = (e) => {
        let msg = '事件： Fullscreenchange : ' + e.fullscreen;
        console.log(msg);
        Taro.showToast({
            title: msg,
            icon: 'success',
            duration: 2000
        })
    }

    btnstart = () => {
        videoContext.play()
        Taro.showToast({
            title: '点击播放按钮，开始播放',
            icon: 'success',
            duration: 2000
        })
    }

    btnpause = () => {
        videoContext.pause()
        Taro.showToast({
            title: '点击播放按钮，暂停播放',
            icon: 'success',
            duration: 2000
        })
    }

    btnseek = () => {
        videoContext.seek(60)
        Taro.showToast({
            title: '跳转60',
            icon: 'success',
            duration: 2000
        })
    }

    btnEnterFull = () => {
        videoContext.requestFullScreen()
        Taro.showToast({
            title: 'requestFullScreen',
            icon: 'success',
            duration: 2000
        })
    }

    btnExitFull = () => {
        videoContext.exitFullScreen()
        Taro.showToast({
            title: 'exitFullScreen',
            icon: 'success',
            duration: 2000
        })
    }

    clickToPlay(index) {
        const curNew = this.state.news[index]
        Taro.navigateTo({
            url: `${curNew.directUrl}?videoSource=${curNew.url}&poster=${curNew.poster}&videoIndex=${index}&autoPlay=true`
        })
    }

    render() {
        const { autoPlay, headTitle, source, TimeRanges, count, recommend, videoSource, poster, news} = this.state
        return(
            <View className="video_container">
                <View className="video_play">
                    <Video id="video" className="video" autoPlay={autoPlay} src={videoSource} poster={poster} onFinish={this.finish} onError={this.error}
                        onTimeUpdate={this.eventTimeupdate} onFullscreenChange={this.eventFullscreenchange}></Video>
                </View>
                <View className="video_text" style="margin-left: 33px">
                    <View className="head_div">
                        <Text className="head_title">{headTitle}</Text>
                        <View className="foot_div">
                            <Text className="foot">{source}</Text>
                            <Text className="foot">{time}</Text>
                            <Text className="foot">{count}</Text>
                        </View>
                    </View>

                    <View className="recommend_play">
                        <Text className="foot">{recommend}</Text>
                    </View>
                    {
                        news.map(($item, $idx) => {
                            return (
                                <View className="img_container" onClick={this.clickToPlay.bind(this,$idx)}>
                                    <View className="text">
                                        <Text className="head">{$item.title}</Text>
                                        <Text className="from">{$item.from}</Text>
                                    </View>

                                    <View className="stack"> 
                                        <Image className="image" src={$item.img}></Image>
                                        <View className="timebg">
                                            <Text className="time">{$item.time}</Text>
                                        </View>
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        )
    }
}