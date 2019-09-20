import Taro, { Component } from '@tarojs/taro'
import { View, Text, Video } from '@tarojs/components'
import './Page_Composite.scss'

const videoContext = Taro.createAudioContext('video');

export default class Page_Composite extends Component {
    config: Config = {
        navigationBarTitleText: '视图新闻',
        navigationBarTitleStyle: 'black'
    }

    constructor() {
        super(...arguments)
        this.state = {
            videoSource: 'https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/cae-legoup-video-target/93be3d88-9fc2-4fbd-bd14-833bca731ca7.mp4s',
            poster: "../../asset/to_delete/p_news_three_p2.png",
            title: '"数"精彩 还看上合青岛峰会',
            source: "手机控",
            time: "2015/4/13 10:23",
            programOne: "10日，青岛峰会进入日程最密集的一天。习近平主席当天多个场合的讲话，金句多、干货足、分量重。让我们用一组数字详细梳理一下。",
            programTwo: "本次峰会也是上海合作组织扩容后举行的首次峰会。在先后主持小范围和大范围峰会会谈时，习近平都表达了对印度和巴基斯坦两国以成员国身份参加峰会表示欢迎。",
            from: "内容来自***供应商",
            recommandText: "推荐阅读"
        }
    }

    click() {
        Taro.navigateTo({
            url: '/Page_Video'
        })
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

    render() {
        const { title, source, time, programOne, videoSource, poster, programTwo, from, recommandText } = this.state
        return (
            <View className="container">
                <View className="content">
                    <View className="title">
                        <Text className="title_text">{title}</Text>
                    </View>
                    <View className="second_title">
                        <Text className="second_title_text">{source}</Text>
                        <Text className="second_title_text">{time}</Text>
                    </View>
                    <View className="first_program">
                        <Text className="first_program_text">{programOne}</Text>
                    </View>
                    <Video id="video" className="img_stack img_main" src={videoSource} poster={poster} onEnded={this.finish} onError={this.error}
                        onTimeUpdate={this.eventTimeupdate} onFullscreenChange={this.eventFullscreenchange}></Video>
                    <View className="second_program">
                        <Text className="first_program_text">{programTwo}</Text>
                    </View>
                    <View className="foot">
                        <Text className="font_text">{from}</Text>
                    </View>
                    <View className="recommand">
                        <Text className="font_text">{recommandText}</Text>
                    </View>
                </View>
            </View>
        )
    }
}