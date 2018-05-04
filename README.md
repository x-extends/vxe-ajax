# VXEAjax 用于Vue全局安装 xe-ajax

[![npm version](https://img.shields.io/npm/v/vxe-ajax.svg?style=flat-square)](https://www.npmjs.org/package/vxe-ajax)
[![npm downloads](https://img.shields.io/npm/dm/vxe-ajax.svg?style=flat-square)](http://npm-stat.com/charts.html?package=vxe-ajax)

## 兼容性
依赖原生 Promise，低版本浏览器使用 polyfill es6-promise.js  

![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png)
--- | --- | --- | --- | --- | --- |
9+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 6.1+ ✔ |

## CDN 安装
使用 script 方式安装，VXEAjax 会定义为全局变量  
生产环境请使用 vxe-ajax.min.js，更小的压缩版本，可以带来更快的速度体验。
### cdnjs 获取最新版本
[点击浏览](https://cdn.jsdelivr.net/npm/vxe-ajax/)已发布的所有 npm 包源码
```HTML
<script src="https://cdn.jsdelivr.net/npm/vxe-ajax/dist/vxe-ajax.js"></script>
```
### unpkg 获取最新版本
[点击浏览](https://unpkg.com/vxe-ajax/)已发布的所有 npm 包源码
```HTML
<script src="https://unpkg.com/vxe-ajax/dist/vxe-ajax.js"></script>
```

## AMD 安装
### require.js 安装示例
```JavaScript
// require 配置
require.config({
  paths: {
    // ...,
    'xe-ajax': './dist/xe-ajax.min',
    'vxe-ajax': './dist/vxe-ajax.min'
  }
})

// ./main.js 安装
define(['vue', 'xe-ajax', 'vxe-ajax'], function (Vue, XEAjax, VXEAjax) {
  // 非 ES6 环境中如果需要启用模拟 Promise 模式对vue 实例上下文的支持（和 ES6 箭头函数效果一样），设置 {context: true}
  Vue.use(VXEAjax, XEAjax, {context: true}) // 不建议启用模拟Promise,请使用箭头函数
})
```

## ES6 Module 安装
```JavaScript
npm install xe-ajax vxe-ajax --save
```

### 通过 Vue.use() 来全局安装
```JavaScript
import Vue from 'vue'
import XEAjax from 'xe-ajax'
import VXEAjax from 'vxe-ajax'

Vue.use(VXEAjax, XEAjax)

// 通过vue实例的调用方式
this.$ajax.fetchGet ('/api/user/list', {id: 1})
this.$ajax.fetchPost ('/api/user/save', {id: 1})
```

## 示例
./Home.vue
```HTML
<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      list: []
    }
  },
  methods: {
    init () {
      this.loading = true
      this.$ajax.fetchGet('/api/user/list').then(response => {
        this.loading = false
        if (response.ok) {
          response.json().then(data => {
            this.list = data
          })
        } else {
          this.list = []
        }
      })
    }
  },
  created () {
    this.init()
  }
}
</script>
```

## License
Copyright (c) 2017-present, Xu Liangzhan