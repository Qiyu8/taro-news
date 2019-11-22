# taro-news多端统一实例
以新闻类App为例，使用Taro编写的微信小程序、快应用两端统一案例，无论从组件、样式还是API而言，小程序和快应用之间的差异是非常明显的，小程序依附于微信生态平台，组件使用webview技术渲染底层Dom，而快应用依附于手机内嵌引擎平台，使用原生渲染，它们之间的差异就好比react.js和react-native，所以在写这两个端的统一代码时尤其需要注意一致性的问题。下面是开发过程中的经验总结。

### 一、编辑器的选择

**【Taro开发】**推荐使用vscode作为编辑器，安装好react的语法提示插件就可以开始开发了。

**【微信小程序调试】**推荐微信小程序IDE，这个IDE还是非常不错的，web的渲染方式，所见即所得，和真机的差别不大。

**【快应用调试】**推荐官方IDE进行web仿真，保证UI大致准确，然后使用华为IDE进行真机调试，里面有投屏功能还是比较方便的,华为IDE的智能检查相对也更加完善，总体的调试流程如下所示：

![](https://ss.csdn.net/p?https://mmbiz.qpic.cn/mmbiz_jpg/ib0PHklicc9JNNPSXqL6jQciblbvLkA6BuIkONajpy4MJW0ATj6ArAibhkKicx96gL9iaQ0bWCAmn27iaVibBbW524m0YQ/640?wx_fmt=jpeg)

### 二、初始化工程选择

因为Taro的官方Hello World例子已经适配了所有端，所以基于这个初始工程进行开发。

### 三、开发顺序

总的来说，快应用的组件和样式是微信小程序的子集，所以建议先开发快应用，快应用开发的比较完整时，再适配小程序端的样式，在快应用开发过程中，可以不用频繁地去真机上查看效果，而是一次性开发完功能后，通过官方IDE的【界面预览】功能将样式调整的差不多，再去到调试器上，处理那些在【预览】功能上无法展示出来的问题。虽然【预览】功能只是一种基于web上的展示，但可以帮助我们在项目初期，迅速完成ui上的构建。

### 四、开发心得

- [x] 样式篇：

  a.快应用默认采用弹性布局，而微信小程序默认采用盒式布局，所以在外围容器需要显示指定弹性布局模式

  ```
  dispaly: flex;
  ```

  b.大部分快应用样式都不支持percentage百分比模式，少数支持%的样式有width、height、 background-size、 background-position 。

  c.一些小程序中喜闻乐见的样式和选择器快应用是不支持的，比如float、::after、::before，同理快应用也有一些独有的样式，比如font-variant、direction、text-transform、outline-color、outline-style等，这些样式在处理小程序和快应用的兼容性问题上有奇效，因为各自的特色在各个端可以表现，而在另一个端会被屏蔽。

- [x] 组件篇：

  参考 https://github.com/NervJS/taro/blob/master/docs/quick-app.md 

   如果想实现多端一致，请尽量在Taro里面使用仿真度高的组件，比如Swiper、Image、Text、Input、Label、Picker、Video、Map、Camera、Canvas、Slider、Textarea等 

### 五、运行效果

- 微信小程序端：

```
yarn dev:weapp
```

![](https://doc.quickapp.cn/tutorial/overview/images/img1.gif)

- 快应用端：

```
yarn dev:quickapp
```

![](https://clubimg.club.vmall.com/data/attachment/forum/201806/25/163146f5luqtfmwxejtoku.png)

### 六、小结

在前期的开发中，微信小程序和快应用的兼容处理让我们花了不少的时间。但随着一点点的熟悉两者之间的差异，以及Taro的不断改进升级，开发和调试效率也越来越高。


