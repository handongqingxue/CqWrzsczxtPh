// pages/daiZhiJian/daiZhiJian.js
var daiZhiJian;
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
    daiZhiJian=this;
    rootIP=getApp().getRootIP();
    let ddh=options.ddh;
    //let ddh="20220530003";
    daiZhiJian.setData({ddh:ddh});
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    daiZhiJian.setData({backSign:'<'});
    let yongHu=wx.getStorageSync('yongHu');
    daiZhiJian.setData({yongHu:yongHu});
    daiZhiJian.getDzjDingDanByDdh();
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
  getDzjDingDanByDdh:function(){
    let ddh=daiZhiJian.data.ddh;
    console.log("ddh==="+ddh)
    let qyh=daiZhiJian.data.yongHu.qyh;
    wx.request({
      url: rootIP+"getDzjDingDanByDdh",
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
          let dd=data.dd;
          daiZhiJian.setData({dingDan:dd});
        }
      }
    })
  },
  radioChange:function(e){
    let value=e.detail.value;
    daiZhiJian.setData({zjjg:value});
  },
  newPaiDuiJiLu:function(){
    let yfwDdId=daiZhiJian.data.dingDan.id;
    let yongHu=daiZhiJian.data.yongHu;
    let zjyId=yongHu.id;
    let jg=daiZhiJian.data.zjjg;
    let qyh=yongHu.qyh;
    console.log("yfwDdId==="+yfwDdId);
    wx.request({
      url: rootIP+"newZhiJianJiLu",
      method: 'POST',
      data: { yfwDdId:yfwDdId,zjyId:zjyId,jg:jg,qyh:qyh},
      header: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      success: function (res) {
        console.log(res);
        let data=res.data;
        let message=data.message;
        console.log("message==="+message)
        if(message=="ok"){
          wx.redirectTo({
            url: '/pages/yongHuShouYe/yongHuShouYe',
          })
        }
        else{
          
        }
      }
    })
  }
})