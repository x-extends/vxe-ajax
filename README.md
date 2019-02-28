# vxe-ajax

[![npm version](https://img.shields.io/npm/v/vxe-ajax.svg?style=flat-square)](https://www.npmjs.org/package/vxe-ajax)
[![npm build](https://travis-ci.org/xuliangzhan/vxe-ajax.svg?branch=master)](https://travis-ci.org/xuliangzhan/vxe-ajax)
[![npm downloads](https://img.shields.io/npm/dm/vxe-ajax.svg?style=flat-square)](http://npm-stat.com/charts.html?package=vxe-ajax)
[![gzip size: JS](http://img.badgesize.io/https://unpkg.com/vxe-ajax/dist/vxe-ajax.min.js?compression=gzip&label=gzip%20size:%20JS)](http://img.badgesize.io/https://unpkg.com/vxe-ajax/lib/index.umd.min.js?compression=gzip&label=gzip%20size:%20JS)
[![npm license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/xuliangzhan/vxe-ajax/blob/master/LICENSE)

## Installing

```shell
npm install xe-ajax vxe-ajax --save
```

在 [unpkg](https://unpkg.com/vxe-ajax/) 和 [cdnjs](https://cdn.jsdelivr.net/npm/vxe-ajax/) 上获取

```javascript
<script src="https://unpkg.com/xe-ajax/dist/xe-ajax.min.js"></script>
<script src="https://unpkg.com/vxe-ajax/dist/vxe-ajax.min.js"></script>
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