# JS最佳實踐

# 易了解的變數命名
有意義 勿過長 避免勿用英文字

# 避免全域變數
> Why: 後面的JS 隨時會覆蓋你的Code
> 解: 使用閉包 & 模塊模式

# 模塊化
保持代碼的模塊化 & 專業化
//* review
* Object Literal With IIFE
* Revealing Module Pattern

# 固定一種編碼風格 (ESLint)

# 需要註解，但不要過度
//* 避免使用單行註解，使用 /**/
//? Why?  避免刪除換行符號時出錯

//! Development code is not live code 
記得於上線時，刪除註解

# 避免與其他技術混用
JS擅長計算 / 轉換 / 訪問外部資源 AJAX / 事件處理

Ex: CSS Style 應該由 CSS 建立Class，而非JS列出數項屬性

# 使用簡潔的寫法
if/else
//! let dir = (x>100) ? true : false
OR
//? let x = input.val || 0 

# 避免創建許多 JS依賴代碼
DOM 操作慢且昂貴，當禁用JS時，應有替代方案

# 允許配置和轉換
//* 見JS ConfigObj寫法.js
```js
    carousel = (function () {
        let config = {
            CSS: {
                classes: {
                    current: 'current',
                    scrollContainer: 'scroll',
                },
                IDs: {
                    maincontainer: 'carousel',
                },
            },
            labels: {
                previous: 'back',
                next: 'next',
                auto: 'play',
            },
            settings: {
                amount: 5,
                skin: 'blue',
                autoplay: false,
            },
        }
        function init() {
        }
        function scroll() {
        }
        function highlight() {
        }
        return { config, init }
    }())
```

# 避免嚴重嵌套

# 優化循環
//* 避免每次Loop都要讀取數組長度，使用變量儲存
//? 重度計算放於Loop之外 Ex: Regex、由其是 DOM操作

//? 可於循環中建立 DOM節點，但避免插入文檔對象
```js
    for (let i = 0, j = arr.length; i < j; i += 1) {}
```

# DOM訪問最小化
//* DOM訪問 緩慢且有各種瀏覽器問題
//? 解: 盡可能避免訪問DOM，將結果一次性注入DOM中

# 不要信任任何數據
> 不要相信 HTML 文檔

> 不要相信你的函數 格式正確
//! 用 typeof 測試並進行處理

> 不要預期 DOM 中的元素是可用的
//* 改變前先測試是否正確

> 不要妄圖使用 JS保護任何東西 (易竄改)

# 通過 JS添加功能，而非內容
避免使用過多的 HTML於 JS中

創建使用 DOM 並不是很方便，
//* 一般會使用 innerHTML

如果有大量的介面需要載入，
可以通過 AJAX 加載靜態的HTML文檔

這種方式 HTML好維護，而且支持定制