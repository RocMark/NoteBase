# JS Scope
> http://www.cnblogs.com/betarabbit/archive/2012/01/28/2330446.html

# Scope / Hoisting 重點
* ES5 Scope 切割單位為 Function 
* ES6 let const 為 Block Scope 因此只需要以 {} 劃分
* 不論是否被執行，皆會被提升 (執行前的建立階段就以做 Hoisting)
Hoisting 於 建立執行環境的 建立階段執行 (複習 JS 執行環境)
* 只會 Hoisting 宣告的部分，賦値仍要在執行階段執行。

* 函式 宣告式 
會整塊程式碼被 Hoisting，因此於宣告前使用
* 函式 表達式
只會提升宣告的部分，賦値仍要在執行階段執行。

* 變數同名 覆寫權重
變數宣告 / 函式表達 (此二看Code位置) > 函式宣告 > 參數宣告 > this

# 測試題 (必看) K
這題會解釋，就免繼續看了
```js
  var foo = 1
  function bar() {
    if (!foo) {
      var foo = 10
    }
    console.log(foo) //10
  }
  bar()
```

# Scope 重點 K
* ES5 Scope 切割單位為 Function 
* 不論是否被執行，皆會被提升 (執行前的建立階段就以做 Hoisting)
注意!! 只會 Hoisting 宣告的部分，賦値仍要在執行階段執行。
```js
  var foo = 1;
  function bar() {
      // var Scope 以 Function 劃分
      // 不論是否被執行，皆會被提升 (執行前的建立階段就以做 Hoisting)

      // var foo = 10 進行了 Hoisting  var x; 提升至最上
      // 因此首個 console.log(foo) //  undefined
      // 又因 !undefined => true，進入該區塊 var foo = 10
      // 因此末個 console.log(foo) //  10
      console.log(foo)
      if (!foo) { 
        var foo = 10; 
      }
      console.log(foo);
  }
  bar();
```

# 函式 Hoisting K
* 函式 宣告 會整塊 被 Hoisting 因此可於 宣告前使用
* 函式 表達 則與一般變數相同
只會提升宣告的部分，賦値仍要在執行階段執行。
```js
  function test() {
      foo() // TypeError "foo is not a function"
      bar() // 可執行
      var foo = function () { console.log( "函式表達" ) }
      foo() // 可執行
      function bar() {  console.log( "函式宣告" ) }
  }
  test()
```

# ES5 Scope 切割單位為 Function  K
函數級作用域(function-level scope)
* ES5 因此需要用 IIFE 去產生一個暱名函式
* ES6 let const 改為 Block Scope 因此只需要以 {} 劃分
```js
  // if else 中的 var x = 2  等同於 重新宣告了 x
  var x  = 1
  console.log(x)
  if (true) {
    var x = 2
    console.log(x)
  }
  console.log(x)
```

# Declarations, Names, and Hoisting
一個作用域中的 命名 來自四種來源
在JavaScript中，一個作用域(scope)中的名稱(name)有以下四種：
1. 語言自身定義(Language-defined)
所有的作用域默認都會包含 this 和 arguments。
2. 傳入參數(Formal parameters) 
3. 函式宣告(Function declaration)
通過function foo() {}的形式。
4. 變數宣告(Variable declarations)
通過var foo;的形式。

# Name Resolution Order 名稱解析順序 K
* 上列的順序，即為名稱解析的順序
不代表無法重新被 assign，只是宣告的過程會被無視

# 變數命名 覆寫優先順序
* 當變數命名 相同時，並非創新創造(recreated)，而是重新給予值(assigned)
變數宣告 / 函式表達 (此二看Code位置) > 函式宣告 > 參數宣告 > this
```js
  function bar(foo) {
    var foo = 'varFoo'  // Step: 2
    var foo = function () { console.log('表達') }   // Step: 1

    function foo(){ console.log('宣告') } // Step: 3
    // 將 傳入變數 foo 刪除，才可見 this.foo的值 // Step: 4
    this.foo = 'thisFoo'
    console.log(foo)
  }
  bar(123) // 並非將此 123 刪除，此刪除傳入變數 foo => undefined
```

* 函式宣告 比 變量宣告 具有更高的優先級。K
```js
  function a() {
    var b;
    function b() { }
    console.log(typeof b) // function
  }
  a()
```

# 函式表達 & IIFE K
```js
  foo() // foo is not a function
  baz() // baz is not a function

  bar() // 可用，函式宣告式，整塊被提升
  function bar() = {}

  var foo = function () {}; // 匿名函式表達式 (只有foo被提升)

  var baz = function spam() { // 命名函式表達式 (只有baz被提升)
      // spam 變數名稱 只可以用於此區塊
      console.log(spam) // 指向此 Function
  }; 

  // Scope Chain 只可往外找，無法往內找
  spam(); // ReferenceError "spam is not defined"

  // IIFE 同 命名函式表達式 概念
  ;(function bzz() {
    var inSide = 123
    console.log(bzz) // 指向此 Function
  }())
  // IIFE 為 Function 因此 內部的變數無法被使用
  console.log(inSide) // inSide is not defined
  console.log(bzz) // bzz is not defined
```