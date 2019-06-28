# JS & jQuery AJAX比較

# jQuery
- 查 ajax()
- 查 ajax() 與 get / post 差異
- 查 .load()

# jQuery Defer (等同Promise)
* $.ajax() / $.getJSON()
都已經包好非同步了 [jQ 3.x版 支援到 IE9]
* $.Deferred() 為一個物件
```js
  return new Promise((resolve, reject) => {
    resolve('OK')
    // reject(new Error('Error'))
  })
  // 等同於
  $.Deferred().promise()
  // 使用方法: 等同於回傳 Promise物件
  return defer.promise( obj );
  // 可用 .then & .catch 作串接
```

## jQuery Defer 範例碼
- d2 做完 然後做 d3 然後做 callBack Function
- 用法同 Promise 回傳 Promise 物件串接 .then
```js
  function funcA() {
    const def = $.Deferred()
    // 作 API Call 完成後在用 resolve
    def.resolve('OK')
    return def.promise() // 回傳 Promise 作串接
  }

  function FuncB() {
    const def = $.Deferred()
    // 作 API Call 完成後在用 resolve
    def.resolve('FuncB Func OK')
    return def.promise()
  }

  funcA().then(FuncB).then((msg) => {
    console.log(`resolve ${msg}`)
  }).catch((err) => {
    console.log(`reject ${err}`)
  })
```
