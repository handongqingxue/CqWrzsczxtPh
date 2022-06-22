// pages/zhiJianJiLu/zhiJianJiLu.js
var zhiJianJiLu;
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
    zhiJianJiLu=this;
    rootIP=getApp().getRootIP();
    let qyh="yuejiazhuang";
    zhiJianJiLu.setData({qyh:qyh});
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    zhiJianJiLu.getZhiJianJiLuList();
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
  getZhiJianJiLuList:function(){
    //let ddh=zhiJianJiLu.data.ddh;
    let ddh="";
    let yongHu=wx.getStorageSync('yongHu');
    wx.request({
      url: rootIP+"getZhiJianJiLuList",
      method: 'POST',
      data: { ddh:ddh,qyh:'yuejiazhuang'},
      header: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      success: function (res) {
        console.log(res);
        let data=res.data;
        let zjjlList=data.zjjlList;
        zhiJianJiLu.setData({zjjlList:zjjlList});
        /*
        let message=data.message;
        console.log("message==="+message)
        if(message=="ok"){
          let dingDan=data.dingDan;
          siJiDingDan.setData({dingDan:dingDan,dzjDdztMc:data.dzjDdztMc,showDdxxV:true});
        }
        else{
          siJiDingDan.setData({noDdInfo:data.info,showDdxxV:false});
        }
        */
      }
    })
  },
  goPage:function(e){
    let qyh=siJiDingDan.data.qyh;
    let page=e.currentTarget.dataset.page;
    wx.redirectTo({
      url: '/pages/'+page+'/'+page+'?qyh='+qyh,
    })
  }
})