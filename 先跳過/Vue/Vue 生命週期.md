# Vue 生命週期

//* 配合圖片複習
https://goo.gl/dPDL47

# 範例
https://goo.gl/pNvCb1

# 生命週期用途
* 資料是否被移除
* dom 是否被移除
* 離線狀態
* 通知 各種資料變更

# 範例 Source Code
```js
    let apiURL = 'https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha=master'
    let myVue = new Vue({
        el: '.test',
        data: {
            a: 'A內容',
            content: null,
        },
        beforeCreate() {
            //? 通常用於 loading頁面/動畫
            // 回傳 undefined 還未進入撈資料階段
            console.log(this.a) 
            console.log('屬性未載入前')
        },
        created() {
            console.log(this.a) // A內容
            console.log('資料 $data 已可取得，但 $el 屬性還未被建立')
        },
        beforeMount() {
            console.log('還沒抓到 el 資料')
        },
        mounted() {
            console.log('已掛上 DOM，並取得 el 資料')
        },
        methods: {
            greet() {
                console.log('123')
            },
        },
    })
```

# Result
```js
    undefined
    "屬性未載入前"
    "A內容"
    "資料 $data 已可取得，但 $el 屬性還未被建立"
    "還沒抓到 el 資料"
    "已掛上 DOM，並取得 el 資料"
    "Download the Vue Devtools for a better development experience:
    https://github.com/vuejs/vue-devtools"
```