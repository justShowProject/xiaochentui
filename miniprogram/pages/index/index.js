//index.js
const app = getApp()

Page({
  data: {
    dialogShow: false,
    buttons: [{
      text: '返回'
    }, {
      text: '确定'
    }],
    search: '',
    haha: 'searchbgc',
    navbaritem: [{
      title: '知乎'
    }, {
      title: '虎扑'
    }],
    getData: [],
    searchData: [],
    testList: [{
      title: '2'
    }, {
      title: 'ere'
    }]
  },
  onLoad: function() {
    wx.request({
      url: 'https://www.printf520.com:8080/GetTypeInfo?id=1',
      fail: () => {
        this.setData({
          dialogShow: true
        })
      },
      success: (res) => {
        this.setData({
          getData: res.data.Data
        })
        console.log(this.data.getData)
      }
    })
    this.setData({
      search: this.search.bind(this)
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
  },
  search: function(value) {
    this.setData({
      searchData: this.data.getData
    })
    let sum = []
    if (this.data.searchData) {

      this.data.searchData.forEach((i, index) => {
        i.title.indexOf(value) >= 0 ? sum.push({
          text: i.title,
          value: index
        }) : ''
      })
    }
    console.log(value, sum)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(sum)
      }, 100)
    })
  },
  selectResult: function(e) {
    wx.redirectTo({
      url: '/pages/newscontent/newscontent',
    })
    console.log('select result', e.detail)
  },
  mytap: function(e) {
    console.log(e.detail.num)
    wx.request({
      url: 'https://www.printf520.com:8080/GetTypeInfo?id=' + (e.detail.num + 1),
      fail: () => {
        this.setData({
          dialogShow: true
        })
        console.log('获取数据失败')
      },
      success: (res) => {
        this.setData({
          getData: res.data.Data
        })
      }
    })
  },
  tapDialogButton(e) {
    console.log('dialog', e.detail)
    this.setData({
      dialogShow: false,
      showOneButtonDialog: false
    })
  },
  onPullDownRefresh: function() {
    wx.showNavigationBarLoading() //在标题栏中显示加载
    wx.showToast({
      title: 'loading....',
      icon: 'loading'
    })
    setTimeout(function() {
      const pages = getCurrentPages()
      const perpage = pages[pages.length - 1]
      perpage.onLoad()
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
  },


})