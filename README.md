# VXEAjax 用于Vue全局安装xe-ajax

## 通过NPM安装最新版本

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
      <li v-for="item in list" :key="item.id">item.name</li>
    </ul>
  </div>
</template>

<script>
import { getJSON } from 'xe-ajax'

export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    init () {
      getJSON('services/user/list').then(data => {
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