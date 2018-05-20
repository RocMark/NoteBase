# 原生JS 搜尋 child / parent / siblings
> https://www.youtube.com/watch?v=rBjvPNE2or0

# 待查
elem.closet
elem.matches

# nth-child 易出錯處 (用於子元素)
//! 必須 第幾個 & Type 皆符合才取的到正確的
``` js
//*  ul > li*2 + a
doqs('li:nth-child(1)')   // (o)
doqs('li:nth-child(2)')   // (o)

doqs('li:nth-child(3)')   //! (x) 第三個元素為a 會無回傳值
doqs('a:nth-child(1)')   //! (x) 首元素為li 同上
```














# Dont USE
> 共通原因: 會將 indent 視為一個TextNode 
//// .childNodes / .nextSiblings / previousSibling
//// parentElement 僅IE支援