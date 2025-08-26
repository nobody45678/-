Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['北京市', '北京市', '东城区'],
    now:{
        temp:0,
        text:"未知",
        icon:999,
        humidity:0,
        pressure:0,
        vis:0,
        windDir:0,
        windScale:0,
        windSpeed:0

    }
  },
  bindregionChange:function(e){
    this.setData({
        region: e.detail.value
      });
    this.getWeather();
},
getWeather:function(){
    var that=this;
    wx.request({
        url: 'https://mv7p427vrw.re.qweatherapi.com/geo/v2/city/lookup',
        data: {
            location: that.data.region[2] || '北京', // 使用选择的区域或默认值
            adm: that.data.region[1], // 上级行政区划
            range: 'cn', // 限定中国范围
            number: 1 // 只取第一个结果
        },
        header: {
            'X-QW-Api-Key': 'db4b7979a6c3496e8ee9939a51438f24'
        },
        success: function(res) {
            if (res.data.code === '200' && res.data.location.length > 0) {
                // 获取第一个城市的ID
                var locationId = res.data.location[0].id;
                // 请求天气数据
                wx.request({
                    url: 'https://mv7p427vrw.re.qweatherapi.com/v7/weather/now',
                    data: {
                        location: locationId
                    },
                    header: {
                        'X-QW-Api-Key': 'db4b7979a6c3496e8ee9939a51438f24'
                    },
                    success: function(res){
                        console.log(res.data)
                        that.setData({now:res.data.now})
                    },
                });
            }
        },
    });
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
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