// pages/question3/question3.js
let innerAudioContext = wx.createInnerAudioContext()
Page({
  checked1:function(options){
    wx.redirectTo({
      url: '../question5/question5',
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
    innerAudioContext.src = 'http://ws.stream.qqmusic.qq.com/C400002Xeaum0F80iY.m4a?guid=112719240&vkey=A39839930AEF25EC721149DBAE179319F318DB93582A27DFA2CA229D7A77B953C2B08A45FB752B461E79419B6FD22AEA3C7998714ED4F75E&uin=0&fromtag=66'
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