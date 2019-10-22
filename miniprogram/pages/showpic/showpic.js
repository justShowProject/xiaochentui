// 展示图片
Page({

  /**
   * 页面的初始数据
   */
  data: {
    piclist: [{
      url: "https://img.xjh.me/desktop/img/47139673_p0.jpg"
    }, {
      url: "https://img.xjh.me/desktop/img/46497553_p0.jpg"
    }, {
      url: "https://img.xjh.me/desktop/img/62402899_p0.jpg"
    }, {
      url: "https://img.xjh.me/desktop/img/62665745_p0.jpg"
    }],
    showdots: true,
    getimgUrls: [],
    imgUrls: [],
    show: false,
    // 左侧菜单列表
    leftClassesMenuList: [],
    // 左侧菜单选中item
    selectedLeftMenuItem: "",
    // 商品列表
    productList: [],
    //把右侧第几个商品分类滚动到顶部
    toView: "",

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let onpiclist = []
    for (let i = 0; i < 4; i++) {
      wx.request({
        url: 'https://img.xjh.me/random_img.php?return=json',
        fail: () => {
          console.log("图片加载失败")
        },
        success: (res) => {
          onpiclist.push(
            'https:' + res.data.img
          )
        }
      })
    }

    this.setData({
      getimgUrls: onpiclist,

    })
    console.log(this.data.imgUrls)

    // console.log(this.data.piclist)

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
  ingallery: function() {
    console.log(this.data.imgUrls)
    this.setData({
      imgUrls: this.data.getimgUrls,
      show: true
    })
    console.log(this.data.imgUrls)
  },
  change(e) {
    console.log('current index has changed', e.detail)
  },
  delete(e) {
    console.log('delete', e.detail)
  },
  hide() {

    this.setData({
      show: false
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
  getMore: function() {
    wx.showToast({
      title: '功能尚未添加',
    })
  },

})