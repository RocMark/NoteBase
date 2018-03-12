# WebPack

//* ModuleBundler

# Module
> Abstraction
> Encapsulation
> Reusable
> single task

# Webpack功能
> Code Splitting (分解Code Load需要的)
> Loader (sass,jsx....編譯)
> Clever Parsing
> Plugins

# Loaders
> sass , babel , pug , typescript

# Module bundler
```js
//* cats.js
let cars = ['one','two','three']
module.exports = cats
```
```js
//* app.js 為進入點(最後輸出成一個檔案)
//* 匯入上方的檔案
let cats = require('./cats.js')
```

# Webpack 安裝
npm install -g webpack
npm install webpack-cli -g

# package.json
npm init
entry point: app.js

# 輸出檔 記得Link對
<script src="bundle.js"></script>

# 指令
//* 前為進入點(原檔) 後為輸出檔名
webpack app.js bundle.js