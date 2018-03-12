# JS 模塊 & Require JS
> https://segmentfault.com/a/1190000009446236

# 演進如下
# 原始方法
> 缺點: 
1. 汙染全域變數(m1,m2)
2. 容易與其他模塊變量衝突
3. 模塊成員看不出 關聯性
```js
function m1() {/*...*/}
function m2() {/*...*/}
`
```
# 封裝
//? 內部狀態，可以被外部改寫 仍待改善
```js
let module1 = {
    _count: 0,
    m1() { /* m1 */ },
    m2() { /* m2 */ },
}
module1.m1() // 調用方法

//! 這樣就可以更改內部成員的值 不佳!
module._count = 5 
```

# 立即執行函數寫法 (IIFE) 
//* JS模塊基本寫法
//? 可以達到不暴露私有成員的目的
```js
let module1 = (function () {
    let count = 0
    let m1 = function () { /* m1 */ }
    let m2 = function () { /* m2 */ }
    return {
        m1,
        m2,
    }
}())
//* 外部即無法讀取內部的變量
console.log(module1.count) // undefined
```

# 放大模式
> 模塊很大，要分多塊or繼承
```js
let module1 = (function (mod) {
    mod.m3 = function () {
        /** 新增m3() 方法 */
    }
}(module1))
```

