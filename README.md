# 用于 Vue 全局安装 xe-ajax

[![npm version](https://img.shields.io/npm/v/vxe-ajax.svg?style=flat-square)](https://www.npmjs.org/package/vxe-ajax)
[![npm downloads](https://img.shields.io/npm/dm/vxe-ajax.svg?style=flat-square)](http://npm-stat.com/charts.html?package=vxe-ajax)

## AMD 安装

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
  Vue.use(VXEAjax, XEAjax)
})
```

## NPM 安装

```JavaScript
npm install xe-ajax vxe-ajax --save
```

### 通过 Vue.use() 来全局安装

```JavaScript
import Vue from 'vue'
import XEAjax from 'xe-ajax'
import VXEAjax from 'vxe-ajax'

Vue.use(VXEAjax, XEAjax)
```

## 示例

./Home.vue

```HTML
<template>
  <div>
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item.name }}</li>
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
  created () {
    this.init()
  },
  methods: {
    init () {
      this.loading = true
      this.$ajax.getJSON('/api/user/list').then(data => {
        this.loading = false
        this.list = data
      }).catch(e => {
        this.loading = false
      })
    }
  }
}
</script>
```

## License

Copyright (c) 2017-present, Xu Liangzhan