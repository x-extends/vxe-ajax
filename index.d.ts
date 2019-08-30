import Vue from 'vue'
import XEAjax from 'xe-ajax'

export interface VXEAjaxPlugin {
  install(vue: typeof Vue, xAjax: typeof XEAjax): void;
}

/**
 * 用于 Vue 全局安装 xe-ajax
 */
declare var VXEAjax: VXEAjaxPlugin;

declare module 'vue/types/vue' {
  interface Vue {
    /**
     * 异步请求库，用于浏览器和 node.js 的 HTTP 客户端
     */
    $ajax: typeof XEAjax;
  }
}

export default VXEAjax;