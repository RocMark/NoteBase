# Var
```js
var (function scope) 
console.log(x)     // 會得到undefined，因為JS有順序性
var x = 100        // ESLint也建議所有變數應該放在最上方
console.log(x)
```

# [Hoisting 待看](https://pjchender.blogspot.tw/2015/12/javascript-hoisting.html)

[系列文解說 6:12 ](https://www.youtube.com/watch?v=q8SHaDQdul0&index=1&list=PLRqwX-V7Uu6YgpA3Oht-7B4NBQwFVe3pr)

Hoisting is JS Default Behavior
//* JS會將定義的變項移到最前面先執行
//? 由此 Var (Function Scope) 使其在整個Function都有作用

```js
function setup(){
    //背後會將var變項移到最前面先執行
    // var i,x,y; 

    console.log(x)  // undefined

    for(var i = 0; i <100; i++){
        // some stuff
    }
    var x = 20 // 背後會改成 x = 20
    var y = 30 // 背後會改成 y = 30
    console.log(x)  // 20
}
```
//! 可用let解決!