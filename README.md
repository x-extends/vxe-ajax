# vxe-ajax

[![gitee star](https://gitee.com/x-extends/vxe-ajax/badge/star.svg?theme=dark)](https://gitee.com/x-extends/vxe-ajax/stargazers)
[![npm version](https://img.shields.io/npm/v/vxe-ajax.svg?style=flat-square)](https://www.npmjs.com/package/vxe-ajax)
[![npm build](https://travis-ci.com/x-extends/vxe-ajax.svg?branch=master)](https://travis-ci.com/x-extends/vxe-ajax)
[![npm downloads](https://img.shields.io/npm/dm/vxe-ajax.svg?style=flat-square)](http://npm-stat.com/charts.html?package=vxe-ajax)
[![gzip size: JS](http://img.badgesize.io/https://unpkg.com/vxe-ajax/dist/vxe-ajax.umd.min.js?compression=gzip&label=gzip%20size:%20JS)](https://unpkg.com/vxe-ajax/dist/vxe-ajax.umd.min.js)
[![npm license](https://img.shields.io/github/license/mashape/apistatus.svg)](LICENSE)

用于 Vue 全局安装 xe-ajax

## Installing

```shell
npm install xe-ajax vxe-ajax
```

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
    this.$ajax.get('/api/user/list').then(data => {
      this.list = data
    })
  }
}
</script>
```

## License

[MIT](LICENSE) © 2017-present, Xu Liangzhan
