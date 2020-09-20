// pages/question3/question3.js
let innerAudioContext = wx.createInnerAudioContext()
Page({
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
    innerAudioContext.src = 'http://ws.stream.qqmusic.qq.com/C400001FE02q1UFvWO.m4a?guid=112719240&vkey=5FE7543CF01863708D15802EEAE2BAB98697FC02C70F7236ABC10BB385BA460E8C94A081376C74460E1B705681D7E9BFEA4605A1613FCE78&uin=0&fromtag=66'
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