# Node.js後端開發起手式(一)
> 簡報 https://goo.gl/kGZQyL

# 前端工程師
* 前端工具
Task Runner (Gulp) / WebPack
CLI (Vue) 快速建構 開發環境 & 文件架構

* 轉到後端開發
網頁後端、指令工具開發
MongoDB 資料 (SQL預儲程序)、MapReduce 分散運算

# 安裝環境 從零開始

## Install NodeJS
* 建議透過 NVM安裝
可快速切換不同版本、方便測試、缺點: 較占空間

* 直接安裝
官網直接下載、版本固定、切換需要移除重裝

## nvm
nvm-windows / 進入Github頁 / 點 Release 選擇版號
推薦 nvm-setup.zip

> LTS 3年(Long Time Support)
可以透過 nvm 去安裝 nodeJS 8.11.2 
nodeJS & npm 通常會包一起下載

重開 VSCode 即可用內部 cmd 操作
* nvm list [查看當前的版本]
* nvm install 10.0.0
* nvm use 10.0.0 
使用該版本，用 nvm list 查看時前面會有 *號
* npm -v

## V8引擎
NodeJS & 瀏覽器皆採用 V8引擎
V8引擎，省略將Code轉成中介碼，直接變成機械碼做運作
## REPL 交互式命令 (類似開發人員工具)
node 即可執行
* 於 REPL 中跑 得到 100
```js
  const a = 100
  function run() {
    console.log(this.a)
  }
  run()
```


## Node Exec (VSCode插件)
案下 F8 即可執行該 JS檔案
F9 關閉

## node 於 cmd 操作
node 檔名.js  (.js可省略)

//! Error 
module.js:540 throw err;
因為路徑不合，注意開啟的資料夾位置。

## node 中 的 this
console.log(this) 代表 process

全域的 this 代表一個新物件
區域的 this 代表 global   (Function內)
```js
  console.log(this); // {}
  (function () {
    // console.log(this) // global
    console.log(this === global)
  }())
```

## npm 套件
> 可於 node_modules 查看 Source Code
* npm install 預設都是安裝到 local
npm install colors -g
npm uninstall 
* npm list --depth=0 只列出level 1
```js
  const colors = require('colors')
  console.log('123'.red)
  // 會在 cmd 中 出現紅色的 123
```

## Why 此設計
* 避免汙染 Node.js 全域環境
因為隨便掛個變數就掛載到全域，就可影響其他檔案
* Node 會自動加前後文，避免全域汙染
* REPL 沒有用這樣的機制
```js
  new (function(exports, require, module, __filename, __dirname) {
  //=====================
    // JS 檔案內寫的東西
    console.log(require);
    console.log(this);   // {}
    function run () {
      console.log(this);   // global
    }
    run();
  //=====================
  })({},function() {
    // require
  },{},"xxx","yyy");
```

### 無法用 this.a 存取變數 (有解)
避免使用，NodeJS此設計就是為了避免汙染 !
```js
  global.a = 100
  function run() {
    console.log(this.a)
  }
  run()
```

## Globals 
Globals內 有提供 API可用
* require()
* exports
* module
* __filename
* __dirname
* process

### require()
用來載入模組用 (NodeJS 內建模組、免安裝)
* fileSystem
```js
  const fs = require('fs')
  const data = fs.readFileSync('./testArea/AAA.text')
  console.log(data)
  // <Buffer 6c 6f 72 65> Buffer物件
  console.log(data.toString())
  // 就可以取得正確的字串了
```
載入套件    (從npm下載的套件)
載入自訂模組 (自己寫的模組)

## Package.json
紀錄安裝過哪些套件
npm init -y  [-y 代表全部都用預設的]

* devDependencies (預設儲存)
實際環境 也需要的 加入此
* devDevDependencies 
開發環境用 加入此

* lock 用來鎖住版號用 (最好也commit上去)

# exports & module.exports [11:35 review]
exports是現有空物件
* 只能修改 exports的屬性 然後用 require接收

module.exports 指向 exports

* 但require 看的是 module.exports
//! exports 不能重新 assign、但module.exports可以
```js
  // main.js
  const m1 = require('./BBB') // .js可省略
  m1.run()
  // module1.js 
  //* 可能加屬性
  exports.run = function () {
    console.log('run123')
  }
  //* 可以整個重新 assign
  module.exports = function(){ }
```

## pass by sharing
```js
  const a = { name: 'Mark' }
  let b = a
  b = null // 重新宣告，會將參考 指向 null 斷開，指向a的連接
  console.log(a) // { name: 'Mark' }
  console.log(b) // null
```

## __filename & __dirname
可回傳 檔案路徑 / 資料夾路徑
console.log(__filename)

## process
提供全域資訊 & 訊息控制
* process.argv
取得傳入參數 Ex: npm install -S -D
* process.env [環境變數]
可用多台電腦的辨別、查詢tmp資料夾 [process.env.tmp]
window可用 set來看
* process.cwd()  [當前工作目錄]
在哪個工作目錄 操作 node