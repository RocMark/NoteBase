# 注意 Live Server & JSON-SERVER 大坑
1. JSON-SERVER
post 資料進入，把資料塞入 data.json
2. Live Server
資料改變了，所以會 Reload Live Server
而非作 post 時，會重新整理頁面
* 修正
> 將此段加入 "work space 的 settings"
目前先套用 global，有問題再改回來
```js
  {
    "liveServer.settings.ignoreFiles": [
      ".vscode/**",
      "**/*.scss",
      "**/*.sass",
      "**/*.ts",
      "data.json"
    ],
  }
```

# Vue 全家桶 筆記
npm run build
json-server data.json
live-server 
# a herf
```js
  <a href="#"></a>
  // 走 http協定 走向該網域
  <a href="http://yahoo.com.tw"></a>

  // 走 javascript 但無設目的
  <a href="javascript:;"></a>

  // 會返回 undefined
  <a href="javascript:void()"></a> // 不推薦
```

# 注意 lastID 問題
陣列 0為始，因此取得長度後要減掉 1
```js
  const arr = [{ id: 1 }, { id: 2 }]
  // 取得第二個項目的id 即 arr[長度為2 - 1 = 1] 
  // arr[1] 才是正確目標
  const lastID = arr[`${arr.length - 1}`].id
```
