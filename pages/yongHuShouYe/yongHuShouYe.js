// pages/yongHuShouYe/yongHuShouYe.js
var yongHuShouYe;
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
    yongHuShouYe=this;
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

  },
  /**
   * 扫码事件:https://blog.csdn.net/qq_29528701/article/details/117391740
   */
  scanCodeEvent: function(){
    wx.scanCode({
      //onlyFromCamera: true,// 只允许从相机扫码
      success(res){
        //console.log("扫码成功："+JSON.stringify(res))
        console.log(res.result)
        let e={currentTarget:{dataset:{page:"daiZhiJian",ddh:res.result}}};
        yongHuShouYe.goPage(e);
      }
    })
  },
  goPage:function(e){
    let param;
    let page=e.currentTarget.dataset.page;
    if(page=="daiZhiJian"){
      let ddh=e.currentTarget.dataset.ddh;
      param="ddh="+ddh;
    }
    wx.redirectTo({
      url: '/pages/'+page+'/'+page+'?'+param
    })
  },
  goBack:function(){
    wx.clearStorageSync();
    let e={currentTarget:{dataset:{page:"login"}}};
    yongHuShouYe.goPage(e);
  }
})