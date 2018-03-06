# Mobile Friendly
此篇主要用來維護舊網站

新創網站請Follow Mobile First Design Pattern

# Google 4大原則 
* avoids software that is not common mobile devices like Flash

* 控制文字大小避免Zoom (REM)
```css
html{
    font-size: 15px
}
/* 有問題的文字/用Chrome找 */
.text{
    /* 等同於15px */
    font-size: 100%  
}
```

* 控制內容大小避免水平捲動&Zoom
```pug
meta(name="viewport" content="width=device-width, initial-scale=1.0")
```
```scss
// Remove Fixed Width & Use MediaQuery
// 注意大圖/Embed Video也會造成 需要水平轉動
img{
    max-width: 100%;
    height: auto;
}
@mixin mobile
    @media only screen and (max-width: 960px)
        @content
```
//* Embed Video 不符合 Mobile Friendly 用 a Link代替!
//? 解法 Conditional Loading with JS
response.js on Github
Zurb Foundation Interchange

* 連結放置相隔遠一點。使User更容易點擊

//? Extra
```css
site-header-inner,
site-content,
site-footer-inner{
    padding-left: 15px;
    padding-right: 15px;
}


```