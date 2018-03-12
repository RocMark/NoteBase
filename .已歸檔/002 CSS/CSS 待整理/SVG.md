# SVG介紹

# 下載網站整理
www.flaticon.com
www.iconfinder.com

# SVG用法

- 法1
```pug
img(width="30" height="30" src="img/logo.svg" alt="")
```

- 法2
```css
body
    background: url('../img/logo.svg')
```
# SVG XML檔案介紹
```pug

svg#Capa_1(
    version="1.1"
    xmlns="url~"
    xmlns:xlink="url~"
    x="0px" 
    y="0px" 
    width="46.361px" 
    height="46.361px" 
    viewbox="0 0 46.361 46.361" 
    style="enable-background:new 0 0 46.361 46.361;" xml:space="preserve"
    )
        g.testsvg
            path(d="一串數字")
//- CSS用法
    .testsvg
        fill: #eee
        background: #eee //無效，因為g tag沒有背景
        &:hover
            fill: #333
            
    //! 注意空白處hover會無效
    => svg tag 設置 class 即可
        .svglogo
            &:hover
                fill: #333

```

* id (可用scss去改變屬性)
* path 
* fill = #333  //可以改變顏色

//? 可移除的屬性
title / desc / defs / xml version
