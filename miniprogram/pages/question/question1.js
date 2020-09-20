// miniprogram/pages/question/question1.js

Page({

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

 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      // //http://isure.stream.qqmusic.qq.com/C40000269pkB4fcQVa.m4a?guid=112719240&vkey=A4D4434E13AEA7C5A9FF722A26EC94695E6C7577D16CDDE63DFA7929C34FE357450EF36430931EBDE779C9C84AA521B3C723468240CA0EED&uin=0&fromtag=66
      // let innerAudioContext=wx.createInnerAudioContext()
      // innerAudioContext.src = 'http://isure.stream.qqmusic.qq.com/C40000269pkB4fcQVa.m4a?guid=112719240&vkey=A4D4434E13AEA7C5A9FF722A26EC94695E6C7577D16CDDE63DFA7929C34FE357450EF36430931EBDE779C9C84AA521B3C723468240CA0EED&uin=0&fromtag=66'
      // innerAudioContext.onPlay(() => {
      //   console.log('开始播放')
      // })
      // innerAudioContext.play()
      
      // innerAudioContext.onError((res) => {
      //   console.log(res.errMsg)
      //   console.log(res.errCode)
      // })
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

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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
