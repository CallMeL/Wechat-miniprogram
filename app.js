// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    locationInfo: null, // 定位信息
    referrer: '', // 推荐人
    qrcodeShareImage: '', // 小程序码分享图片
    userInfo: {
      avatarUrl: '/assets/images/user-avatar-default.png',
      nickName: '昵称呢？'
    },
    buyerInfo: {},
    addSucceed: 0, // 是否添加页返回
    continueOrder: 0, // 继续开单返回
    orderSucceed: 0, // 开单成功
    basketGoods: {
      goods: [],
      pageMoney: '',
      pageNum: ''
    },
    goodsMgr: {
      formData: {},
      searchResults: [],
      searchResultsIndex: 0
    },
    storeInfo: {
      formData: {}
    }
  }
})
