# SCSS Snippets整理

# Why use SCSS?
* 免轉換
* .css 改成 .scss 即可用
* 複製方便、有 formatter



# SCSS 注意點
* 無法一次 import 整個 folder (每個都要加)

* 須寫 @mixin  測 = 
* 須寫 @include  測 +
* @extend

*

# Done
```scss
&:hover {
  opacity: 0;
}
&:focus {
  opacity: 0;
}
```

# 待測
  +btnStyle()
  input[type="number"]
  ::-webkit-scrollbar

# input
```scss
input
  &[type="button"],
  &[type="submit"]
    padding: 8px 16px
    cursor: pointer
```