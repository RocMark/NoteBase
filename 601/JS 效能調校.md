# JS 效能調校
> http://t.cn/R1NFoEe

待學 Chrome Dev Tools 效能調校


可分為 用戶端、伺服器端
# 用戶端 (前端)
* HTTP
* 下載頻寬
* DNS 查詢時間
* CSS 顯示速度
* JS 執行速度 (此文重點)
* AJAX
* Mobile & 瀏覽器特性

# 伺服器 (後端)
* 程式效能 / 資料庫效能
* HTTP 快取策略
* 內容壓縮 gzip
* 輸出快取
* 壓力測試

# HTTP
HTTP 協定 / Keep-Alive / HTTP Header
HTTP 限制、壓縮、快取

# HTML5 / JS
* JS優化
* 離線應用程式 / XHR
* indexedDB
* Web Storage / Web Socket / Web Worker

# CSS3
* 移動、變形特效
* 圓角框線
* 陰影效果
* 網頁字型
* 其他 Sprite / Media Queries

# 調校效能步驟
* 測量 : 數具量化
* 理解 : 了解問題、吸收新知
* 調校 : 修正問題、效能提升

## Object / Array 選擇

# Object
Object用於
* 無順序的陣列
* 需要字串當索引

## 基本原則
* 使用 {} 或 constructor(new) 建立物件最快
* 勿用 Object.create() 建立
* 勿用過多繼承 (減少原型鏈層級)

```js
  // 最快 Same
  obj = new Object() 
  obj = {}
  // 中等 使用以定義好的 propObj
  obj = Object.create(Object.prototype, propObj)
  // 最慢
  obj = Object.create(Object.prototype, { p : { value: 1 } })
```

# Array
Array 用於
* 有順序的集合
* 需要數字當索引

Array 也是物件的一種
```js
  const a = [1, 2]
  a['test'] = 123
  console.log(a) // [1, 2, test:123]
  console.log(a.test)
```

## 基本原則
* 使用 var a = [1, 2, 3]
* 使用一致的型別 ，JS能作最佳化
混合型別，JS會需要作轉型，效能很差
* 索引最好能連貫 (元素間不要中空)
> https://jsperf.com/packed-vs-holey-arrays

