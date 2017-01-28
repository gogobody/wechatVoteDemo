//app.js
App({
  onLaunch: function () {
    var that = this;
    this.getUserInfo();
    wx.checkSession({
      success:function() {
        //登录未过期
      },
      fail:function(){
        that.authlogin();
      }
    })
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  },
  authlogin:function(){
    wx.login({
      success: function(res){
        if(res.code){
             wx.request({
               url: 'https://URL',
               data: {
                 code:res.code
               },
               method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
               // header: {}, // 设置请求的 header
               success: function(res){
                 // success
                 wx.setStorageSync('access_token', res.data.data.access_token)
               },
               fail: function() {
                 // fail
               },
               complete: function() {
                 // complete
               }
             })
        }else{
          console.log("获取token失败");
        }
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
})