Page({
  data: {
    title: "投票详情测试",
    options: [{ "name": "tesdasdasdasdasdasdasdasdasssssssssssssssssssssssssssssssssssssssssst1", "count": 20 }, { "name": "test2", "count": 10 }],
    status: "正在进行中",
    deadline: "2017-01-11 12:12:00"
  },
  onLoad: function (e) {
    // 页面初始化 e
    var that = this;
    var id = e.id;
    /*
    wx.request({
      url: 'https://python.freelycode.com/onlinevote/api/v1/vote/' + id + '/stats',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success

        if (res.data.status == "ok") {
          var data = res.data.data;
          that.setData({ "title": data.title, "options": data.options, "status": data.display_status, "deadlinde": data.deadline })
        }
      },
      fail: function () {
        // fail
      }
    })
    */
  },
  ret:function(e){
    wx.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面
    })
  }

  
})