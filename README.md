# vxe-ajax

[![npm version](https://img.shields.io/npm/v/vxe-ajax.svg?style=flat-square)](https://www.npmjs.org/package/vxe-ajax)
[![npm build](https://travis-ci.org/xuliangzhan/vxe-ajax.svg?branch=master)](https://travis-ci.org/xuliangzhan/vxe-ajax)
[![npm downloads](https://img.shields.io/npm/dm/vxe-ajax.svg?style=flat-square)](http://npm-stat.com/charts.html?package=vxe-ajax)
[![gzip size: JS](http://img.badgesize.io/https://unpkg.com/vxe-ajax/dist/vxe-ajax.min.js?compression=gzip&label=gzip%20size:%20JS)](http://img.badgesize.io/https://unpkg.com/vxe-ajax/lib/index.umd.min.js?compression=gzip&label=gzip%20size:%20JS)
[![npm license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/xuliangzhan/vxe-ajax/blob/master/LICENSE)

## Installing

```javascript
npm install xe-ajax vxe-ajax --save
```

```javascript
// require 配置
require.config({
  paths: {
    // ...,
    'xe-ajax': './dist/xe-ajax.min',
    'vxe-ajax': './dist/vxe-ajax.min'
  }
})
define(['vue', 'xe-ajax', 'vxe-ajax'], function (Vue, XEAjax, VXEAjax) {
  // ES5 环境中可以设置 {context: true} 模拟箭头函数
  Vue.use(VXEAjax, XEAjax, {context: true})
})
```

## Example

```javascript
import Vue from 'vue'
import XEAjax from 'xe-ajax'
import VXEAjax from 'vxe-ajax'

Vue.use(VXEAjax, XEAjax)
```

```html
<template>
  <ul>
    <li v-for="(item, index) in list" :key="index">{{ item.name }}</li>
  </ul>
</template>
```

```html
<script>
export default {
  name: 'App',
  data: {
    return {
      list: []
    }
  },
  created () {
    this.$ajax.fetch('/api/user/list').then(response => {
      response.json().then(data => {
        this.list = data
      })
    })
  }
}
</script>
```

## License

Copyright (c) 2017-present, Xu Liangzhan