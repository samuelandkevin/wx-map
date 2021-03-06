var netUtil  = require("../../utils/netUtil.js");
var dataUtil = require("../../data/dataUtil.js");
var WxParse = require('../../utils/wxParse/wxParse.js');
var callback = netUtil.callback;
var that;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      that = this;
      var id = options.inforId;
      console.log(id);
      this._getInforDetail(id,{
          success:function(ret){
            if (ret.data != null && ret.data.code == 999) {
              var detail = ret.data.data.detail;
              detail.createdDate = dataUtil.dateFormat(detail.createdDate, "yyyy-MM-dd");
              var content = detail.content;
              WxParse.wxParse('content', 'html', content, that, 5);
              that.setData({
                detail:detail
              })
            }
          },
          complete:function(ret){

          }
      });
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

  /**网络请求 */
  _getInforDetail:function(id,callback){
    var params = new Object();
    var url = "/taxtao/api/infor/detail/" + id;
    netUtil.GET({
      url: url,
      params: params,
      success: function (res) {
        callback.success(res);
      },
      fail: function () {
        callback.fail();
      },
      complete: function () {
        callback.complete();
      },
    })
  }

})