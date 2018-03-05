# AlertBox 架構

# 功能
點擊Exit 或點擊 alertBox 外的Filter關閉 alertBox

# PUG
```pug
button.alertBoxBtn 觸發按鈕
.alertBoxSection //? 全螢幕Filter用
    .alertBox //* AlertBox本體
        h3 Dang Yo!
        button.alertBoxExitBtn OK
```

# CSS
> 初始隱藏整個Section (含filter&本體)
//? Section left & right 0 + height 100% 達全屏效果
//* 記得設置 Z-index 避免filter 覆蓋 本體
```css
.alertBoxSection{
    z-index: 10;
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
}
.alertBox{
    z-index: 20;
    position: fixed;
    top: 250px;
    left: 350px;
    text-align: center;
    width: 250px;
    height: 125px;
}
```

# JS
```js
$('.alertBoxBtn').click(() => {
    $('.alertBoxSection').fadeIn(500)
})
$('.alertBoxExitBtn,.alertBoxSection').click(() => {
    $('.alertBoxSection').fadeOut(500)
})
```