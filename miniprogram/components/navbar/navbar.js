// 选项框组件
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    navlist: {
      type: Array,
      value: [{
        title: '选项1'
      }, {
        title: '选项2'
      }, {
        title: '选项3'
      }]
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    tapcolor: '',
    num: 0,
    tap: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemtap: function(e) {
      // 向父组件传递num
      var myEventDetail = {
        num: e.target.dataset.num
      } // detail对象，提供给事件监听函数
      this.triggerEvent('mytap', myEventDetail)
      //点击修改次级导航栏的样式
      this.setData({
        num: e.target.dataset.num
      })
    }
  }

})