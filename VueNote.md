# VueNote (Net Ninja)
http://t.cn/RdqYnk3

* event 變數
如果在 html 沒有要接其他變數，亦可省略
直接在 method update(event){} 即可

@keyup.enter

#22 待續



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