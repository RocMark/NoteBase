# Npm Scrip

#
1. 建基礎 package.json
npm init -y
2. 修改 Script
3. 執行串連 (serial)
使用 &&，順序性
4. 執行並連 (parallel)
使用&，可同時執行的
```json
  {
    "scripts": {
      // 使用 npm test / npm t 執行
      "test": "pug tmp",
      // 使用 npm start 執行
      "start": "node index.js",
      "serial": "npm test && npm start",
      "parallel" : "npm test & npm start",
    },
  }
```


-o <dir> 表要輸出至哪(output)

"scss": "node-sass src/scss/style.scss -o public/"
npm run scss

# npm concat
* npm i -g concat-cli 
要裝此才能使用 folder 
* -f file
```js
"build-js": "concat-glob-cli -f src/js/*.js -o public/main.js",
```

# npm onchange
 concat-glob-cli -f src/js/*.js -o public/main.js

# npm run all
運行npm run watch:css && npm run watch:js不起作用，因為這些命令是按順序運行的（即watch:js不會運行直到watch:css完成）

* 最後一個變數為 腳本的前墜
watch-css 會執行
watch:css 不會

```js
  // sequential
  "watch": "npm-run-all --parallel watch-*"
```