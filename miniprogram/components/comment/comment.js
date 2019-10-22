// 留言模块
Component({
  properties: {
    comment: {
      type: Object,
      value: {
        num: '123',
        title: '呵呵',
        content: '',
        name: '',
        date: '',
        answer: '',
        point: ''
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showimport: false,


  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})