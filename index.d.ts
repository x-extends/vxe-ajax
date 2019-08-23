import Vue from 'vue'
import XEAjax from 'xe-ajax'

export interface VXEAjaxPlugin {
  install(vue: typeof Vue, xAjax: typeof XEAjax): void;
}

/**
 * A small wrapper for integrating xe-ajax to Vuejs.
 */
declare var VXEAjax: VXEAjaxPlugin;

declare module 'vue/types/vue' {
  interface Vue {
    $ajax: typeof XEAjax;
  }
}

export default VXEAjax;