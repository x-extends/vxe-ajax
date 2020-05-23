function VXEAjax (app, XEAjax) {
  var isV3 = typeof app !== 'function'
  if (isV3) {
    app.config.globalProperties.$ajax = XEAjax
  } else {
    Object.defineProperty(app.prototype, '$ajax', {
      get: function () {
        XEAjax.$context = this
        return XEAjax
      }
    })
  }
}

export default VXEAjax
