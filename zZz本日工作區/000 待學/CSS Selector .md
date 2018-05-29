# CSS Selector ReView

# Pseudo Selector


# nth-child
//! 使用時 Tag不可少
//! 需要 元素Tag符合 且 子所處的位置也符合!
```pug
    .box
        p 123
        h2 Title
        p
```
```scss
    .box
        p:nth-child(1)
            color: red  // ok
        p:nth-child(2)
            colore: blue //! X無效 第二個元素為h2
        h2:nth-child(2)
            colore: blue // ok  元素正確且順序正確
```


# Input屬性
```scss
input[type="button"],input[type="submit"]{}

input[type="button"],
input[type="submit"]
    color: red;  //* 亦可換行

input
    &:[type="text"] //! 錯誤寫法

```

# multiple Tag
> p,span,a,li{ color: red }


# 進階巢狀
```scss
    .test
        .tests h3 //* 注意可以省略母體就盡量省略
            color: red
```
# 所有底下Tag
```scss
    .test
        h3
            color: red
```
# Children 篇

# 僅下一層 Children
```scss
    // ?  .test >  h3
    .test
        h3 //! 只影響此
        .tests
            h3
```
# 選擇 下一個 兄弟節點
//* 用於已開發專案，免去新增Class
```scss
    article h2 + p {
        //* 母為article
        //* 其有一子 h2 
        //! h2 的 下一個 p tag only
        // 前一個無效、下下一個無效
    }
    article h2 + p + p {
        // 下下一個
    }
```

