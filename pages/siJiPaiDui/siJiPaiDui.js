// pages/siJiPaiDui/siJiPaiDui.js
var siJiPaiDui;
var rootIP;
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    siJiPaiDui=this;
    rootIP=getApp().getRootIP();
    let ddId=options.ddId;
    let qyh=options.qyh;
    //let ddId=171;
    //let qyh="yuejiazhuang";
    siJiPaiDui.setData({ddId:ddId,qyh:qyh});
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    siJiPaiDui.setData({backSign:'<'});
    siJiPaiDui.getPaiDuiXinXiByDdId();
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

  },
  getPaiDuiXinXiByDdId:function(){
    let ddId=siJiPaiDui.data.ddId;
    let qyh=siJiPaiDui.data.qyh;
    wx.request({
      url: rootIP+"getPaiDuiXinXiByDdId",
      method: 'POST',
      data: {ddId:ddId,qyh:qyh},
      header: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      success: function (res) {
        let data=res.data;
        let message=data.message;
        if(message=="ok"){
          let paiDuiJiLu=data.paiDuiJiLu;
          siJiPaiDui.setData({paiDuiJiLu:paiDuiJiLu});
        }
      }
    })
  },
  goPage:function(e){
    let qyh=e.currentTarget.dataset.qyh;
    let page=e.currentTarget.dataset.page;
    wx.redirectTo({
      url: '/pages/'+page+'/'+page+'?qyh='+qyh,
    })
  }
})