// pages/home/home.js
import request from "../../service/network.js"
Page({
  data: {

  },

  onLoad(options) {
    this.Get_Moive_Weekly();
  },

  Get_Moive_Weekly() {
    request({
      url: "https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList",
    }).then(res => {
      console.log(res)
    })
  }
})