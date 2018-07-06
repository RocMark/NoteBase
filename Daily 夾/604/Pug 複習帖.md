#　Pug 複習帖

# 基礎語法
```pug
  //- 冒號只可用於子單個元素
  a.class(href="#"): span Home
```

# 加入其他檔案的內容
* include
```pug
  html
    include includes/head.pug
```

# 區塊繼承 extends & block
* layout 設置分區，並撰寫內容
可於 index 覆寫 layout block的內容

若於 index 沒有設置 block處，則為普通撰寫
* .pug 勿省
```pug
  //- layout.pug
  html
    block head
    body
      block content

  //- index.html
  extends layout.pug
  block head
    script(src='./main.js')
  block content
    h1 123
```

## 綜合範例
```pug
extends _layout.pug
block body
  h1 
```