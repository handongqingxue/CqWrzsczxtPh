// pages/login/login.js
import { hexMD5 } from "../../utils/md5.js"
var login;
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
    login=this;
    rootIP=getApp().getRootIP();
    //let qyh=options.qyh;
    let qyh="yuejiazhuang";
    login.setData({qyh:qyh});
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let yongHu=wx.getStorageSync('yongHu');
    login.setData({yhm: yongHu.yhm,mm:yongHu.jmmm});
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
  getInputValue:function(e){
    if(e.currentTarget.id=="yhm_inp"){
      let yhm=e.detail.value;
      login.setData({yhm:yhm});
    }
    else if(e.currentTarget.id=="mm_inp"){
      let mm=e.detail.value;
      login.setData({mm:mm});
    }
  },
  checkYhm:function(){
    let yhm=login.data.yhm;
    if(yhm==null||yhm==""){
      wx.showToast({
        title: '请输入用户名'
      })
      return false;
    }
    else
      return true;
  },
  checkMm:function(){
    let mm=login.data.mm;
    if(mm==null||mm==""){
      wx.showToast({
        title: '请输入密码'
      })
      return false;
    }
    else
      return true;
  },
  login:function(){
    let yhm=login.data.yhm;
    let mm=hexMD5(login.data.mm).toUpperCase();
    let qyh=login.data.qyh;
    wx.request({
      url: rootIP+"login",
      method: 'POST',
      data: { yhm:yhm,mm:mm,qyh:qyh},
      header: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      success: function (res) {
        console.log(res);
        let data=res.data;
        let status=data.status;
        if(status==1){
          let yongHu=res.data.data;
          yongHu.jmmm=login.data.mm;
          let qyh=login.data.qyh;
          yongHu.qyh=qyh;
          wx.setStorageSync("yongHu", yongHu);
          wx.redirectTo({
            url: '/pages/yongHuShouYe/yongHuShouYe',
          })
        }
        else{
          wx.showToast({
            title: res.data.msg,
          })
        }
      }
    })
  },
  checkLogin:function(){
    if(login.checkYhm()){
      if(login.checkMm()){
        login.login();
      }
    }
  }
})