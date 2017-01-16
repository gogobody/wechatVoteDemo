// pages/createvote/createvote.js
var utils = require("../../utils/util")
Page({
  data:{
    title:"",
    options:[],
    date:"2016-01-01",
    time:"13:35"
  },
changetitle:function(e){
  this.setData({title:e.detail.value});
},
onLoad:function(e){
  var time =utils.formatTime(new Date());
  var date = utils.formatDate(new Date());
  this.setData({date:date,time:time})
},
bindDateChange:function(e){
  this.setData({date:e.detail.value})
},
bindTimeChange:function(e){
  this.setData({time:e.detail.value})
}
})