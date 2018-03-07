# CSS 動畫 待學
> https://www.youtube.com/watch?v=jgw82b5Y2MU&list=PL4cUxeGkcC9iGYgmEd2dm3zAKzyCGDtM5

# 常用屬性
> list-style-type: square
> box-sizing: border-box
> color: rgba(# 000,0.5)
> appearance: button / none

//* 分割 p成多欄
> -webkit-column-count 
> -webkit-column-gap (區間)
> -webkit-column-rule (隔線)

//! 用到padding & width 最好加上 box-sizing

# Layout相關
//* 切記Position Fixed left: 0 right: 0 不可省

# Z-index
//! 必須要用 position relative 於母體
//? z-index 以10為單位 調整較方便
//* 物件重疊 兩種方法
1. -margin
2. position absolute

# Input篇    
//* Input 左邊字的縮排 用 indent 比padding佳
> 避免打過多字造成開始的字被隱藏
> text-indent: 18px

// * Input with Btn 避免右邊字被按鈕蓋住
> padding-right: 60px

//*  Input Placeholder 樣式
> input::-webkit-input-placeholder
>   // &::-webkit-input-placeholder

#  outline 
//* 會畫在border之外 且影響容器的原大小
//* offset 控制outline & border間空白
> outline: 0.5px solid pink
> outline-offset: 15px

# h1 用 圖代替 (SEO用圖)
> https://www.youtube.com/watch?v=TNeWLM-vaXg&list=PLLnpHn493BHH6DkHPhduhco5XavNA9JaD&index=20
