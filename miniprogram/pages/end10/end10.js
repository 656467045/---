// miniprogram/pages/end10/end10.js
let innerAudioContext = wx.createInnerAudioContext()

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  backhome:function(options){
    wx.redirectTo({
      url: '../index/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    innerAudioContext.autoplay = true
    innerAudioContext.src = 'http://202.113.92.242/cache/11/05/isure.stream.qqmusic.qq.com/8454a25bee927a7c4808727c57814b52/C40000269pkB4fcQVa.m4a?guid=112719240&vkey=E7E008CDC0F5055FEAA595E6D5BD96F75037706769D0C645E52D4ED11212D74BBC399C3BBFF1B02EBE8D09935CDF4927BD84663DDFF9A497&uin=0&fromtag=66'
    innerAudioContext.onPlay(() => {
      console.log('开始播放')
    })
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    innerAudioContext.stop()
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    innerAudioContext.stop()
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})