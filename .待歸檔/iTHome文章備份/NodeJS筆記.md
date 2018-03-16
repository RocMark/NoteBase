**參考資料**
[ExpressJS Crash Course](https://www.youtube.com/watch?v=gnsO8-xJ8rs) 
[Node.js中文文檔](http://nodejs.cn/api/)

**環境架設**
* 開啟管理員權限
net user administrator /active:yes
* 安裝Node.js
* npm init  [建立package.json用]
注意:資料夾名字 不可有空格，不然會報錯，建立package.json失敗

**安裝插件**
* 安裝插件可直接到package.json中修改dependencies屬性
* --save 語法即是將插件加入相依清單內
* 星號表最新，^表以1.X.X開頭，~表以1.8.X(保兩數字)
* 新增完相依清單可以直接執行 npm install 一次安裝
```
  "dependencies": {
    "nodemon": "*",
    "express": "*",
    "body-parser": "*",
    "pug": "*",
    
    
  }
```
* npm install nodemon --save   [偵測Node.js更動自動刷新用]
* npm install express --save    [express插件]
* npm install body-parser --save [常用的middleware]

**建立檔案**
* express blog-system [可以迅速建立MVC的架構] (optional)
* 建立 Entry file   [index.js]
* Entry file名字需和package.json中的main相同(可修改)
* 用 node index 即可執行

**node.js 基礎語法**
* require 用於導入需要的模塊
```
var express = require('express')
```
* var app =express()   [??????]
* req, res, next 為規定的變數 請勿更動

**HTTP篇**
* get    取得資料
* post   上傳資料
* put    更新資料
* delete 刪除資料  
* set    設定
* listen backlog 進入的佇列（incoming queue）中所允許的連線數目 預設511
```
var app =express()
app.get('路徑',function(req,res){ res.send('YO')})
app.post('路徑',function(req,res){ res.send('YO')})
app.set('路徑',function())
app.listen(3000)
// app.listen(port,[host名],[backlog],[callback])

// 設定模版引擎 View Engine
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
```

**use方法**   待補補補補補補補補補補補補補補補補補補補補補補補補補補補補補補補補補補補補補補補補
* app.use(function(req, res, next) {})
* next()將執行傳遞給下一個中間件函數，避免沒有結束的HTTP請求，造成錯誤
* 先註冊的層，在訪問時會先調用，通過next()才到下一個匹配的url層
* get/post...etc皆為use方法的實踐
* Set Statice Path 用來開啟允許存許靜態檔案
* 
```
app.use(function (req, res, next) {
  console.log('in middleware one...');
  next();
});

// Set Static Path 
app.use(express.static(path.join(__dirname,'資料夾名')))

// Body Parser 的 Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
```

**MiddleWare**
[原文](http://www.jollen.org/blog/2013/11/expressjs-middleware.html)


