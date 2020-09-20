# 云开发 quickstart

这是云开发的快速启动指引，其中演示了如何上手使用云开发的三大基础能力：

- 数据库：一个既可在小程序前端操作，也能在云函数中读写的 JSON 文档型数据库
- 文件存储：在小程序前端直接上传/下载云端文件，在云开发控制台可视化管理
- 云函数：在云端运行的代码，微信私有协议天然鉴权，开发者只需编写业务逻辑代码

## 参考文档

- [云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)

作者：六号棉花糖

日期：2020.9.20

版本：1.0.0


项目名称：基于小程序和云开发的小游戏-幻想神隐录

项目类型：小程序，文字游戏

项目目标：仅供娱乐

项目状态：未上线

使用方法：加入测试人员，扫码使用

主要代码：
首页：
<view class="container">

<navigator bindtap="innerchatroom" id="chatroom" url="../im/room/room" open-type="navigate" class="uploader-text">
      <text>评论留言版</text>
  </navigator>
<view id="atfirst"></view>

<button id="toplay" bindtap="changewebtoplay">点击开始</button>
</view>

js部分：

onLoad: function() {
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
      return
    }
    
    innerAudioContext.autoplay = false
    innerAudioContext.src = '？'
    innerAudioContext.onPlay(() => {
      console.log('开始播放')
    })
    innerAudioContext.play()
    
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
  },
  onGetUserInfo: function(e) {
    if (!this.data.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      })
    }
  },
  changewebtoplay:function(){
      // wx.stopVoice();
      wx.redirectTo({
        url: '../question/question1',
      })
      innerAudioContext.stop()
  },
  innerchatroom:function(){
    innerAudioContext.stop()
  },

单个问题界面：
<view id="backgroundscenery">
  <view id="questionbox">
  <text>欢迎你，初入幻想之人</text>
  <text>随着旅行团旅游的你和大伙走散了，你只身来到一所未知的神庙，在此触碰到幻想的境界，你将成为幻想乡中的一员，现在来选择你的种族吧：</text>
  </view>
  <text class="anws {{animated1?'':'becheck'}}" bindtap="checked1" >妖精</text>
  <text class="anws {{animated2?'':'becheck'}}" bindtap="checked2">人类</text>
  <text class="anws {{animated3?'':'becheck'}}" bindtap="checked3">妖怪</text>
</view>

js部分：
checked1:function(options){
    this.setData({
      animated1:false
    })
    setTimeout(function(){
      wx.redirectTo({
        url: '../question2/question2',
      })
    },2000)
  },
  checked2:function(options){
    this.setData({
      animated2:false
    })
    setTimeout(function(){
      wx.redirectTo({
        url: '../question5/question5',
      })
    },2000)
  },
  checked3:function(options){
    this.setData({
      animated3:false
    })
    setTimeout(function(){
      wx.redirectTo({
        url: '../question5/question5',
      })
    },2000)
  },
  /**
   * 页面的初始数据
   */
  data: {
      animated1:true,
      animated2:true,
      animated3:true
  },

人物界面：
    <view id="talkbox1" style="position:fixed;z-index:999;color:#ff7675;font-size:1.5rem">你遇见了:雾雨魔理沙</view>
    <image bindtap="checked2" mode="scaleToFill" class="backgroundscenery" src="cloud://xly-ugom6.786c-xly-ugom6-1302909523/魔理沙.jpg"><view class="uploader"> </view></image>
    <navigator style="z-index:999" url="../im/room/room" open-type="navigate" class="uploader-text"><image style="top:0.5rem;right:1rem;z-index:999;position:fixed;height:50px;width:50px" src="cloud://xly-ugom6.786c-xly-ugom6-1302909523/聊天.png"></image>
    </navigator>
    <view id="talkbox2" class="{{animated?'':'anima1'}}" >
    <text style="display:block;font-size:1.5rem;color:orange">雾雨魔理沙：</text>
    <text style="font-size:1.2rem;color:#fdcb6e;text-indent:2rem">虽然这本书原本是属于你的啦，但至于为什么现在在我手上，这.....这本书可不是我偷的哦，魔法师的事情怎么能叫偷呢？</text>
    </view>
    <image bindtap="checked1" style="bottom:0.5rem;right:1rem;z-index:999;position:fixed;height:50px;width:50px;" src="cloud://xly-ugom6.786c-xly-ugom6-1302909523/下一步.png"></image>
    <text style="top:calc(.5rem + 50px);;right:1rem;z-index:999;position:fixed;height:50px;width:50px;font-size:.5rem;color:#e55039;" >评论留言</text>

    js部分：

    checked1:function(options){
    wx.redirectTo({
      url: '../question8/question8',
    })
  },
  checked2:function(options){
    this.setData({
      animated:false
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    animated:true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    innerAudioContext.autoplay = true
    innerAudioContext.src = '？'
    innerAudioContext.onPlay(() => {
      console.log('开始播放')
    })
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
  },
留言板部分：
<view class="container">
  <view class="uploader">
    <navigator url="./room/room" open-type="navigate" class="uploader-text">
      <text>留言板</text>
    </navigator>
  </view>
</view>
js部分:
data: {
    avatarUrl: './user-unlogin.png',
    userInfo: null,
    logged: false,
    takeSession: false,
    requestResult: '',
    chatRoomCollection: 'chatroom',
    chatRoomGroupId: 'demo',
    chatRoomGroupName: '幻想留言板',

    
    onGetUserInfo: null,
    getOpenID: null,
  },

  onLoad: function() {
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
    
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })

    this.setData({
      onGetUserInfo: this.onGetUserInfo,
      getOpenID: this.getOpenID,
    })

    wx.getSystemInfo({
      success: res => {
        console.log('system info', res)
        if (res.safeArea) {
          const { top, bottom } = res.safeArea
          this.setData({
            containerStyle: `padding-top: ${(/ios/i.test(res.system) ? 10 : 20) + top}px; padding-bottom: ${20 + res.windowHeight - bottom}px`,
          })
        }
      },
    })
  },

  getOpenID: async function() {
    if (this.openid) {
      return this.openid
    }

    const { result } = await wx.cloud.callFunction({
      name: 'login',
    })

    return result.openid
  },

  onGetUserInfo: function(e) {
    if (!this.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      })
    }
  },

  onShareAppMessage() {
    return {
      title: '幻想聊天室',
      path: '/pages/im/room/room',
    }
  },
})