import { XEAjax } from './src/constructor'
import ajax from './src/ajax'

XEAjax.mixin(ajax)

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
