# JS 預設參數詳解 (MDN整理)
* ES6 預設參數 (Default parameters)

# 基本用法
* 過去都要先自行檢查是否為 undefined
* 傳入參數
undefined => 使用預設值
null => 使用 null
```js
  function foo(x = 100) {
    console.log(x)
  }
  foo() // 100
  foo(undefined) // 100
  foo(null) // null

  // babel 版本
  function foo() {
    // 過去都要自行判斷 該值是否為 undefined
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
    console.log(x);
  }
```
* 預設參數，於呼叫時才給予值 ()
於建立執行環境的 建立階段 進行給予值，因此每次呼叫都會刷新
```js
  function append(value, array = []) {
    array.push(value)
    return array
  }
  append(1) // [1]
  append(2) // [2], not [1, 2]
```
* 預設參數可以被後方的預設參數取用
```js
  function foo(bar = 50, baz = bar + 50) {
    console.log(baz)
  }
  foo() // 100
```

* 傳入參數順序性
```js
  function f(x = 1, y) {
    return [x, y]
  }
  f() // [1, undefined]
  f(2) // [2, undefined]
```
* 亦可搭配 ES6 解構方式來撰寫
```js
  function faz([x, y] = [1, 2], { z } = { z: 3 }) {
    return x + y + z
  }
  faz() // 6

  const [x, y] = [1, 2]
  const { z } = { z: 3 }
  console.log(typeof x) // number
  console.log(typeof z) // number
```
* 勿用
```js
  // 此方法無法執行 ReferenceError
  function fuk(a = go()) {
    function go() { return ':P' }
  }
  fuk()
```