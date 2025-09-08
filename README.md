# 移动软件开发实验项目

本仓库用于存储中国海洋大学夏季小学期《移动软件开发》课程的实验项目代码及相关文档。

## 实验一：微信小程序用户信息获取

### 项目概述
本实验实现了一个微信小程序基础功能模块，核心定位为 “微信用户基础信息的授权获取与可视化展示”，不仅完成 “获取头像 + 昵称” 的核心需求，更围绕小程序开发的基础流程（项目创建、视图设计、逻辑开发、调试预览）构建了完整的实践链路，为后续复杂功能开发提供标准化的入门范式。

该模块通过调用微信小程序官方提供的getUserInfo相关 API 接口，严格遵循微信平台的用户授权规范，实现了从 “授权请求 - 信息获取 - 数据处理 - 前端渲染” 的全流程闭环：首先通过配置button组件的open-type="getUserInfo"属性，触发微信内置的用户授权弹窗，确保用户拥有信息是否提供的自主选择权；待用户点击 “允许” 后，通过bindgetuserinfo事件绑定，将微信返回的用户信息（包含头像 URL、昵称等结构化数据）传递至自定义逻辑函数；随后在 JavaScript 层对数据进行解析，提取avatarUrl（头像资源路径）与nickName（用户昵称）字段，并借助小程序 “数据驱动视图” 的核心机制，调用setData()方法更新页面动态数据，最终在前端通过<image>和<text>组件完成头像（圆形自适应展示）与昵称（适配不同设备的字体大小）的可视化呈现。

### 以下是相关图片
![](https://github.com/nobody45678/-/blob/main/image/%E5%AE%9E%E9%AA%8C%E4%B8%80/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-08-25%20203509.png)
![](https://github.com/nobody45678/-/blob/main/image/%E5%AE%9E%E9%AA%8C%E4%B8%80/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-08-25%20203605.png)
![](https://github.com/nobody45678/-/blob/main/image/%E5%AE%9E%E9%AA%8C%E4%B8%80/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-08-25%20203646.png)
![](https://github.com/nobody45678/-/blob/main/image/%E5%AE%9E%E9%AA%8C%E4%B8%80/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-08-25%20203701.png)
![](https://github.com/nobody45678/-/blob/main/image/%E5%AE%9E%E9%AA%8C%E4%B8%80/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-08-25%20203714.png)

## 实验二：微信小程序实时天气获取

### 项目概述
本实验实现了一个微信小程序核心功能模块，核心定位为 “第三方天气 API 数据对接与多维度天气信息可视化展示”，不仅完成 “城市选择 - 实时天气获取 - 天气详情展示” 的核心需求，更围绕小程序网络开发的关键流程（API 准备、域名配置、网络请求、动态数据绑定）构建了完整的实践链路，为后续各类网络交互类小程序开发提供可复用的技术范式。

该模块通过调用和风天气第三方 API 接口，严格遵循微信小程序网络通信规范与第三方接口调用规则，实现了从 “城市选择 - 数据请求 - 数据解析 - 前端渲染” 的全流程闭环：首先通过配置<picker mode="region">组件实现省市区三级联动选择，用户切换城市时触发regionChange事件，获取选中城市的 “市” 级名称作为后续查询的核心参数（规避非直辖市区级数据缺失问题）；随后调用微信小程序官方wx.request网络接口，向和风天气weather/now接口发送请求 —— 请求中携带必填的location（城市名称）与key（个人认证密钥）参数，同时在小程序后台提前配置接口域名至 “request 合法域名” 白名单，确保网络请求合规；待接口返回 JSON 格式的天气数据后，在 JavaScript 层解析数据结构，提取HeWeather6[0].now中的核心字段（如tmp温度、cond_code天气代码、hum湿度等），并借助小程序 “数据驱动视图” 机制，通过this.setData()将解析后的数据更新至now对象；最终在前端通过<text>组件展示温度与天气状况、<image>组件加载对应天气代码的图标（圆形自适应）、<view>Flex 布局展示湿度 / 气压 / 风向等详情，同时设置初始占位数据（如温度 0℃、天气 “未知”），避免网速受限情况下页面出现空白，确保用户体验的完整性。

### 以下是相关图片
![](https://github.com/nobody45678/-/blob/main/image/%E5%AE%9E%E9%AA%8C%E4%BA%8C/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-08-26%20112540.png)
![](https://github.com/nobody45678/-/blob/main/image/%E5%AE%9E%E9%AA%8C%E4%BA%8C/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-08-26%20112549.png)
![](https://github.com/nobody45678/-/blob/main/image/%E5%AE%9E%E9%AA%8C%E4%BA%8C/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-08-26%20112606.png)

##实验三：微信小程序云开发（垃圾分类识别）

###项目概述
本实验实现了一个微信小程序综合功能模块，核心定位为 “微信小程序云开发 + 百度图像识别的垃圾分类查询与识别系统”，不仅完成 “文本搜索垃圾分类、摄像头拍摄识别垃圾分类” 的核心需求，更围绕小程序云开发全流程（云环境搭建、云函数部署、云数据库操作）与第三方 AI 接口（百度图像识别）对接逻辑，构建了 “前端交互 - 云服务支撑 - AI 识别 - 数据存储” 的完整技术链路，为复杂小程序开发中 “云 + 端 + 第三方服务” 的协同应用提供实践范式。

### 以下是相关图片
![](https://github.com/nobody45678/-/blob/main/image/%E5%AE%9E%E9%AA%8C%E4%B8%89/38daf263943e9bdd95e998dab1ab0db1.jpg?raw=true)
![](https://github.com/nobody45678/-/blob/main/image/%E5%AE%9E%E9%AA%8C%E4%B8%89/da11c48354a45f20be9fd6d09198e001.jpg?raw=true)
![](https://github.com/nobody45678/-/blob/main/image/%E5%AE%9E%E9%AA%8C%E4%B8%89/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-09-01%20164847.png?raw=true)
![](https://github.com/nobody45678/-/blob/main/image/%E5%AE%9E%E9%AA%8C%E4%B8%89/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-09-01%20164905.png?raw=true)

##实验四：微信小程序视频播放​

###项目概述​
本实验实现了一个微信小程序媒体交互模块，核心定位为 “小程序视频播放 + 弹幕交互 + 列表切换的多媒体展示系统”，不仅完成 “视频加载播放、弹幕发送、列表切换视频” 的核心需求，更围绕小程序媒体组件开发（组件应用）、事件交互（点击 / 输入绑定）、数据驱动视图（wx:for 循环、setData 更新）的关键流程，构建了 “视频控制 - 弹幕交互 - 列表管理” 的完整技术链路，为后续多媒体类小程序（如教育视频、生活 vlog）开发提供可复用的实践范式。​
该模块通过调用微信小程序组件及配套 API，严格遵循小程序媒体交互规范，实现了从 “视频加载 - 弹幕交互 - 列表切换” 的全流程闭环：首先在 WXML 中配置组件，通过 controls 显示控制栏、enable-danmu 启用弹幕、danmu-btn 显示弹幕按钮，同时用 id="myVideo" 标识组件以获取实例；随后搭建弹幕交互区，用包裹输入框（bindinput 绑定 getDanmu 函数实时获取内容）与发送按钮（bindtap 绑定 sendDanmu 函数），结合 getRandomColor 工具函数生成随机弹幕颜色，调用 videoCtx.sendDanmu () 实现弹幕发送；再通过 wx:for 循环渲染 videoList 数组，为每个列表项绑定 playVideo 函数，点击时先调用 videoCtx.stop () 停止当前视频，再通过 data-url 获取新视频地址，用 setData 更新 src 后调用 videoCtx.play () 播放新视频；最后在 index.wxss 中用 Flex 布局、rpx 适配单位优化界面，确保视频占满屏幕宽度、弹幕区横向排列、列表项带分隔边框，兼顾美观与多设备适配。

###以下是相关图片


![](https://github.com/nobody45678/-/blob/main/image/%E5%AE%9E%E9%AA%8C%E5%9B%9B/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-09-02%20152047.png?raw=true)
![](https://github.com/nobody45678/-/blob/main/image/%E5%AE%9E%E9%AA%8C%E5%9B%9B/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-09-02%20152144.png?raw=true)
![](https://github.com/nobody45678/-/blob/main/image/%E5%AE%9E%E9%AA%8C%E5%9B%9B/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-09-02%20152224.png?raw=true)
![](https://github.com/nobody45678/-/blob/main/image/%E5%AE%9E%E9%AA%8C%E5%9B%9B/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-09-02%20152252.png?raw=true)
##实验五：第一个 HarmonySO 应用

###项目概述

本实验实现了一个 HarmonyOS 基础应用，核心定位为 “具有页面跳转与返回功能的简单应用”，不仅完成 “页面构建、按钮交互、页面间导航” 的核心需求，更围绕 HarmonyOS 应用开发的基础流程（工程创建、UI 布局设计、页面路由实现、调试预览）构建了完整的实践链路，为后续复杂 HarmonyOS 应用开发提供标准化的入门范式。

该应用通过使用 ArkUI 框架的声明式开发范式，遵循 HarmonyOS 应用开发规范，实现了从 “工程搭建 - 页面设计 - 跳转逻辑 - 预览运行” 的全流程闭环：首先在 DevEco Studio 中创建基于 ArkTS 的 Empty Ability 工程，配置兼容的 SDK 版本等参数，自动生成基础工程结构；随后在 pages 目录下创建两个页面文件（Index.ets 和 Second.ets），采用 Row 和 Column 线性布局，分别添加 Text 组件展示文本信息、Button 组件作为交互入口，并设置组件的样式（字体大小、权重、颜色、尺寸等）；接着配置 main_pages.json 文件完成第二个页面的路由注册，导入 router 模块，在按钮的 onClick 事件中通过 router.pushUrl 实现从第一个页面到第二个页面的跳转，通过 router.back 实现从第二个页面返回第一个页面；最后利用预览器查看效果，

###以下是相关图片

![](https://github.com/nobody45678/-/blob/main/image/%E5%AE%9E%E9%AA%8C%E4%BA%94/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-09-08%20144553.png?raw=true)
![](https://github.com/nobody45678/-/blob/main/image/%E5%AE%9E%E9%AA%8C%E4%BA%94/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-09-08%20144557.png?raw=true)
