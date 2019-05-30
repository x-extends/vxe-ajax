# vxe-ajax

[![npm version](https://img.shields.io/npm/v/vxe-ajax.svg?style=flat-square)](https://www.npmjs.org/package/vxe-ajax)
[![npm build](https://travis-ci.org/xuliangzhan/vxe-ajax.svg?branch=master)](https://travis-ci.org/xuliangzhan/vxe-ajax)
[![npm downloads](https://img.shields.io/npm/dm/vxe-ajax.svg?style=flat-square)](http://npm-stat.com/charts.html?package=vxe-ajax)
[![gzip size: JS](http://img.badgesize.io/https://unpkg.com/vxe-ajax/dist/vxe-ajax.min.js?compression=gzip&label=gzip%20size:%20JS)](http://img.badgesize.io/https://unpkg.com/vxe-ajax/lib/index.umd.min.js?compression=gzip&label=gzip%20size:%20JS)
[![npm license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/xuliangzhan/vxe-ajax/blob/master/LICENSE)

## Installing

```shell
npm install xe-ajax vxe-ajax --save
```

Get on [unpkg](https://unpkg.com/vxe-ajax/) and [cdnjs](https://cdn.jsdelivr.net/npm/vxe-ajax/)

```javascript
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script src="https://cdn.jsdelivr.net/npm/xe-ajax"></script>
<script src="https://cdn.jsdelivr.net/npm/vxe-ajax"></script>
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
    <li v-for="item in list" :key="item.id">{{ item.name }}</li>
  </ul>
</template>
```

```html
<script>
export default {
  data () {
    return {
      list: []
    }
  },
  created () {
    this.$ajax.getJSON('/api/user/list').then(list => {
       this.list = data
    })
  }
}
</script>
```

## License

Copyright (c) 2017-present, Xu Liangzhan