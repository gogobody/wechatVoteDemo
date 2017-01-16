//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url:
    'https://python.freelycode.com/onlinevote/api/v1/vote/list',
      data: {'user_token':'wxcoursetest'},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        var res_obj = res.data;
        if(res_obj){
          var data = res_obj["data"];
          var list = [];
          for(var i = 0;i<data.length;i++){
            var votes_tmp ={
              "id":data[i].id,
              "title":data[i].title,
              "vote_cnt":data[i].opinion_cnt,
              "deadline":data[i].deadline
            } 
            list.push(votes_tmp);
          }
          that.setData({votes:list});
        }
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },


  govote:function(e){
    wx.navigateTo({
      url: '../createvote/createvote',
    })
  }


})
