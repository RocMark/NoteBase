# 使用 input 注意事項

# 指定input
> 選定form => 利用input name去找
> 避免每個都設id 會過多id

# e.target 常用屬性
e.target.type

# input 4狀態
//* input validation 4狀態
1. 未點擊 default 樣式
2. focus //* 可用換底色表示
3. valid green
4. invalid red

# max & maxlength
//* max="0"  用於 range / number
//? maxlength="0" 用於 限制字數

//! inputPhone.maxLength = 10  記得要用駝峰寫法

# Form Delegation with 文字輸入 keyup事件
//! keyup (放開鍵盤)
> keydown 按下鍵盤的瞬間、keypress長按

# Email Regex
```js
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //* 注意此的對於 xxx@yahoo.com 也會通過
    //* 待修補
```