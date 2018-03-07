# CSS 常見問題整理
> 文字/Position篇另開檔 &copy 

# Bug & 待學
//* transform
//* w/h100% 會使Scroll失效

# 重點篇
//? 文字置中 (div也可用)
> 母 display:flex + 子 margin:auto
//? div 置中
> 母 position: relative + 子 center

# Sass篇
//* Mixin Default Value
//? URL要加引號 其他免
> @mixin bgi($imgSrc,$position: center top)
> +bgi('url',center top)

# Form篇
//* input:focus bgc
//* label style
//! 禁止用戶選取 user-select: none

# UL篇
> normalize css 保留 padding:40
//* 沒有使用 list-style-type 可移除 (circle / none / square )

//? 調整li & 符號的空白
```pug
<li><span>Some text</span></li>
span
    margin-left: 2em
```

# TextArea 篇
//? textArea 為 inlineBlock margin無效!!
```css
textarea{
    display: block;
    margin-left: auto;
    margin-right: auto;
    //! 可拉動的方向 
    resize: vertical
```
//* resize
> both(default) / none / 水平垂直

# 一般裝飾篇
//* hr 厚度
```css
hr{
    border: none;
    height: 2px;
    background-color: #000;
```

//* BoxShadow
> box-shadow: 2px(水平) 2px(垂直) 3px(blur) 2px(陰影大小) #9e9e9e

//* List 項目圖片 pm自調
> list-style-image: url('')

# 背景篇

//* 使用多個背景 (逗號連接&指定位置)
> background: url('../img/demo.jpg') no-repeat top left,url('../img/demo.jpg') no-repeat top right

//*  防止背景捲動 fixed 
> background-attachment: fixed

//* 透明度 (包含子元素也會影響)
> opacity: 0.7

//* 漸層背景
> background-image: linear-gradient(top, #000, gray)

//* Auto Scale 背景
> background: url($imgSrc) no-repeat fixed center center
> background-size: cover

# Table篇
//* table 標題
> caption-side: bottom

//* table Style
//? 基偶數行不同色 較易閱讀
> table tr:hover Style(深色)
> border-collapse: collapse
