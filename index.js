import { XEAjax } from './src/constructor'
import { isFormData } from './src/util'
import ajax from './src/ajax'

XEAjax.mixin(ajax)

// set request header
XEAjax.oninterceptor = function (request, next) {
  if (!isFormData(request.method === 'get' ? request.params : request.body)) {
    if (request.bodyMode === 'json') {
      request.setHeader('Content-Type', 'application/json; charset=utf-8')
    } else {
      request.setHeader('Content-Type', 'application/x-www-form-urlencoded')
    }
  }
  if (request.crossOrigin) {
    request.setHeader('X-Requested-With', 'XMLHttpRequest')
  }
  next()
}

/**
 * Install Vue plugin
 */
function plugin (Vue) {
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
