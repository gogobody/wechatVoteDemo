// pages/createvote/createvote.js
var utils = require("../../utils/util");
var app=getApp(); 

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
    console.log("sssssssss");
    
  }

})