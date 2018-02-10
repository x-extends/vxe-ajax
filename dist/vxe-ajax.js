/*!
 * vxe-ajax.js v1.3.3
 * (c) 2017-2018 Xu Liangzhan
 * ISC License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global.VXEAjax = factory())
}(this, function () {
  'use strict'

  function plugin (Vue, XEAjax) {
    Object.defineProperty(Vue.prototype, '$ajax', {
      get: function () {
        return XEAjax
      }
    })
  }

  return plugin
}))
