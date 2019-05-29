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