// pages/createvote/createvote.js
var utils = require("../../utils/util");
var app = getApp();

Page({
  data: {
    title: "",
    options: [],
    date: "",
    time: "",
    newOption: ""
  },
  changetitle: function (e) {
    this.setData({ title: e.detail.value });
  },
  onLoad: function (e) {
    var time = utils.formatTime(new Date());
    var date = utils.formatDate(new Date());
    this.setData({ date: date, time: time })
  },
  bindDateChange: function (e) {
    this.setData({ date: e.detail.value })
  },
  bindTimeChange: function (e) {
    this.setData({ time: e.detail.value })
  },
  newoption: function (e) {
    this.setData({ newOption: e.detail.value })
  },
  addoption: function () {
    var tmp = this.data.options;
    if (this.data.newOption !== "") {
      tmp.push(this.data.newOption);
      this.setData({ options: tmp, newOption: "" });
    }
  },
  delopt: function (e) {
    var opt = e.target.dataset.index;
    var opts = this.data.options;
    opts.splice(opt, 1);
    this.setData({ options: opts })
  },
  pushVote: function (e) {
    wx.request({
      url: 'https://python.freelycode.com/onlinevote/api/v1/vote/create/',
      data: {
        "user_token": app.globalData.userInfo,
        "title": this.data.title,
        "option": this.data.options,
        "deadline": this.data.date + " " + this.data.time + ":00"
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        if (res.data.status == "ok") {
          wx.navigateBack({
            delta: 1, // 回退前 delta(默认为1) 页面
          })
        }else{
          wx.showModal({
          title: "错误",
          content: res.data.msg
        })
        }
      },
      fail: function (res) {
        wx.showModal({
          title: "错误",
          content: res.data.msg
        })
      }
    })

  }

})