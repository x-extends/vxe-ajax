(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("vxe-ajax", ["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.VXEAjax = mod.exports.default;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;

  function bindPromiseContext(callback, context) {
    return typeof callback === 'function' ? callback.bind(context) : callback;
  }

  function XEPromise(executor, context) {
    this.promise = executor instanceof Promise ? executor : new Promise(executor.bind(context));
    this.context = context;
  }

  XEPromise.prototype.then = function (resolve, reject) {
    return new XEPromise(this.promise.then(bindPromiseContext(resolve, this.context), bindPromiseContext(reject, this.context)), this.context);
  };

  XEPromise.prototype["catch"] = function (reject) {
    return new XEPromise(this.promise["catch"](bindPromiseContext(reject, this.context)), this.context);
  };

  XEPromise.all = function (iterable, context) {
    return new XEPromise(Promise.all(iterable), context);
  };

  XEPromise.race = function (reason, context) {
    return new XEPromise(Promise.race(reason), context);
  };

  XEPromise.resolve = function (reason, context) {
    return new XEPromise(Promise.resolve(reason), context);
  };

  XEPromise.reject = function (reason, context) {
    return new XEPromise(Promise.reject(reason), context);
  };

  function VXEAjax(Vue, XEAjax, options) {
    if (options && (options === true || options.context === true)) {
      Object.defineProperty(Vue.prototype, '$ajax', {
        get: function get() {
          XEAjax.$Promise = XEPromise;
          XEAjax.$context = this;
          return XEAjax;
        }
      });
    } else {
      Vue.prototype.$ajax = XEAjax;
    }
  }

  var _default = VXEAjax;
  _exports["default"] = _default;
});