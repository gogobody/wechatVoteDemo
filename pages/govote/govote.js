var app = getApp();
Page({
  data: {
    title: "投票详情测试",
    options: [{ "id": 1, "content": "test1" }, { "id": 2, "content": "test2" }],
    status: "正在进行中",
    deadline: "2017-01-11 12:12:00",
    choice: null
  },
  onLoad: function (e) {
    // 页面初始化 e
    var that = this;
    var id = e.id;

    // wx.request({
    //   url: 'https://python.freelycode.com/onlinevote/api/v1/vote/' + id + '/detail',
    //   data: {},
    //   method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    //   // header: {}, // 设置请求的 header
    //   success: function (res) {
    //     // success

    //     if (res.data.status == "ok") {
    //       var data = res.data.data;
    //       that.setData({ "title": data.title, "options": data.options, "status": data.display_status, "deadlinde": data.deadline })
    //     }
    //   },
    //   fail: function () {
    //     // fail
    //   }
    // })

  },
  submit: function () {

    wx.request({
      url: 'https://python.freelycode.com/onlinevote/api/v1/vote/' + this.data.choice + '/opinion/create',
      data: {
        "user_token": app.globalData.userInfo,
        "option_id": this.data.choice
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        var data = res.data;
        if (data.status == "ok") {
          wx.redirectTo({
            url: '../votedetail/votedetail',
          })
        } else {
          wx.showModal({
            title: '错误',
            content: data.msg            
          })
        }
      }

    })
  },
  radiochange: function (e) {
    var index = parseInt(e.detail.value);
    this.setData({ choice: index });
  }


})