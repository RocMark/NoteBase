# JS Function基礎整理
> https://ithelp.ithome.com.tw/articles/10191549

# 內容
> What is Function
> Scope / Hoisting

//* let 為 區域變數，減少汙染也防止被外面存取
//? let & const scope 由 { } 來切分!!!


# What is Function & Why use
> 函式將多段程式碼包裝起來，以便維護&重複利用
//* JS中除了基本型別以外都是物件

# Function 定義方式
```js
function name(arg1, arg2){ return arg1 + arg2 }

//? Function 也屬於Object的一種
//* 所以可以指定給某個變數
// 後方的Function 為匿名函式
let square = function (number){ return number * number }
let square = function func(number){
    //* 亦可給予其名字
    //! 但作用域 限於此
    // console.log( typeof func) // function
    return number * number
}
// console.log( typeof func) // undefined
```

# Function Scope
//! 切記，"function"是變數有效範圍的最小單位
<!-- (ES6以前-var) -->

//!　此範例要再複習 !
```js
var x = 1
let doSomeThing = function(y) {
    //! X 在function內無宣告
    //? 導致去更改了外層的 var x = 1
    x = 100  
    return x + y
}
console.log( doSomeThing(50) )  //* 150
console.log( x ) //* 100
```

# Var Hoisting 變數提升

//! 強烈建議所有可能用到的變數都盡量在 scope 的最上面先宣告完成後再使用。

//* 在自家scope中有宣告，JS自動將宣告拉至scope的最上面而造成此結果。

```js
var x = 1
var doSomeThing = function(y) {
    // 瀏覽器解析為 var x // undefined狀態
    // let x = 100 (o)
    // var x = 100 (o)
    console.log(x)   //! undefined
    var x = 100
    // let x = 100 //! 會出錯而非得到 undefined
    // 瀏覽器解析為 x = 100 // 至此才給值
    return x + y
}
console.log( doSomeThing(50) )   // 150
console.log( x )                 // 1
```

# Function Hoisting 

```js
console.log(square(2)) 
//* 函式宣告方式 可以在宣告前使用
function square(number) {
    return number * number
}
//! 函式運算式定義會出錯
// TypeError: square is not a function
var square = function (number) {
  return number * number
}
```

# 全域變數 與 區域變數
<!-- JS 沒有所謂全域變數 -->
> 只的是全域物件 即 window 在 node環境叫 global
```js
var a = 10
console.log(window.a) // 得到10
```

//! 函式內 沒有 var的變數會變成 全域變數
```js
var x = 1
let doSomeThing = function(y) {
    //! X 在function內無宣告
    //? 導致去更改了外層的 var x = 1
    x = 100  
    return x + y
}
console.log( doSomeThing(50) )  //* 150
console.log( x ) //* 100
```
