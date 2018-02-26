# VXEAjax 用于Vue全局安装 xe-ajax

[![npm version](https://img.shields.io/npm/v/vxe-ajax.svg?style=flat-square)](https://www.npmjs.org/package/vxe-ajax)
[![npm downloads](https://img.shields.io/npm/dm/vxe-ajax.svg?style=flat-square)](http://npm-stat.com/charts.html?package=vxe-ajax)

安装完成后自动挂载在vue实例 this.$ajax

### 兼容性
任何支持 Promise 的环境都能运行，低版本浏览器使用 polyfill<br/>
支持 IE8+、Edge、Chrome、Firefox、Opera、Safari等...

### CDN 安装
使用 script 方式安装，VXEAjax 会定义为全局变量<br/>
生产环境请使用 vxe-ajax.min.js，更小的压缩版本，可以带来更快的速度体验。
#### cdnjs 获取最新版本, [点击浏览](https://cdn.jsdelivr.net/npm/vxe-ajax/)已发布的所有 npm 包的源代码。
``` shell
<script src="https://cdn.jsdelivr.net/npm/vxe-ajax@1.3.5/dist/vxe-ajax.js"></script>
```
#### unpkg 获取最新版本, [点击浏览](https://unpkg.com/vxe-ajax@1.3.5/)已发布的所有 npm 包的源代码
``` shell
<script src="https://unpkg.com/vxe-ajax@1.3.5/dist/vxe-ajax.js"></script>
```

### AMD 安装， 以 require.js 为例
``` shell
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
  // (v1.3.5+)如果第三个参数设置为true，则启动模拟 Promise 模式(默认是false)
  // 通过 this.$ajax 发起的请求 this 默认指向当前vue实例。
  Vue.use(VXEAjax, XEAjax, true)
})

// ./app.js 调用
define([], function () {
  // 通过vue实例的调用方式
  // ...vue代码省略
  this.$ajax.getJSON('/api/user/list', {id: 1}).then(data => {
    this.list = [] // (v1.3.5+)需要启动模拟 Promise 模式才支持 this 默认指向 vue 实例
  })
})
```

### ES6 Module 安装方式
``` shell
npm install xe-ajax vxe-ajax --save
```

### 通过 Vue.use() 来全局安装
``` shell
import Vue from 'vue'
import XEAjax from 'xe-ajax'
import VXEAjax from 'vxe-ajax'

Vue.use(VXEAjax, XEAjax)

// 通过vue实例的调用方式
this.$ajax.getJSON ('/api/user/list', {id: 1})
this.$ajax.postJSON ('/api/user/save', {id: 1})
```

### 混合函数
#### 文件 ./customs.js
``` shell
export function get1 () {
  console.log('自定义的函数')
} 
```
#### 示例
``` shell
import Vue from 'vue'
import XEAjax from 'xe-ajax'
import VXEAjax from 'vxe-ajax'
import customs from './customs'

XEAjax.mixin(customs)
Vue.use(VXEAjax, XEAjax)

// 调用自定义扩展函数
this.$ajax.get1()
```

#### 案例
./Home.vue
``` shell
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
      list: []
    }
  },
  methods: {
    init () {
      this.$ajax.getJSON('/api/user/list', {id: 123}).then(data => {
        this.list = data
      }).catch(data => {
        this.list = []
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