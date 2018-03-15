# Module 整理
> https://www.youtube.com/watch?v=JDDn57_z5Og

# What is Module (好文)
> https://www.youtube.com/watch?v=SmBb2SSZqFU

# Module bundling方法
- ES6 modules
- CommonJS
- AMD
- UMD
> IIFE (可用let完全取代)

# from past to present 

# Lv1 multiple JS file 
> request++ bad
> 順序問題
> 載入block => defer & async & onload 解決

# Lv2 RequireJS
> 整合成一個file 並在主file中排順序
> AMD MODE 寫法
```js
    define([
        "component/underscore",
        "component/jQuery",
        "component/tracker",
    ], function(_, $,Tracker){
        //取得上述內容&變數
        console.log(_, $, Tracker) 
    })
```

# Lv3 CommonJS
> Pattern 跟 NodeJS類似
> 
```js
    //* main
    let speak = require('speak')
    speak('zh1', 25)

    //* speakJS
    // .add 為 function name
    let add = require('./math').add
    //* 匯出此至 mainJS
    module.exports =  function(name, age){
        let ageIn5Years = add(age, 5)
        return `${name} is ${age} old`
    }

    //* mathJS // 匯出add function
    module.exports.add = function(a,b){
        return a + b
    }
```

# Lv4 ES6 Module System

//* named Function & default function
```js
    //* named / foo.js
    export function getBreakfast(){}
    export function getLunch(){}
    export const baz= 'baz'
    export const letters = ['a','b','c']

    //! default function  寫於最下方
    export default function getDinner(){}

    //* named / index.js (解構寫法)

    // 一次全部import 並叫其為 fooFolder
    import * as fooFolder from './foo'
    //? fooFolder.getLunch() [前墜必加]
    // .getLunch() 會取到 indexJS 中的getLunch Function

    // 選擇性逐一載入
    import {letters} from './foo'
    import {getBreakfast, getLunch} from './foo'
    // 如果該名字找不到match會找 default import
    // default Function 名字可自行任意取
    import dinnerTime, {baz, letter} from './foo'
```

//* aliased Function (字命名Function)
> 可以用來避免 name conflicts
```js
    //* aliased / foo.js
    import {getBreakfast as MyOwnGetBF} from './foo'
```