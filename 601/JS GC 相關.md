# JS 記憶體使用效率

## 提升GC效率
* 全域變數，不會自動 GC 直到換頁或重載
利用 IIFE，盡可能不建立全域變數
因為變數設於Function中無參考時，即會回收。
```js
  (function () {
    function foo (){
      var bar = {}   // 建立變數
      bar.someCall() // 執行完
      return bar // 但回傳給 b
    }
    var b = foo() // 參考 bar，因此 bar 不會被回收

    // 但是因為外層有包 IIFE 為一個 Function
    // 當 b 執行完畢即會進行回收
  }())
```
## 無法 GC 的情況
* setTimeout / setInterval
當 Timer不用時，應該善用 clearInterval() / clearTimeout()，清裡不在使用的 Timer
* 循環參考
DOM & JS 互相參考，導致兩者皆無法被 GC
```js
  var obj = doqs('someDiv')
  obj.expandProperty = obj
```
* 閉包
c 變數會因 n() 持續被參考，
因此 c 不會隨 a() 執行完畢回收，會持續占用記憶體
```js
  function a(num) {
    var c = num
    function b() { return c ++ }
    return b()
  }
  a()
```