// //index.js
// //获取应用实例
  
var page_index = 1;
Page({
  data: {
    autoplay: false,
    dotsBoll: true,
    interval: 2000,
    duration: 1000,
    current: 0,
    imageUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
  imglist: ['http://imgtu.5011.net/uploads/content/20170329/9379501490779977.jpg', 'http://wanzao2.b0.upaiyun.com/system/pictures/31789762/original/1451609956_600x828.png', 'http://down.laifudao.com/tupian/201342615037.jpg'],
  name:['你', '我', '他'],
    list: [],
    yeshu: 1,
  },
    previewImage: function (e) {
      var current = e.target.dataset.src;
      wx.previewImage({
        current: current, // 当前显示图片的http链接 
        urls: this.data.imglist // 需要预览的图片http链接列表 
      })
    },
  onLoad: function () {
    //console.log('onLoad')
    // var that = this
    // wx.request({
    //   url: 'https://yg.xiaoniren.cn/restapi/product/index',
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success: function (res) {
    //     that.setData({
    //       list: res.data.data.data
    //     })
    //     console.log(res)
    //   }
    // })
    },
  bindButtonTap: function () {
    var that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: 'back',
      success: function (res) {
        that.setData({
          src: res.tempFilePath
        })
      }
    })
  },
  onPullDownRefresh: function () {
    console.log(没有更多数据)
  },
})
  

