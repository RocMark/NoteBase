# 文字相關
> Microsoft JhengHei 中字可用微軟正黑體

//! white space 待查
# 轉換大小寫 text-transform
//? 注意 a 需要先設為block 才可用
//* text-transform 為 p 用的
> a
>    display: inline-block
>    &:first-letter //* 選取文的首字大寫
>        text-transform: uppercase
//* capitalize 該段落每個字首皆大寫

#　設定中英文 不同字
> https://wcc723.github.io/sass/2014/02/21/font-code-range/


# 文字裝飾
//* 陰影顏色
> text-shadow: 2px(右) 2px(下) 3px(blur) gray(陰影色)
//* 首字操控 &:first-letter

# 文字置中 
//* 設LineHight=容器高
> height: 90px line-height: 90px text-align: center

# 文字換行

//? white-space: nowrap 死都不換行 
//* white-space: pre-line 預留一行+indent 前幾個字

> white-space: pre-line 預留一行
> white-space: pre 有換行符號才換不然死都不換

>單個單字拆解成可換行 word-break: break-all
//// normal / keep-all 原始一樣????
////word-wrap: break-word ////無效果??

# 文字間距
//* 單文字間距 
> letter-spacing: 0.8

//* 多單字間距
> word-spacing: 1.2px //多個單字間距

//* justify //多單字間格同寬
> text-align: center / left

> 最後一行文字 往哪邊靠
> text-align-last: right / center / justify    