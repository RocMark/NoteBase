# SCSS 超入門
* 快捷 fz16 / fz16r
* Snippets $ 字號之前要加兩個 \\

# Function 字級
```scss
  $baseSize: 12px;
  $baseLineSize: 10px;
  $sizeLevel: 4px;
  $paddingLevel: 1.2;
  @function font($level: 0) {
    @if $level < 0 {
      $level: 0;
    }
    @return $baseSize + $sizeLevel * round($level);
  }

  @function rhythm($size) {
    @return ceil($size * $paddingLevel / $baseLineSize) * $baseLineSize;
  }

  @mixin font($level: 1, $line-height: auto) {
    $size: font($level);
    $line: rhythm($size);

    font-size: $size;
    @if $line-height == auto or $line-height < $line {
      line-height: $line;
    } @else {
      line-height: $line-height;
    }
  }

  @function line($count: 1, $baseLineHeight: 10px) {
    @return $baseLineHeight * $count;
  }

  @for $i from 0 through 5{
    .level#{$i}{
      @include font($i);
      margin: line($i/2) auto;
    }
  }
```

# UI Kit 
* 類 design guideline
* component 樣式表


# mixin & extend 之差
* extend 共用一份    @extend
* mixin 會產多份樣式  @include

# live sass server
* map 檔 用來對應行數、Debug用
* > 1% 表 瀏覽器大於 1%才做
```json
  "liveSassCompile.settings.formats": [
    {
      "format": "expanded",
      "extensionName": ".css",
      "savePath": "/dist/css"
    },
    {
      "format": "compressed",
      "extensionName": ".min.css",
      "savePath": "/dist/css"
  },
  ],
  "liveSassCompile.settings.autoprefix": [
    "> 1%",
    "last 2 versions"
  ],
```

# SCSS
* 加 > 會比較好 (效能較佳)
* 且 指定 "下一層 only"
```scss
  .tabList {
    > header {
      padding: 0;
    }
  }
```

# SCSS 變數 vs calc
* 用變數在做運算較佳
```css
  ul {
    /* 會直接運算 16.6666~% */
    width: $w / 6;
    /* 不會做先運算  IE11 可*/
    width: calc(100% / 6);  

    /* 錯誤寫法!!!  要有空隔 */
    width: calc(100%/6);  
    width: 100% / 6;  
  }
```

# 繼承 %aBtn @extend
* 繼承放最上面較佳
* extend 會共用樣式
```css
  %aBtn {
    display: block;
    text-decoration: none;
  }
  @extend %aBtn
```

# Function
```css
  @function line($count: 1) {
    @return $baseLineHeight * $count;
  }
  .foo {
    padding: line(1);
  }
```


# ul 小技巧
* 使用 inline-block 會使每個項目間多一個字元
因此 使用 fz0 讓該字元不顯示
li 在將內容補回
```css
  ul {
    list-style: none;
    font-size: 0;
  }
  li {
    display: inline-block;
    font-size: 16px;
  }
```