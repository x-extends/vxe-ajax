/**
 * Install VxeAjax
 */
function plugin (Vue, func) {
  var constructor = func.ajax
  Object.defineProperty(Vue, 'ajax', function () {
    constructor.context = window
    return constructor
  })
  Object.defineProperties(Vue.prototype, {
    $ajax: {
      get () {
        constructor.context = this
        return constructor
      }
    }
  })
}

export default plugin
