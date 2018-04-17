# VueJS 初探 Web Component
https://www.youtube.com/watch?v=T2JsTE0Hq58

# MVVM (Model-View-ViewModel)
Vue 為 ViewModel 用於作為 Model(JS) / View(DOM) 作連結

Vue 處理 DOM Listeners & Data Bindings

# 元件系統
//? 必看
```js
let vm = new Vue({
    el: '#app', // 用來掛載 Vue實體的元素
    data: {}, // 要綁定的資料
    props: {}, //! 用來接受外部資料的屬性
    methods: {}, // Vue實體可用的方法
    watch: {}, // 觀察 Vue實體內的資料變動
    computed: {}, // 自動為內部資料計算過的屬性
    template: '...', // 提供Vue 實體編譯後的樣版
    components: {}, // 定義子元件
})
```

# Vue Components 註冊
//? 將常出現的元件，封裝成自定Tag，以達複用性

> 有 全域 & 區域之分
//* 區域型注冊 註冊於 components屬性
```js
    <div id="app">
        <myComponent></myComponent>
    </div>
    new Vue({
        el: '#app',
        components: {
            'myComponents': {
                template: '<div class="component"> Custom Component </div>'
                components:{
                    //! 可以作多層 components 子元件下的子元件
                    childBlock: Vue.extend({
                        template: '<div class="component"> Child Component </div>'
                    })
                }
            }
        }
    })
```
//? 全域型注冊 Global
```js
    <div id="app">
        <myComponent></myComponent>
    </div>
    Vue.component('my-component',{
        template: '<div class="component"> Custom Component </div>'
    })
    new Vue({ el:'#app' })
```

# 子元件注意事項
//! 子元件的data 必須是Function

> Why? Scope 最小單位為 Function
//? 為了避免拿到上層的資料，而強烈建議使用

//* 根元件可用物件形式表示
```js
    // Root Components
    new Vue({
        el: '#app',
        data: {
            msg: 'Root Msg'
        }
    })

    // Child Components
    Vue.component('myCompo',{
        templateL: '~',
        data(){
            return {
                msg: 'custom Compo'
            }
        }
    })
```

# 將網頁模版封裝成 Component

//* HTML標籤封裝
```js
    let CustomMain = Vue.extend({
        template: '<div></div>'
        components: {
            CustomBlock
        }
    })
```

//? 若template 過於複雜 可以使用此方法
//! 必須使用 一個 div 包裹所有內容 (最外層只能有一個節點)
```html
<script type="text/x-template" id="myCompo">  
    <div>
        <div class"compo">Custom Compo</div>
        <div class"compo">Custom Compo</div>
        <div class"compo">Custom Compo</div>
        <div class"compo">Custom Compo</div>
        <div class"compo">Custom Compo</div>
    </div>
</script>
```
```js
    Vue.component('myCompo',{
        template: '#myCompo'
    })
```

# render function (Vue2.0)
Template compile to Render Function
//* 大部分情況用不到，Vue執行過程內建，但也可自行撰寫
```js
    // <div class="header">{{greet}} {{msg}}</div>
    let CustomHeader = Vue.extend({
        data() {
            return {
                greet: 'Hi',
            }
        },
        //! 外部帶入的參數
        props: {
            msg: {
                type: String,
                default: 'Hello',
            },
        },
        render(createElement) {
            return createElement(
                'div',
                { class: 'header' },
                [this.greet, ' ', this.msg ]
            )
        },
    })
```

# LifeCycle (Vue元件實體生命週期)

# props 外部帶入的資料