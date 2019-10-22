// 我的
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dolist: [{
      name: '收藏',
      num: 1
    }, {
      name: '点赞',
      num: 9
    }, {
      name: '评论',
      num: 4
    }, {
      name: '分享',
      num: 2
    }],
    card: {
      title: '联系我',
      uselist: [{
        title: '查看简历',
        extra: '点击进入',
        page: '/pages/inner/inner'
      }, {
        title: 'github',
        extra: '点击进入',
        page: '/pages/inner/inner'
      }, {
        title: '保存的图片',
        extra: '点击进入',
        page: '/pages/inner/inner'
      }]
    },
    card2: {
      title: '反馈',
      uselist: [{
        title: '意见反馈',
        extra: '点击进入',
        page: '/pages/inner/inner'
      }, {
        title: 'bug提交',
        extra: '点击进入',
        page: '/pages/inner/inner'
      }]
    },
    card3: {
      title: '设置',
      uselist: [{
        title: '系统设置',
        extra: '点击进入',
        page: '/pages/inner/inner'
      }, {
        title: '个人设置',
        extra: '点击进入',
        page: '/pages/inner/inner'
      }]
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

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

  }
})