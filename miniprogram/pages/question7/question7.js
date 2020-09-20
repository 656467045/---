// pages/question3/question3.js
Page({
  checked1:function(options){
    this.setData({
      animated1:false
    })
    setTimeout(function(){
      wx.redirectTo({
        url: '../dayaojing/dayaojing',
      })
    },2000)
  },
  checked2:function(options){
    this.setData({
      animated2:false
    })
    setTimeout(function(){
      wx.redirectTo({
        url: '../qilunuo/qilunuo',
      })
    },2000)
  },
  checked3:function(options){
    this.setData({
      animated3:false
    })
    setTimeout(function(){
      wx.redirectTo({
        url: '../sanyuejing/sanyuejing',
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
    let bgmusic=wx.getBackgroundAudioManager()
    bgmusic.pause()
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    let bgmusic=wx.getBackgroundAudioManager()
    bgmusic.pause()
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