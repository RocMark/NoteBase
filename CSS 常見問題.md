# CSS 常見問題整理

# Bug


# Sass
//* Mixin Default Value
//? URL要加引號 其他免
> @mixin bgi($imgSrc,$position: center top)
> +bgi('url',center top)

# Position 篇

//* 左右推移 (取代float)
> margin-left: auto

# 背景篇

//*  防止背景捲動 fixed 
> background-attachment: fixed

//* 漸層背景
> background-image: linear-gradient(top, #000, gray)

//* Auto Scale 背景
> background: url($imgSrc) no-repeat fixed center center
> background-size: cover