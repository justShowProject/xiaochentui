// 左右滑块组件
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    getUrl: {
      type: [],
      value: []
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    open: false,
    // mark 是指原点x轴坐标
    mark: 0,
    // newmark 是指移动的最新点的x轴坐标 
    newmark: 0,
    istoright: true,
    showgoods: true

  },

  /**
   * 组件的方法列表
   */
  methods: {
    tap_ch: function(e) {
      if (this.data.open) {
        this.setData({
          open: false
        });
      } else {
        this.setData({
          open: true
        });
      }
    },

    tap_start: function(e) {
      // touchstart事件
      // 把手指触摸屏幕的那一个点的 x 轴坐标赋值给 mark 和 newmark
      this.data.mark = this.data.newmark = e.touches[0].pageX;
    },

    tap_drag: function(e) {
      // touchmove事件
      this.data.newmark = e.touches[0].pageX;

      // 手指从左向右移动
      if (this.data.mark < this.data.newmark) {
        this.istoright = true;
      }

      // 手指从右向左移动
      if (this.data.mark > this.data.newmark) {
        this.istoright = false;
      }
      this.data.mark = this.data.newmark;
    },

    tap_end: function(e) {
      // touchend事件
      this.data.mark = 0;
      this.data.newmark = 0;
      // 通过改变 opne 的值，让主页加上滑动的样式
      if (this.istoright) {
        this.setData({
          open: true
        });
      } else {
        this.setData({
          open: false
        });
      }
    },
    changePic: function(e) {
      console.log(e)
      if (e.currentTarget.dataset.name === 'pic') {
        this.setData({
          showgoods: true,
          showtext: false
        })
      } else {
        this.setData({
          showgoods: false,
          showtext: true
        })
      }
      this.tap_end();

    }

  }
})