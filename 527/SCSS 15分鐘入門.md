# SCSS 15分鐘入門
> https://goo.gl/wKv7Ck

# 變數
$color-gray: #eee
$fz-primary: $color-gray
* 變數可再加減乘除餘 & 色也可做運算
//* 運算子 前後要加上空格
$title-font: normal 24px/1.5 'Open Sans', sans-serif;

* 建議: 套用全網站的顏色、字體建議都先定義成變數

# Import
_reset.scss (加下底線防止編譯)
可省略 .scss & 下底線
@import 'reset';

# Mixin
```scss
  @mixin brr($radius: 15px) {
    border-radius: $radius;
  }

  .box {
    @include brr(10px);
  }
```

# Function (bu)