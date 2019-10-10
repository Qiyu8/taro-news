import Taro, { Component, Config } from '@tarojs/taro'
import Page_Home from './pages/Page_Home/Page_Home'

import './app.scss'

class App extends Component {
    config: Config = {
        pages: [
            'pages/Page_Home/Page_Home',
            'pages/Page_Search/Page_Search',
            'pages/Page_Composite/Page_Composite',
            'pages/Page_Image/Page_Image',
            'pages/Page_Hot/Page_Hot',
            'pages/Page_Detail/Page_Detail',
            'pages/Page_Richtext/Page_Richtext',
            'pages/Page_Video/Page_Video',
        ],

        window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#fff',
            navigationBarTitleText: '首页',
            navigationBarTextStyle: 'black'
        },
        debug: true
    }

    componentDidMount() {

    }

    componentDidShow() {

    }

    componentDidHide() {

    }

    componentDidCatchError() {

    }

    render () {
        return (
            <Page_Home />
        )
    }
}

Taro.render(<App />, document.getElementById('app'))