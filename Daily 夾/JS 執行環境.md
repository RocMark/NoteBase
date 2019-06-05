# JS 基本觀念
Hoisting / undefined / 執行環境 / Scope Chain
> http://t.cn/R1C798l (系列網址)
> http://t.cn/R19ES5w (精品好文)

# undefined K 
為一種特殊値 不等於 not define
not define 會噴錯

* Function 內部也會進行 Hoisting

# 執行一段函式的背後發生的事件順序 K
解釋、想像一下 執行環境怎建立 & Call Stack 回收的樣子
```js
  function b(){}
  function a(){ b() }
  a()
```

# JS GC
當沒有被參照時，就會進行回收

# 不同執行環境的 變量 不會互相影響 K 
* ES5 之前 變數 Scope 切割的最小單位為 Function
* ES6 為 {}，使用 let / const

* 注意 若在 Function 內 沒有用 var 重新宣告，會產生全域變數，進而變成改寫全域變數中的 myVar
```js
  function b() {
    // myVar 會在 b 中 hoisting 因此不會取到外部變數
    console.log(myVar) // undefined
    var myVar = 123
    console.log(myVar) // undefined
  }
  function a() {
    var myVar = 2
    b()
    console.log(myVar) // 2
  }
  var myVar = 1
  console.log(myVar) // 1
  a()
```


## 上題延伸 K
* 若 b 中沒有 var myVar  (把 b() var myVar 註解掉)
=> 進行外部參照 取到外層 即 Global 執行環境中的 myVar

* 並非取到 a 執行環境中的 myVar 的原因
看程式碼的相對位置，func a & b 的外層皆為 Global
* func c 範例
func d 的外部即為 func c
```js
  function b(){ console.log(myVar) }

  function a(){
    var myVar = 2
    b()
    console.log(myVar)
  }
  var myVar = 1;
  a();
  // result:1  (b會從 global context抓),2

  function c() {
    var testVar
    function d (){
      console.log(testVar)
    }
  }
```

* 若 func a 中沒有宣告 myVar  (把 a() var myVar = 2 註解掉)
=> 進行外部參照 取到外層 即 Global 執行環境中的 myVar
```js
  function b(){
    var myVar ;
    console.log(myVar);
  }
  function a(){
    // var myVar = 2
    b();
    console.log(myVar);
  }
  var myVar = 1;
  a();
  // result: undefined,1
```

* 將 myVar 重新宣告都註解掉
=> 
```js
  function b(){
    console.log(myVar);
  }
  function a(){
    b();
    console.log(myVar);
  }
  var myVar = 1;
  a();
  result:1,1
```

# Outer Environment 外部參照 K
* Outer Environment
當該執行環境中沒有該變量，會往外部的環境做參照

* 要如何區分外部環境
看程式碼的相對位置 !!!! 

* Lexical Environment 詞彙環境
程式碼在程式中的實際所在位置



# Scope Chain K
找尋變量的過程，由內往外找，直到 全域環境
* b is not defined
最外層的 global 找不到 function b  (無法往內參照)
* a() // 2

1. 建 a 的環境
2. myVar / func b (Hoisting / 存入記體體)
3. 給與 myVar = 2 
4. 執行 b() => 建立 b 執行環境
5. 因內部無 myVar 外部參照去找 myVar
6. 根據 外部環境 參考 程式碼相對位置
其外層為 func a
7. 取得 func a  myVar 2 的值
console.log(myVar) // 2
8. b() 執行完畢 回收 => a () 執行完畢 回收
=> Global 執行完畢回收
```js
  function a() {
    function b() {
      console.log(myVar)
    }
    var myVar = 2
    b()
  }
  var myVar = 1
  a() // 2 
  b() // b is not defined
```

# JS 執行環境補充
Execution Context

# 執行環境 重點 K
* 單執行緒
* 同步執行 (排隊)
* 只有一個 global context
* function 被呼叫後，先開始建立執行環境，才執行內部程式碼
* 就算是自己呼叫自己只要 call function 就會建立執行環境
遞迴、while Loop

# JS 執行環境 K
以 Function 做 區分環境
所有執行環境都可以藉由 Scope Chain 取得 Global 變數
* 全域 Global
程式開始執行的預設環境
* 函式
開始跑函式內部程式碼的時候
* Eval 把一串字串當作指令執行
會先降字串解析成JS，效能差不建議 (ESLint不建議使用)

## 執行環境 堆疊
* Event Loop 概念 (有空待補....)
* Browser JS  為 單執行緒
因此每次只能執行一件事，當一個事件在執行時，其他會被丟到執行佇列中。

* 當 解析JS檔時
1. 會先建立 Global Context (全域環境) 於 Call Stack 當中
2. 執行 a() 會建立 a的執行環境 放入 Call Stack當中
* Call Stack 特性為 後進先出
4. 會等該 a() 的內容執行完畢後，會從 CallStack 回收掉
5. 執行 Global Context 的 console.log()
```js
  function a() {
    var c = 1
  }
  a()
  console.log('123')
```

# 詳解執行環境 K 
每次 Call Function 會建立 新的執行環境
執行環境又分兩階段 建立階段 / 執行階段

# 執行環境 可以想像成一個物件 K
* variableObject (VO)
負責記錄執行環境中定義的變數和函式
於建立階段 建立，執行階段給與値
* scope chain 負責記錄每個環境之間切換的關聯，例如從 global -> a() [外部參照用]

scope chain 屬性，記錄包含 自己的 VO + 所有上層執行環境的 VO 的集合。
```js
  executionContextObject = {
    scopeChain: {},
    variableObject: {},
    this: {}
  }
```
# 直譯器流程 K
1. 執行 Function 前 建立執行環境
2. 建立階段
  * 建立階段，初始化這個環境，除了 arguments 外其他都只是先定義變數 & 函式指標，並沒有賦值。
  * 初始化 scope chain
  * 判斷決定 this 的值  (因此 this 在函式呼叫時才被決定)
  * 建 variableObject (簡稱obj)
    * 建 arguments object 
    [檢查傳入參數，初始化參數的名稱，值以及建立參考]
    //! 參數的值 會在建立階段就給與。

    * 將 function 的宣告 加入obj
    * 將 執行環境裡的變數 加入obj (初始化值為undefined)
3. 執行階段
給與値、設定 Function 的參考、逐行解譯執行程式碼

```js
  function foo(i) {
    var a = 'hello';
    var b = function B() { }; // 建立階段 不給與值/指標
    function c() { } // 建立階段先給指標
  }
  foo(22);

  // 建立階段 / 執行階段
  fooExecutionContext = {
    scopeChain: { ... },
    variableObject: {
      // arguments object
      // 0: 表第一個傳入的參數 1: 表2......
      //! 參數的值 會在建立階段就給與。
      arguments: { 0: 22, length: 1 },
      i: 22,
      a: undefined, // 未給與値
      b: undefined,  // 函式運算 不給與値
      c: pointer to function c(), // 函式宣告 給與指標

      // 執行階段才給與値 進行覆寫建立階段 建立的變數 / 其他不變
      a: 'hello',
      b: pointer to function B()
    },
    this: { ... }
  }
```

## 注意 Function 在 建立階段的 不同行為 K
- 函式宣告 Function Declaration
> function c(){}
函式宣告會於建立階段，賦予該值 指標指向此 Function

- 函式表達式 Function Expression
函式表達式，需要等待至執行階段才會給與值。
> var b = function B() {}
```js
  ;(function () {

    console.log(typeof a)
    console.log(typeof b)
    
    var a =  function () {} // 執行階段 給與值
    
    console.log(typeof a) // function 
    
    var b = 123 // 執行階段 給與值 進行覆寫
    console.log(typeof b) // number 
    
    function b() { }
    // function b (){　} 並非賦值 因此不會覆寫
    console.log(typeof b) // number 

    var b = function (){}
    console.log(typeof b) // function

    // 執行階段 a: pointer to function a() b: 123
  }())
```

## 函數宣告 優先於 變數宣告 K
* 建立階段: Hoisting 函數宣告 優先於 變數宣告
```js
  // Hoisting 函數宣告 優先於 變數宣告 (不論 Code相對位置)
  function a() {}
  var a; // 並沒有重新給值，因此 執行階段此行不會執行
  console.log(typeof a) // function

  // 於執行階段給予值
  var b = 1;
  function b() {}
  console.log(typeof b) // number
```


# 練習題 K
* Why 可在宣告前存取 foo [Hoisting]
在建立階段我們就已經將變數建立了

* Foo 被宣告 2 次，為什麼 foo 是 function 而不是 undefined 或 string ?
第一個 log()
1. 建立階段
函式宣告 給與 指標 // foo: pointer to function foo()
2. 執行階段 var foo = 'hey' 
進行覆寫建立階段的變數，因此 foo: 'Hey' 

第二個 log()
因為執行階段會給於值，因此 foo 被改寫成 str 'hey'

* Why bar is undefined ?
建立階段還未給與値，因此為 undefined
執行階段 才會給與値
```js
  (function () {
    console.log("foo: " + typeof foo); // function pointer
    var foo = 'hey'
    console.log("foo: " + typeof foo); // string
    function foo() { return 'hello' }

    console.log("bar: " + typeof bar); // undefined
    var bar = function() { return 'world' };
  }())
```

```js
  // 建立階段 Hoisting c = function pointer
  // 執行階段給予值 先讀 c = 1 後執行 c() 此時c 為 1
  // 因此 c is not a function
  var c = 1
  function c() {
    // c is not a function 不會執行此
    console.log(typeof c)
  }
  console.log(c) // 1
  c() // c is not a function
```