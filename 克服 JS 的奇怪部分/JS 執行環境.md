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