function plugin (Vue, XEAjax) {
  Object.defineProperties(Vue.prototype, {
    $ajax: {
      get () {
        XEAjax.context = this
        return XEAjax
      }
    }
  })
}

export default plugin
