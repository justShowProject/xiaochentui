// 新闻内容详情
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '无',
    createtime: '无',
    id: '',
    url: '无',
    comment:{
      num: 200,
      title: '我是一楼',
      content: '我发了些什么',
      name: '或者',
      date: '2019-09-02',
      answer: '10',
      point: '10'
    },
    commentlist:[
      {
        num: 200,
        title: '我是一楼',
        content: '哈哈哈哈',
        name: '或者',
        date: '2019-09-02',
        answer: '3',
        point: '1'
      }, {
        num: 200,
        title: '二楼是我的',
        content: '我都发了些什么',
        name: '或者',
        date: '2019-09-02',
        answer: '2',
        point: '9'
      }, {
        num: 200,
        title: '水一水',
        content: '经验呢',
        name: '或者',
        date: '2019-09-02',
        answer: '7',
        point: '3'
      }, {
        num: 200,
        title: '有没有玩王者的',
        content: '我李白贼六',
        name: '或者',
        date: '2019-09-02',
        answer: '4',
        point: '15'
      }, {
        num: 200,
        title: '咚恰恰',
        content: '如果能重来我还要选李白哎哎哎哎',
        name: '或者',
        date: '2019-09-02',
        answer: '3',
        point: '10'
      }, {
        num: 200,
        title: '故人西祠黄鹤楼,眼花三月下扬州',
        content: '故人笑比中庭树,一日秋风一日疏',
        name: '或者',
        date: '2019-09-02',
        answer: '21',
        point: '10'
      }

    ],
    showselect:false

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      title: options.title,
      id: options.id,
      url: options.url,
      createtime: this.getDate(parseInt(options.createtime + '000'))
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
  },
  getDate:function(num){
    console.log(num)
    var date = new Date(num)
    var Y = date.getFullYear() + '-'
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
    var D = date.getDate() + ' '
    var h = date.getHours() + ':'
    var m = date.getMinutes() + ':'
    var s = date.getSeconds()
    console.log(date)
    return (Y + M + D)
  },
  copy: function (e) {
    var that = this;
    wx.setClipboardData({
      data: this.data.url,
      success: function (res) {
      }
    });
  },
  lovenews:function(){
    if(this.data.showselect){
      this.setData({
        showselect: false
      })
      wx.showToast({
        title: '取消收藏成功',//提示文字
        duration: 1000,//显示时长
        mask: true,//是否显示透明蒙层，防止触摸穿透，默认：false  
        icon: 'success', //图标，支持"success"、"loading"  
        success: function () { },//接口调用成功
        fail: function () { },  //接口调用失败的回调函数  
        complete: function () { } //接口调用结束的回调函数  
      })
    }else{
      this.setData({
        showselect: true
      })
      wx.showToast({
        title: '收藏成功',//提示文字
        duration: 1000,//显示时长
        mask: true,//是否显示透明蒙层，防止触摸穿透，默认：false  
        icon: 'success', //图标，支持"success"、"loading"  
        success: function () { },//接口调用成功
        fail: function () { },  //接口调用失败的回调函数  
        complete: function () { } //接口调用结束的回调函数  
      })
    }
  },
  getMore: function () {
    wx.showToast({
      title: '功能尚未添加',
    })
  },
  joindiscuss:function(){
    wx.showToast({
      title: '请期待',
    })
  }
})