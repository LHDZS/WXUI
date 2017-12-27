// var  util  =  require('../../utils/util.js')
// Page({
//     data:  {
//         searchKeyword:  '',  //需要搜索的字符  
//         searchSongList:  [], //放置返回数据的数组  
//         isFromSearch:  true,   // 用于判断searchSongList数组是不是空数组，默认true，空的数组  
//         searchPageNum:  1,   // 设置加载的第几次，默认是第一次  
//         callbackcount:  15,      //返回数据的个数  
//         searchLoading:  false, //"上拉加载"的变量，默认false，隐藏  
//         searchLoadingComplete:  false  //“没有数据”的变量，默认false，隐藏  
//     },
//   //输入框事件，每输入一个字符，就会触发一次  
//    bindKeywordInput:  function (e) {
//        console.log("输入框事件")
//        this.setData({
//            searchKeyword:  e.detail.value
//       })
//    },
//     //搜索，访问网络  
//     fetchSearchList:  function () {
//         let that  =  this;
//         let searchKeyword  =  that.data.searchKeyword,//输入框字符串作为参数  
//               searchPageNum  =  that.data.searchPageNum,//把第几次加载次数作为参数  
//               callbackcount  = that.data.callbackcount; //返回数据的个数  
//         //访问网络  
//         util.getSearchMusic(searchKeyword,  searchPageNum, callbackcount,  function (res) {
//           console.log(res.data.data)
//             //判断是否有数据，有则取数据  

//             if (res.data.data.length  !=  0) {
//                 let searchList  =  [];
                
//                 //如果isFromSearch是true从data中取出数据，否则先从原来的数据继续添加  
//                 that.data.isFromSearch  ?  searchList = res.data.data  :  searchList = that.data.searchSongList.concat(res.data.data)
//                 console.log(searchList)
//                 that.setData({
//                     searchSongList:  searchList, //获取数据数组  
//                     zhida:  res.data.data, //存放歌手属性的对象  
//                     searchLoading:  true   //把"上拉加载"的变量设为false，显示  
          
//                 });
//               //没有数据了，把“没有数据”显示，把“上拉加载”隐藏  
//             } else {
//                 that.setData({
//                     searchLoadingComplete:  true, //把“没有数据”设为true，显示  
//                     searchLoading:  false  //把"上拉加载"的变量设为false，隐藏  
//                 });
//             }
//         })
//     },


//     //点击搜索按钮，触发事件  
//      keywordSearch:  function (e) {
//          this.setData({
//              searchPageNum:  1,   //第一次加载，设置1  
//              searchSongList: [],  //放置返回数据的数组,设为空  
//              isFromSearch:  true,  //第一次加载，设置true  
//              searchLoading:  true,  //把"上拉加载"的变量设为true，显示  
//              searchLoadingComplete: false //把“没有数据”设为false，隐藏  
//          })
//          this.fetchSearchList();
//      },
//     //滚动到底部触发事件  
//      searchScrollLower:  function () {
//          let that  =  this;
//          if (that.data.searchLoading  &&  !that.data.searchLoadingComplete) {
//              that.setData({
//                  searchPageNum:  that.data.searchPageNum + 1,  //每次触发上拉事件，把searchPageNum+1  
//                  isFromSearch:  false  //触发到上拉事件，把isFromSearch设为为false  
//              });
//              that.fetchSearchList();
//          }
//      }
//  })  

// 第二种

// var network_util = require('../../utils/network_util.js');
// var json_util = require('../../utils/json_util.js');
// Page({
//   data: {
//     // text:"这是一个页面"
//     list: [],
//     dd: '',
//     hidden: false,
//     page: 1,
//     size: 20,
//     hasMore: true,
//     hasRefesh: false
//   },
//   onLoad: function (options) {
//     var that = this;
//     var url = 'https://yg.xiaoniren.cn/restapi/product/index?key=f16af393a63364b729fd81ed9fdd4b7d&pno=1&ps=10';
//     network_util._get(url,
//       function (res) {
//         that.setData({
//           list: res.data.data.data,
//           hidden: true,
//         });
//       }, function (res) {
//         console.log(res);
//       });
//   },
//   onReady: function () {
//     // 页面渲染完成
//   },
//   onShow: function () {
//     // 页面显示
//   },
//   onHide: function () {
//     // 页面隐藏
//   },
//   onUnload: function () {
//     // 页面关闭
//   },
//   //点击事件处理
//   bindViewTap: function (e) {
//     console.log(e.currentTarget.dataset.title);
//   },
//   //加载更多
//   loadMore: function (e) {
//     var that = this;
//     that.setData({
//       hasRefesh: true,
//     });
//     if (!this.data.hasMore) return
//     var url = 'https://yg.xiaoniren.cn/restapi/product/index?key=f16af393a63364b729fd81ed9fdd4b7d&pno=' + (++that.data.page) + '&ps=10';
//     network_util._get(url,
//       function (res) {
//         that.setData({
//           list: that.data.list.concat(res.data.data.data),
//           hidden: true,
//           hasRefesh: false,
//         });
//       }, function (res) {
//         console.log(res);
//       })
//   },
//   //刷新处理
//   refesh: function (e) {
//     var that = this;
//     that.setData({
//       hasRefesh: true,
//     });
//     var url = 'https://yg.xiaoniren.cn/restapi/product/index?key=f16af393a63364b729fd81ed9fdd4b7d&pno=1&ps=10';
//     network_util._get(url,
//       function (res) {
//         that.setData({
//           list: res.data.data.data,
//           hidden: true,
//           page: 1,
//           hasRefesh: false,
//         });
//       }, function (res) {
//         console.log(res);
//       })
//   },
// })


// 第三种


// pages/list/list.js
// var app = getApp();

// // 当前页数
// var pageNum = 1;
// var pageSize = 6;


// // 加载数据
// var loadMsgData = function (that) {
//   that.setData({
//     hidden: false
//   });
//   var allMsg = that.data.msgList;
//   app.ajax.req('restapi/product/index', {
//     "page": pageNum, "size": pageSize
//   }, function (res) {
//     // console.log(res.data.data)
//     // 不能直接 allMsg.push(res); 相当于list.push(list);打乱了结构
//     for (var i = 0, l = res.data.data.length; i<l; i++) {
//       allMsg.push(res.data.data[i]);
//     }
//     // console.log(allMsg)
//     that.setData({
//       msgList: allMsg
//     });
//     pageNum++;
//     that.setData({
//       hidden: true
//     });
//   });
// }

// Page({
//   data: {
//     msgList: [],
//     hidden: true,
//     scrollTop: 0,
//     scrollHeight: 0
//   },
//   onLoad: function (options) {
//     // 页面初始化 options为页面跳转所带来的参数
//     var that = this;
//     wx.getSystemInfo({
//       success: function (res) {
//         // console.log(that.data.msgList);
//         that.setData({
//           windowHeight: res.windowHeight,
//           windowWidth: res.windowWidth
//         })
//       }
//     });
//     loadMsgData(that);
//   },
//   onReady: function () {
//     // 页面渲染完成
//   },
//   onShow: function () {
//     // 页面显示
//   },
//   // 下拉刷新数据
//   pullDownRefresh: function () {
//     var that = this;
//     pageNum = 1;
//     that.setData({
//       msgList: [],
//       scrollTop: 0
//     });
//     loadMsgData(that);
//   },

//   // 上拉加载数据 上拉动态效果不明显有待改善
//   pullUpLoad: function () {
//     var that = this;
//     loadMsgData(that);
//   },
//   // 定位数据
//   scroll: function (event) {
//     var that = this;
//     that.setData({
//       scrollTop: event.detail.scrollTop
//     });
//   },
//   onHide: function () {
//     // 页面隐藏
//   },
//   onUnload: function () {
//     // 页面关闭
//   }
// })


//引入请求文件
var fetch = require('../../utils/fetch.js');
// pages/shopList/shopList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleName: '',
    cate_id: '',//当前分类id
    shopList: [],
    _page: 0,//分页起始页码
    _limit: 10,//每页条数,
    hasMore: true
  },
  //获取当前分类的数据
  getShopListData() {
    wx.showNavigationBarLoading()
    //判断是否还有数据
    if (!this.data.hasMore && this.data.shopList.length > 0) return wx.showToast({
      title: '到底了',
      success() {
        //导航加载关闭
        wx.hideNavigationBarLoading()
      }
    });
    this.data._page++;
    const { _page, _limit, cate_id } = this.data;

    fetch(`https://locally.uieee.com/categories/1/shops`, 'GET', { _page, _limit }).then(res => {
      //拼接达到数据的累加
      const shops = this.data.shopList.concat(res.data)

      //console.log(res.header) 在响应头中X-Total-Count代表数据总数
      //判断是否还有数据
      const hasMore = _page * _limit < (res.header['X-Total-Count'] - 0)

      this.setData({ shopList: shops, hasMore })

      //关闭下拉动画
      wx.stopPullDownRefresh()

      //关闭上拉提示
      wx.hideLoading()


      //导航加载关闭
      wx.hideNavigationBarLoading()
    }).catch()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //options可获取地址栏?后面的参数

    //获取导航栏显示
    this.setData({ titleName: options.cate_name, cate_id: options.cate_id })

    //获取商品数据
    this.getShopListData()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    if (this.data.titleName) {
      wx.setNavigationBarTitle({
        title: this.data.titleName
      })
    }
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.setData({ shopList: [], _page: 0, _limit: 10 })
    this.getShopListData()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    wx.showLoading({
      title: 'loading',
    })
    this.getShopListData()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})