# JS Module
> LearnCode.academy / Modular Javascript
> https://goo.gl/TQictb 系列#1

//! 下方原則 Review!

# IIFE
```js
(function() {
    // 立即執行函式
    //* 在此內宣告的變數，不會為Global Function
})()
```

# 原則
- Break Component Into Pieces
- Do OneThing only
//* DRY code: Dont Repeat Yourself

# Use Const
盡可能的使用 const 需要變動值再改成 let 

# Self-Contained Module
> 所有相關的物件全在該 module之下
> module只應管理一件事，否則拆解

//! no global variables
- 可能造成變數命名衝突
- JS專案龐大，光建立變數即耗能

# 分開Event Function
```js
    ul.addEventListener('', () => {/* bad */})
    ul.addEventListener('', show)
    function show(){
        /* //? 較佳 */
        //* 在後續處理要 unbind較易
    }
```

# Efficient DOM Usage
盡可能少用 DOM搜尋

# No Memory Leaks
//? 事件代理 delegation
任何事件皆可 unbound

//! 用於 SPA 例子
> 假設 Page1 有 Form
> 當點擊 Page2 時 AJAX 產生新內容
Form之下註冊的事件，應該全部 unbound(因為暫時不會使用到了)
> 當點擊回 Page1時，再進行註冊
> 即可避免 Memory Leaks

//! 而快速unbound 可以使用事件代理 delegation的方式
> 先 target母元素再進行下方子元素的辨別，再依需求註冊
```js
    ul.addEventListener('click', pageOneEvent)
    function pageOneEvent() { 
        //* 進行辨別子元素 & 依需求註冊
    }
    pageTwoBtn.removeEventListener('click', pageOneEvent)
```