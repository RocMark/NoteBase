# WebPack
> 前端集合 功能類似上 含 Babel , CommonJS , React(JSX)....etc
> Browserify可達同效果，但需額外Plugins

//* ModuleBundler

# Module
> Abstraction
> Encapsulation
> Reusable
> single task

# Webpack功能
> Loader (sass,jsx....編譯) (類Gulp)
> Clever Parsing
> Plugins (壓縮/轉譯)於產生Bundle

//* Code splitting
> 將Code分成多個 bundles, async loading, loaders to preprocess JSON,SASS

//? Code splitting 用於 SPA
> 若有many routes，用戶只需要fetch所需
> 若前往其他 routes，通用的程式碼不需要重新fetch

//* Hot Module Replacement
> 用於開發，取代舊modules時，不需要reload
> 如果一個State需要經過多個指令才能觸發，不需要reload，可以保存狀態對測試，極佳!


# webpack.config.js
```js
module.exports = {
    entry: 'app.js',
    output:{
        path: './dist',
        filename: 'bundle.js'
    },
    module:{
        loaders:[
            {test:/\.css$/,loader: 'style!css'}
        ]
    }
}
```


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