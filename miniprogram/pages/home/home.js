// pages/query/query.js
const db = wx.cloud.database({});
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerlist: [],
    swiperList: [],
    demo: [{
        p_id: 1,
        p_imgURL: 'https://6164-adad-8gh48azv3b404c25-1301511894.tcb.qcloud.la/product/886139800137-1.jpg?sign=deb949dcb26c44c4e530025562f32912&t=1637449100',
        p_name: '大众精品牛肉卷',
        p_size: '一盒约1.3~1.5LB',
        p_price: '13.99',
        p_category: '牛'
      },
      {
        "p_id": 2,
        "p_category": "羊",
        "p_name": "大众精品羊肉卷",
        "p_size": "一盒约1.3~1.5LB",
        "p_price": "16.99",
        "p_imgURL": "https://6164-adad-8gh48azv3b404c25-1301511894.tcb.qcloud.la/product/886139800113-1.jpg?sign=801acffd72e50210ba802cbab615ba31&t=1637449194"
      }, {
        "p_id": 3,
        "p_category": "鸡",
        "p_name": "全天然鸡中翅",
        "p_size": "一份约2LB",
        "p_price": "11.99",
        "p_imgURL": "https://6164-adad-8gh48azv3b404c25-1301511894.tcb.qcloud.la/product/20190312007-1.jpg?sign=2a2f3a428243590d0edabbcaef0e5f2a&t=1637449238"
      }, {
        "p_id": 4,
        "p_category": "鸡",
        "p_name": "走地鸡奥米加3网红 黄鸡蛋",
        "p_size": "一盒含12枚",
        "p_price": "4.99",
        "p_imgURL": "https://6164-adad-8gh48azv3b404c25-1301511894.tcb.qcloud.la/product/20210604001-1.jpg?sign=bee35ff19e06906a2dcf0cac9a762abd&t=1637449267"
      }, {
        "p_id": 5,
        "p_category": "水",
        "p_name": "Aquafina瓶装水",
        "p_size": "24 x 500ml",
        "p_price": "5.99",
        "p_imgURL": "https://6164-adad-8gh48azv3b404c25-1301511894.tcb.qcloud.la/product/069000061190-1.jpg?sign=0f87e9bab5d4af7a6dd49762341d99de&t=1637449277"
      }, {
        "p_id": 6,
        "p_category": "水果",
        "p_name": "无籽大西瓜",
        "p_size": "1个",
        "p_price": "6.99",
        "p_imgURL": "https://6164-adad-8gh48azv3b404c25-1301511894.tcb.qcloud.la/product/820180316011-1.jpg?sign=4ef72119e2bc1a09dbcf96b1e1d190fc&t=1637449205"
      }, {
        "p_id": 7,
        "p_category": "猪",
        "p_name": "新鲜精品切段排骨（简单易切）",
        "p_size": "一盒约0.9kg",
        "p_price": "14.99",
        "p_imgURL": "https://6164-adad-8gh48azv3b404c25-1301511894.tcb.qcloud.la/product/20190307006-1.jpg?sign=e8640c33f87502b60cdcc9ceb24e5f44&t=1637449255"
      }, {
        "p_id": 8,
        "p_category": "水果",
        "p_name": "精品巨峰葡萄 (Peony)",
        "p_size": "单盒3LB",
        "p_price": "12.99",
        "p_imgURL": "https://6164-adad-8gh48azv3b404c25-1301511894.tcb.qcloud.la/product/20211005002-1.jpg?sign=e8c494df9dac28eec2bdd826ad609024&t=1637449306"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.lin.renderWaterFlow(this.data.demo, false, () => {
      console.log('渲染成功')
    })
    const bannerData = db.collection('banner');
    bannerData.get({
      success: res => {
        this.setData({
          bannerlist: res.data
        })
      }
    })
    // const productData = db.collection('product');
    // productData.get({
    //   success: res => {
    //     this.setData({
    //       demo: res.data
    //     })
    //   }
    // })
    const swiperData = db.collection('swiper');
    swiperData.get({
      success: res => {
        this.setData({
          swiperList: res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  goBack: function () {
    wx.switchTab({
      url: '../index/index', //指定界面
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})