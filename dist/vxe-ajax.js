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
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;

  function VXEAjax(Vue, XEAjax) {
    Vue.prototype.$ajax = XEAjax;
  }

  var _default = VXEAjax;
  _exports["default"] = _default;
});