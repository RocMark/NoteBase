# Module bundling 工具
> https://www.youtube.com/watch?v=OhPUaEuEaXk

# Module 壓縮比較 2016
> https://github.com/samccone/The-cost-of-transpiling-es2015-in-2016

# browserify
> require('modules') in the browser
> require會去找檔案並放在同一支裡(像Node)
- 簡化預處理 transform system
- Helps with asynchronous code loading
- 支援使用 NPM套件
- 支援 ES6轉譯
```js
require('moduleName')
console.log(moduleName.getItem())
// 進入點 app.js 最後 bundle成一支檔案
```

# webPack 另開檔

# browserify V.S. webPack
browserify 較輕量化，更加模組化
webPack 功能較多


# babelify
> a Browserify transform for Babel

# Rollup / rollupify
> Rollup 靜態分析你的Code&相依性，只包含最小部分於最終bundle
> 會移除 dead code & 簡化

> $ rollup app.js --output bundle.js --format cjs