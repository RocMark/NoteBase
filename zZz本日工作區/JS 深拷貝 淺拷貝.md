# JS 深拷貝 淺拷貝

# 傳值 傳址
Primitive type 原始型別 
(by value) String,Number,Boolean,Null,Undefined

Object type 物件型別
(by reference) Object,Function,Array,Set

# 深拷貝 淺拷貝
> https://goo.gl/21EAyg
//* 淺拷貝: 物件傳址 (複製指標，仍用同塊記憶體)
```js
    let aaa = { test: 123 }
    let bbb = aaa
    bbb.test = 456
    console.log(aaa.test) // 被更動成 456 
```
//? 深拷貝: 建造一模一樣的物件，不共用記憶體
> 手動複製 (不佳麻煩)

# Object.assign (ES6) 
//? 淺拷貝
//! 注意 只能處理深度只有一層，若有繼承此方法則無法實現
```js
    let aaa = { test: 123 }
    let bbb = Object.assign({}, aaa)
    bbb.test = 456
    console.log(bbb)
    console.log(aaa.test)
```

# 轉成 JSON 再轉回來 / jQuery / lodash
//? 可實現真正的 Deep Copy
> 但要注意 Function 無法轉成 JSON，因此只能用於純資料的情況，(只可用於可轉成JSON的格式)，Function會直接消失

# jQuery ($.extend) / lodash (_.cloneDeep)
```js
    let ccc = JSON.parse(JSON.stringify(aaa))
    let ddd = $.extend(true, {}, aaa)
    let eee = _.cloneDeep(aaa)
```
