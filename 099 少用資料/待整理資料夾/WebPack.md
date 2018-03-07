# WebPack
> https://www.youtube.com/watch?v=9kJVYpOqcVU (待看)

# What is WebPack
1. concat JS / CSS file
2. babel JS
3. 

# 載入順序不正確會出錯
```pug
script(src="./js/main.js") //! (x)
script(src="./js/dom-loader.js")
```

# module loader
//* JS檔分成多個小檔案 concat後載入順序關係需要設定
require.js
browserify
webpack

# 設定載入順序
```js
// commonJS / NodeJS 寫法
require('./module1.js')
require('./module2.js')
```

# WebPack 安裝
> npm install -g webpack (才可使用指令)
> npm install webpack --save-dev

# webpack.config.js 範例碼
> https://gist.github.com/learncodeacademy/25092d8f1daf5e4a6fd3