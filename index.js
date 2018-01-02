import * as ajax from '../xe-ajax'
/**
 * Install VxeAjax
 */
function plugin (Vue, methods) {
  ajax.mixin(methods)
  var XEAjax = ajax.constructor
  Object.defineProperty(Vue, 'ajax', function () {
    XEAjax.context = window
    return XEAjax
  })
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
