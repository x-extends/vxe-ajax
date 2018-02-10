/*!
 * vxe-ajax.js v1.3.4
 * (c) 2017-2018 Xu Liangzhan
 * ISC License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global.VXEAjax = factory())
}(this, function () {
  'use strict'

  function bindPromiseContext (callback) {
    return typeof callback === 'function' ? callback.bind(this.context) : callback
  }

  function XEPromise (executor, context) {
    if (executor instanceof Promise) {
      this.promise = executor
    } else {
      this.promise = new Promise(executor.bind(context))
    }
    this.context = context
  }

  XEPromise.prototype.then = function (resolve, reject) {
    return new XEPromise(this.promise.then(bindPromiseContext.call(this, resolve), bindPromiseContext.call(this, reject)), this.context)
  }

  XEPromise.prototype.catch = function (reject) {
    return new XEPromise(this.promise.catch(bindPromiseContext.call(this, reject)), this.context)
  }

  XEPromise.all = function (iterable, context) {
    return new XEPromise(Promise.all(iterable), context)
  }

  XEPromise.race = function (reason, context) {
    return new XEPromise(Promise.race(reason), context)
  }

  XEPromise.resolve = function (reason, context) {
    return new XEPromise(Promise.resolve(reason), context)
  }

  XEPromise.reject = function (reason, context) {
    return new XEPromise(Promise.reject(reason), context)
  }

  function plugin (Vue, XEAjax, isContext) {
    if (isContext === true && XEAjax.$p) {
      XEAjax.$p(XEPromise)
    }
    Object.defineProperty(Vue.prototype, '$ajax', {
      get: function () {
        XEAjax.context = this
        return XEAjax
      }
    })
  }

  return plugin
}))
