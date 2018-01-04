# vxe-ajax 用于Vue全局安装xe-ajax

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

// 在Vue实例中使用
this.$ajax.getJSON ('url', {id: 1}).then(data => {
  data
}).catch(data => {
  data
})
```

### 支持自定义扩展
``` shell
import Vue from 'vue'
import XEAjax from 'xe-ajax'
import VXEAjax from 'vxe-ajax'
import customs from './customs' // ./customs.js export function custom1 () {} 

XEAjax.mixin(customs)
Vue.use(VXEAjax, XEAjax)

// 调用自定义扩展函数
this.$ajax.custom1()
```

## License
Copyright (c) 2017-present, Xu Liangzhan