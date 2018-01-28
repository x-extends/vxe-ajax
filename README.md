# VXEAjax 用于Vue全局安装 xe-ajax

安装完成后自动挂载在vue实例 this.$ajax(XHR请求函数)

### 直接引用 script 全局安装，VXEAjax 会定义为全局变量
``` shell
<script src="./dist/xe-ajax.min.js" type="text/javascript"></script>
<script src="./dist/vxe-ajax.min.js" type="text/javascript"></script>

// ./main.js 安装
Vue.use(VXEUtils, XEUtils)

// ./app.js 通过vue实例的调用方式
// ...vue代码省略
this.$ajax.doGet('services/user/list', {id: 1})
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
  Vue.use(VXEUtils, XEUtils)
})

// ./app.js 调用
define([], function () {
  // 通过vue实例的调用方式
  // ...vue代码省略
  this.$ajax.doGet('services/user/list', {id: 1})
})
```

### ES6 Module 安装方式
``` shell
npm install vxe-ajax --save
```

### 通过 Vue.use() 来全局安装
``` shell
import Vue from 'vue'
import XEAjax from 'xe-ajax'
import VXEAjax from 'vxe-ajax'

Vue.use(VXEAjax, XEAjax)

// 通过vue实例的调用方式
this.$ajax.doGet('services/user/list', {id: 1})
this.$ajax.getJSON ('services/user/list', {id: 1})
this.$ajax.doPost ('services/user/save', {id: 1})
this.$ajax.postJSON ('services/user/save', {id: 1})
```

### 混合函数
#### 文件 ./customs.js
``` shell
export function custom1 () {
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
this.$ajax.custom1()
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
      this.$ajax.getJSON('services/user/list', {id: 123})
      .then(data => {
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