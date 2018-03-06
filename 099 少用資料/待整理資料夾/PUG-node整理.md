// middleware function have access to that request& reponse object
// 利用next() 去執行下一個middleware

// middleware需放在 get之前 順序有差避免無法執行

// 自定義 middleware
var logger = function (req, res, next) { 
    console.log('logging')
    next()
}
// 使用middleware
app.use(logger)


// li.nav_item: a(href="#").nav_link YOYOYO

// 可以利用javaScript的語法 作運算
// p 1 * 5 = #{1 * 5}

// - website = "http://127.0.0.1/~"
// a(href="#{website}") Nice Link

// - color = ['red','blue','grey']

// ul
//     li #{color[0]}
//     li #{color[1]}
//     li #{color[2]}

// -fnI = {"type": "text", "name": "fName"}
input(type=fnI.type, name=fnI.name)

// -yo ="<i>YOYOYO</i>"
// p= yo [會直接輸出字串]
// p!= yo [會輸出html結果] p!{yo} 一樣

// if else if else
// unless else

/*
case color
    when "red"
        h1 yo
    when "blue"
        h1 meh
    default
        h1 fuck
*/

/*
script.
    console.log('YO')
*/

/*
-var color=["red","blue"]
ul
    -for(i=0; i<color.length; i++){
        li= color[i]
    -}
*/

/*
結果同上
ul
    each cname in color
        li= cname
*/

/*
while i <=20
    li= i
    - i++
*/

/*
mixin color(color,time)
    li #{color} what #{time}
ul
    +color("red","7")
    +color("blue","8")

亦可免函數
mixin  copyr
    | &#169
p
    +copyr
    | 2016

產生 c符號 2016


// 22:30
// https://www.youtube.com/watch?v=l5AXcXAP4r8&t=62s
// 不清楚會輸入多少函數
mixin makeList()
    ul
        -args = Array.prototype.slice.call(arguments)
        for item in args
            li= item
    +makeList("Dog","Cat","Fish")
*/

// https://www.youtube.com/watch?v=cVYQEvP-_PA
// npm install --save mongoose
const mongoose =require('mongoose')
mongoose.connect('mongodb://localhost/RocMarkBlog')
let db = mongoose.connection
// 新建articles.js 建立Schema [可以不用在資料層級就設定]
// mongo提供在APP層即設定Schema的功能
