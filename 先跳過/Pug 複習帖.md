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

  -fnI = {"type": "text", "name": "fName"}
input(type=fnI.type, name=fnI.name)

-yo ="<i>YOYOYO</i>"
p= yo 
p!= yo [會輸出html結果] p!{yo} 一樣

case color
    when "red"
        h1 yo
    when "blue"
        h1 meh
    default
        h1 fuck

script.
    console.log('YO')

-var color=["red","blue"]
ul
    -for(i=0; i<color.length; i++){
        li= color[i]
    -}
ul
    each cname in color
        li= cname



while i <=20
    li= i
    - i++



mixin color(color,time)
    li #{color} what #{time}
ul
    +color("red","7")
    +color("blue","8")


# Pug Snippets
* var / block
* case

case variable
    when condition
        code
    default
        code
$0
```