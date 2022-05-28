// pages/siJiDingDanLieBiao/siJiDingDanLieBiao.js
var siJiDingDan;
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
    siJiDingDan=this;
    rootIP=getApp().getRootIP();
    //let qyh=options.qyh;
    let qyh="yuejiazhuang";
    siJiDingDan.setData({qyh:qyh});
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    siJiDingDan.setData({backSign:'<'});
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
  getDingDanByDdh:function(){
    let qyh=siJiDingDan.data.qyh;
    let ddh=siJiDingDan.data.ddh;
    wx.request({
      url: rootIP+"getDingDanByDdh",
      method: 'POST',
      data: { ddh:ddh,qyh:qyh},
      header: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      success: function (res) {
        console.log(res);
        let data=res.data;
        let message=data.message;
        console.log("message==="+message)
        if(message=="ok"){
          let dingDan=data.dingDan;
          siJiDingDan.setData({dingDan:dingDan,zjpdzDdztMc:data.zjpdzDdztMc,showDdxxV:true});
        }
        else{
          siJiDingDan.setData({noDdInfo:data.info,showDdxxV:false});
        }
      }
    })
  },
  getInputValue:function(e){
    if(e.currentTarget.id=="ddh_inp"){
      let ddh=e.detail.value;
      siJiDingDan.setData({ddh:ddh});
    }
  },
  checkDdh:function(){
    let ddh=siJiDingDan.data.ddh;
    if(ddh==null||ddh==""){
      wx.showToast({
        title: '请输入订单号'
      })
      return false;
    }
    else
      return true;
  },
  searchDDByDdh:function(){
    if(siJiDingDan.checkDdh()){
      siJiDingDan.getDingDanByDdh();
    }
  }
})