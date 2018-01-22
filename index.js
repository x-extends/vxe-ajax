function plugin (Vue, XEAjax) {
  Object.defineProperty(Vue.prototype, '$ajax', {
    get: function () {
      return XEAjax
    }
  })
}

export default plugin
