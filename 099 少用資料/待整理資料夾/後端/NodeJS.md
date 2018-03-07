# Node.js Middleware篇
* 必須 利用next() 去執行下一個middleware
* 需放在 get之前 順序有差避免無法執行

* 自定義 middleware & 使用
```
var logger = function (req, res, next) { 
    console.log('logging')
    next()
}
app.use(logger)
```