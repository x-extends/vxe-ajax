import Vue from 'vue'
import { XEAjaxMethods } from 'xe-ajax'

/**
 * A small wrapper for integrating xe-ajax to Vuejs.
 */
declare var VXEAjax;

declare module 'vue/types/vue' {
  interface Vue {
    $ajax: XEAjaxMethods;
  }
}

export default VXEAjax;