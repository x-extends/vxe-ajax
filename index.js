function VXEAjax (app, XEAjax) {
  var isV3 = typeof app !== 'function'
  var variate = '$ajax'
  if (isV3) {
    app.config.globalProperties[variate] = XEAjax
  } else {
    Object.defineProperty(app.prototype, variate, {
      get: function () {
        XEAjax.$context = this
        return XEAjax
      }
    })
  }
}

export default VXEAjax
