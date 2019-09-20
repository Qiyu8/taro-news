import Taro, { Component } from '@tarojs/taro'
import { View, Image, Input } from '@tarojs/components'
import './c_search_title.scss'

export default class SearchTitle extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            inputvalue: ""
        }
    }

    back() {
        Taro.navigateBack()
    }

    resetSearchValue() {
        this.state.inputvalue = ''
    }

    updateValue() {
        this.state.inputvalue = e.text
    }

    search() {

    }

    render() {
        const {inputvalue} = this.state
        return (
            <View className="container">
                <View className="search_bar_container">
                    <View className="image_search_back_div" onClick={this.back}>
                        <Image className="iamge_search_back" src="../../asset/img/Slice2.png"></Image>
                    </View>
                    <View className="search_div">
                        <View className="image_search_back_div_search" onClick={this.search}>
                            <Image className="c_search_search" src="../../asset/img/search_2.png"></Image>
                        </View>
                        <Input className="search" id="search" confirmType="search" name="search" value={inputvalue} placeholder="搜索" onInput={this.updateValue} onConfirm={this.search}></Input>
                        <View className="image_search_back_div_close" onClick={this.resetSearchValue}>
                            <Image className="image_search_result_close_size" src="../../asset/img/c_search_title/c_search_close.png"></Image>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
