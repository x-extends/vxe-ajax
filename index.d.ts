import Vue from 'vue'
import XEAjax from 'xe-ajax'

/**
 * 用于 Vue 全局安装 xe-ajax
 * @example 
 ```javascript
 Vue.use(VXEAjax, XEAjax)
 ```
 */
declare var VXEAjax;

declare module 'vue/types/vue' {
  interface Vue {
    $ajax: XEAjax
  }
}

export default VXEAjax;