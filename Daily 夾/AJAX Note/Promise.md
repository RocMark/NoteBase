# Promise
> https://goo.gl/qXTSyJ (es6-promise polyfill)
用來描述多個操作之間的關係的方式

* 先 new 一個 Promise物件
* 完成 回傳 resolve() [value]
//!　resolve 只能有一個回傳值，有2+ 利用物件、陣列傳遞
resolve([r,s])


* 拒絕 回傳 reject()  [reason]
```js
  const myFirstPromise = new Promise((resolve, reject) => {
    resolve('傳下去的值') // 完成
    reject('failure reason') // 拒絕
  })

  //? 提供函式 promise功能
  function myAsyncFunction(url) {
    return new Promise((resolve, reject) => {
    })
  }
```

## Promise 物件狀態
* pending: 初始狀態
* fulfilled: 成功
* rejected: 失敗

## 多個 Function Promise 串接
* 回傳 Promise 物件
* 依順序 透過 .then() 串連
* 若不管順序可用 Promise.all() 串連
```js
  function funcA() {
    return new Promise(((resolve, reject) => {
      window.setTimeout(() => {
        console.log('A')
        resolve('A')
      }, (Math.random() + 1) * 1000)
    }))
  }
  funcA().then(funcB).then(funcC)
  Promise.all([funcA(), funcB(), funcC()])
    .then(function(){ console.log('上菜') })
```

## Promise 實例
* 原始 1->2->3
Function call Function 維護、閱讀困難
```js
  setTimeout(() => {
    console.log(1) // 顯示 1
    a(2) // 呼叫 a 顯示 2
  })

  function a(v) {
    setTimeout(() => {
      console.log(v) // 延遲一秒之後顯示 2
      b(3) // 延遲一秒之後呼叫 b 來顯示 3
    }, 1000)
  }

  function b(v) {
    setTimeout(() => {
    console.log(v) // 延遲一秒之後顯示 3
    }, 1000)
  }
```

* Promise 改寫版本
```js
  let delay = function (s) {
    return new Promise(((resolve, reject) => {
      setTimeout(resolve, s) 
    }))
  }

  delay().then(() => {
    console.log(1) // 顯示 1
    return delay(1000) // 延遲ㄧ秒
  }).then(() => {
    console.log(2) // 顯示 2
    return delay(1000) // 延遲一秒
  }).then(() => {
    console.log(3) // 顯示 3
  })
```