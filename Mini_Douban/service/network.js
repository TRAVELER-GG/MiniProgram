export default function request(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: options.url,
      method: options.method || 'GET',
      data: options.data || {},
      header: {
        "content-type": 'json'
      },
      success: resolve,
      fail: reject
    })
  })
}