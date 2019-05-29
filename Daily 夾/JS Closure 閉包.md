# JS Closure 閉包
* 呼叫函式時，內部函式會訪問 其外層函式 定義的變數，因為有參考/訪問所以不會造成該變數 GC，使變數一直保存在記憶體中。

# 六角解釋
> http://t.cn/R19liLI
* 呼叫函式內的函式，將記憶體封存在內層
```js
  function cMoney (){
    money = 500
  }
  function callMethod() {
    var money = 1000
    changeMoney = function () {
      money = 500
    }
    return function (price) { 
      // 這裡就是一個閉包，不過目前只會使用一次
      money = money - price
      return money
    }
  }
  // 存取內部函式的變數
  let updateMyMoney = callMethod() 
  console.log(updateMyMoney(100))
```
```js
  function callMethod(newMoney) {
    var money = newMoney || 1000
    return function (price) {
      money = money - price
      return money
    }
  }
  let updateMyMoney = callMethod(2000)
  let updateYourMoney = callMethod(1000)
  console.log(updateMyMoney(100)) // 1900
  console.log(updateYourMoney(100)) // 900
```

# 定義
內部函數可以訪問定義它們的外部函數的參數和變量

* 被內部函數訪問的外部函數的變量可以保存在外部函數作用域內而不被回收

# 用途
* 在模組中定義變數
希望變數一直保存在記憶體中但又不會「污染」全局的變數

# 閉包的優缺點
優點 :
* 可以讓一個變量常駐內存 (如果用的多了就成了缺點
* 避免全局變量的污染
* 私有化變量
缺點 : 
* 閉包會攜帶包含它的函數的作用域
因此會比其他函數占用更多的內存，引起 Memory Leak


# 流程
1. 定義 A 函數
2. 在 A 中定義普通函數 B
3. 在 A 中返回(return) B
4. 執行 A, 並把 A 的返回結果賦值給變數 C
5. 執行 C
```js
  function A(){
    function B(){
      console.log('Hey')
    }
    return B
  }
  const C = A()
  C() // Hey
```


# JS GC機制
在 JS 中，一物件不再被引用，那麼這個物件就會被 GC 回收。
否則這個物件一直會保存在記憶體中。
* B 定義在 A 中，因此 B 依賴於 A ，而外部變數 C 又引用了 B , 所以 A 間接的被 C 引用。
因此 A 不會被 GC 回收，會一直保存在記憶體中。

# JS GC機制 範例
count 是 函數A 中的一個變數，它的值在 函數B 中被改變，函數B 每執行一次，count 的值就在原來的基礎上累加 1 。因此，函數A中的 count 變數會一直保存在記憶體中。
```js
  function A() {
    let count = 0
    function B() {
      count += 1
      console.log(count)
    }
    return B
  }
  const C = A()
  C() // 1
  C() // 2
  C() // 3
```

# IIFE
(function(){})和 ()
第一個 () 為表達式，表匿名函式
* typeof (function () {}) // function
後面加 ()，表執行該匿名函式

# 閉包 常用進階做法
* 初始化容器、可添加/移除子容器

```js
  (function (document) {
    let viewport
    const obj = {
      init(id) {
        viewport = document.querySelector(`#${id}`)
      },
      addChild(child) {
        viewport.appendChild(child)
      },
      removeChild(child) {
        viewport.removeChild(child)
      },
    }
    // 在全域 定義一個 jView物件，並將該物件指向 obj
    // 即全域變數 jView 引用了 obj，obj 又引用了 viewport
    // 因此 IIFE 執行完後 obj 或 viewport 皆不會被回收 [有人在引用]
    // obj 或 viewport 就會一直保存在記憶體當中。
    window.jView = obj
  }(document))
  f(document)
```