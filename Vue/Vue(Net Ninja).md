# VueNote (Net Ninja)
> Youtube 合集 http://t.cn/RdVMKQ4
http://t.cn/RdqYnk3

* event 變數
如果在 html 沒有要接其他變數，亦可省略
直接在 method update(event){} 即可
* @keyup.enter

#22 Props
由父傳給子的資料
```js
  // 子
  export default {
    props: {
      // 此處可先做傳入的資料型態驗證 fail 看 console
      ninjas: {
        type: Array,
        required: true,
      }
    }
    methods: {
      test(){ console.log(this.ninjas) }
    }
  }
  // 父層 切記要使用 v-bind
  <template>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
  </template>
  // 此 ninjas 對應到 父中 data 內的 ninjas
```


#24 Events  $emit (child to parent)
#25 Event Bus
> http://t.cn/RdVask0
勿用，了解觀念即可
* 使用 Vuex 較佳
由子元件 可以使用 $emit 觸發 父元鍵的自定義事件
> http://t.cn/RdVM65y
```js
  methods:{
    this.$emit('changeTitle','params')
  }


# main.js
* App.vue 可視為一個 component
並寫於 index.html 中
* 所有 vue code 會被 render 於 #app 中
```js
  // import vue library
  import Vue from 'vue'
  // 對應 App.vue 檔案
  import App from './App.vue'

  // init root 元素
  new Vue({
    el: '#app',

    // 將 App render 進 #app
    // 解說 http://t.cn/RVb3svN
    render: h => h(App),

    // 原樣子 經 ES6 & createElement 已 h 代替
    render: function (createElement) {
        return createElement(App);
    }
  })
```

#19 Nesting Components
* template / script / style

1. 撰寫 Nav.vue (大寫開頭 放於 src 最上層即可)
2. 先註冊 才可在 其他 component 中使用

# 註冊 component
ES6 
import Nav from ~ 
對應 export default
* 全域註冊
寫於 main.js中
```js
  import Nav from './Nav.vue'
  Vue.component('Nav',Nav)

  // 於其他 compo-file template中
  <Nav></Nav>
```
* 本地註冊
寫於 其他 元件 file中
1. import Nav from './Nav.vue'
2. 撰寫 components 屬性
切記!!! 不可使用 html原有的名字 Ex:nav
最好用兩個字去組成
```js
  export default {
    components: {
      'main-nav': Nav
    },
  }
```

#20 scoped css
1. 將全域 style 寫於 root
Ex: normalize & base & var

* 注意!! component style 會覆蓋於 上層 style
改寫成 scoped 要手動刷新一次

scoped 只作用於該元件，並附蓋掉其他來源設定
<style lang="sass" scoped>
  h1 { color: red; }
</style>

## scoped 原理
vue 會給予該物件 data-v-編碼
h1[data-v-160ar736]{ color: red; }


#22 待續