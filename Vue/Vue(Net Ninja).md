# VueNote (Net Ninja)
> Youtube 合集 http://t.cn/RdVMKQ4
http://t.cn/RdqYnk3

# 總覽
1. 載入 axios
2. 動態 component (切換資料存活)
3. Mixin

* Custom directive  (略 要用再補)
* $emit / event bus (略 用Vuex較佳)

# 雜筆
  * vue.resource（ 2.0後不更新）
  * event 變數
  如果在 html 沒有要接其他變數，亦可省略
  直接在 method update(event){} 即可
  * @keyup.enter
<!-- --------------------- -->






# 使用 axios
  1. 可用 cdn直接引用
  2. npm i axios -S
  於 main.js 中 加入下列即可
  ```js
    // eslint-disable-next-line
    import axios from 'axios';

    axios-get
    testUrl
  ```
<!-- --------------------- -->

#28 Dynamic Components
  * 切換時，會銷毀元件 
  可利用 <keep-alive></keep-alive> 保存該元件防止銷毀
  * form-one form-two 只輸出其一
  <keep-alive>
    <component v-bind:is="compo"></component>
  </keep-alive>
  <button @click="compo=form-one">one</button>
  <button @click="compo=form-two">two</button>
  data(){ compo: 'form-one' }
<!-- --------------------- -->

#34 Custom Directives (待補完)
  http://t.cn/RdIqEaa
  * v-rainbow="binding"
  * el 整個元素
  ```js
    // 全域註冊
    Vue.directive('rainbow',{
      bind(el,binding,vnode){
        el.style.color = "#" + Math.random().toString(16).slice(2,8)
      }
    })
    // 本地註冊
    directive: {
      'rainbow': {
        bind(el,binding,vnode){
          el.style.color = "#" + Math.random().toString(16).slice(2,8)
        }
      }
    }
  ```
<!-- --------------------- -->

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
  ```
<!-- --------------------- -->