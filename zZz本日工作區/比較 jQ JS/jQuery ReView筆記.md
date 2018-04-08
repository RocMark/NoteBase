# jQuery Review
> jQuery 基礎 擅長於 AJAX / DOM操作 / 特效
> angular (擅長於互動式表單)

# 重要事項
//! jQuery with Arrow Function this 會變成 window物件
> ESLint 關閉規則 "func-names": ["error", "never"],
> "prefer-arrow-callback": ["error", "never"],

# 常用
//* children()  //* 沒有child
//? forEach(function(){}) 用來loop JSON Array 皆可

//* 屬性選擇器
> $('[href="http://yahoo.com"]').css('color','red')

//* 多個選擇器 要加逗號  //* 多個Event 用空格格開
> $('#item1, #item2').on('click mouseenter', function () {})

# DOM Note
> 使用DOM 插入 注意插入順序
> append() [加入其下方，下一階層]
> .after() [加入其後方，同階層]  

# Selector 選擇器
```js
$('ul').children().css('color', '#000')  //* 所有子
$('ul').children('h3').css('color', 'blue') //* 所有子 h3
$('.ulHeader').parent().css('background', 'red')

// li:last / even / odd / nth-child(3n)
$('ul#list li:first').css('color', 'red')

// Input Type submit / text
$(':button').hide()

//! 屬性選擇器
$('[href]').css('color','red')
$('[href="http://yahoo.com"]').css('color','red')
```
# Event 整理
//* input focus & blur
```js
// 取得input值並輸出
$('input').keyup((e) => {
    console.log(e.target.value)
})

// Select改變
$('select#gender').change((e) => {
    console.log(e.target.value)
})

// Submit Form //!注意 對象指定Form
$('#form').submit((e) => {  
    // 要防止他提交(會刷新頁面)，才能看到log
    e.preventDefult()
    const name = $('input').val()
    
    console.log(name)
})
```

# Hover 處理
```js
$('.testLink').hover(function (e) {
    //* mouse移入
}, function (e) {
    //* mouse移出
})
```

# DropDown 處理
//? 避免hover移出移入多次，造成動畫一直重複
```js
    $('.animateBtn').hover(() => {
        $('.animateBox').slideToggle(500)
    }, () => {
        $('.animateBox').stop().slideToggle()
    })
```
# JS 檢測 jQuery是否被載入
>https://stackoverflow.com/questions/7341865/checking-if-jquery-is-loaded-using-javascript
```js
if (typeof window.jQuery === 'undefined') { 
    alert('jQuery didnt loaded')
}


# Bug 
//* 注意放置順序 jQuery 先載入後載入 main.js
//* val() 只能用於表單相關元素的取值
//! <li> </li> 注意斜線有沒加
//? on 不可使用 hover 用 mouseenter mouseleave 代替
//? 注意 animate() 無法處理顏色相關，需要另外的插件

# 優化
//* 方法串接 & this 會讓執行速度更快

# CDN 2018/3/2
> https://code.jquery.com/
```pug
script(
    src="https://code.jquery.com/jquery-3.3.1.min.js"
    integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
    crossorigin="anonymous")
```
Subresource Integrity (SRI) checking用
> (SRI 介紹)https://blog.mozilla.com.tw/posts/8023/subresource-integrity
- integrity
- crossorigin

# Ready Function
```js
$(() => {
    //* 此等同於 $(document).ready(function(){})
    //* 等HTML全部載入後才開始執行
})
```
# 基礎運算式
```js
//* 傳入多個參數  //* 雙引單引皆可
$('.btn').hover(() => {
    $('.btn').css('background','#000')
})
//? 多個屬性 ， 最好還是用 addClass會較容易維護!
$('.box').css({
    'font-size': '1.5rem',
    'font-weight': '400',
})
```
# WTF Arrow Function
> https://www.youtube.com/watch?v=6aETKj5-SKg
使用Arrow Function 會把 this 變成 window物件
//? 方法串接 & this 會讓執行速度更快
```js
    $('.btn').on('click', function () {
        $(this).html('WTF').css('background', 'transparent')
    })
})
```

# CSS 相關
//? 注意 鏈式寫法樣式優先較高
width() / height() / show() / hide()
```js
    $('.box').on('click', function () {
        $(this).html('What').css('background','#eee') //!背景取此
        if($(this).hasClass('red')){
            $(this).removeClass('red') //* 移除Class
        }else
        $(this).addClass('red') //background red
    })


```

# 普通特效
//! 注意 animate() 無法處理顏色相關，需要另外的插件
```js
    $('.box').hide()
    $('.box').slideToggle()
    $('.box').fadeIn(3000, () => {
        //* 3秒後執行此，1000 = 1
        console.log('FadeIn')  
    })
```

# animate 方法  位置 / 大小
```js
    $('.animateBtn').click(() => {
        //* 原為 position absolute left:30px
        //* 0.5s 後變為 left: 250px
        $('.animateBox').animate({ 
            left: '250px',
            opacity: '0.5',
            height: '150px',
        }, 500)
    })
```

# Toggle 相關
```js
    $('.animateBox').slideToggle(3000)

    //* 會回到開始動畫前的狀態
    $('.animateBox').stop().slideToggle()
```

# 捲動相關
```js
    $('.box').offset() //* 取得XY軸
    $('.box').offset().top //* 取Y軸 
    $('.box').offset().left //* 取X軸
    // ! 轉動監聽
    $(window).scroll(() => {
        $('.floatBox').html($(window).scrollTop())
        //? $(window).scrollTop() 捲動軸位置
        //* scrollTop() 取得元素在視窗捲動時的位置
    })
```

# DOM 元素
```js
    $('.box').on('click', function () {
        //* 取得屬性 
        $(this).attr('data-order', '777')
        let order = $(this).attr('data-order')
        console.log(order)
        //! 注意 val() 只可用於表單元素
        console.log($('.name').val())
    })
```
```js
// * html() 方法 與 template String
    let testVal = 123
    let htmlString = `<h1>RocMark${testVal}</h1>`
    $('body').html(htmlString)
```
# DOM 增刪改
```js
    $('ul').prepend('<li>Zero</li>') //* 父下新增子元素從前加
    $('ul').append('<li>最後一個</li>') //* 加最後
    $('ul').prepend($('li:last-child')) // ? 最後一個丟最上
    $('ul').append($('li:first-child')) // ? 首個丟回最下
    //! nth-last-child(2) 用法
    $('li:nth-last-child(2)').remove() //* 刪除指定元素
    $('li').on('click', function () {
        console.log($(this).index()) //* 取得該索引
    })
```

# Hover 相關
```js
    $('.testLink').hover(function (e) {
        //* mouse移入
        $(this).css('color', 'red')
    }, function (e) {
        //* mouse移出
        $(this).css('color', '#000')
    })

    $('.testLink').on('mouseleave mouseenter', function () {
        //! on方法時 不可使用 hover (無效)
        //* mouseleave + mouseenter 達相同效果
    })
```


# each 方法
```js   
    $('li').each(function () {
        $(this).html(`Item${$(this).index()}`)
    })
```
# setInterVal()
//? 時鐘 要先呼叫避免一秒誤差
```js
    function showTime() {
        let date = new Date()
        let h = date.getHours()
        let m = date.getMinutes()
        let s = date.getSeconds()
        let ms = date.getMilliseconds()
    
        let session = 'AM'
        if (h === 0) { h = 12 }
        if (h > 12) {
            h -= 12
            session = 'PM'
        }
        h = (h < 10) ? `0${h}` : h
        m = (m < 10) ? `0${m}` : m
        s = (s < 10) ? `0${s}` : s
        let time = `${session}   ${h}:${m}:${s}`
        $('.currentTime').html(time)
    }
    showTime()
    setInterval(showTime, 1000)
```

# clearInterVal()
```js
    let count = 0
    // * 初始化狀態
    countFunc()

    //* 每秒執行一次
    let timer = setInterval(countFunc, 1000)

    function countFunc() {
        count += 1
        $('.countP').html(count)

        //* 當達到條件時，停止每秒執行
        if (count >= 5) {
            clearInterval(timer)
        }
    }
```


# 取得物件資訊
```js
$('#btn').on('click', (e) => {
    console.log(e)
    console.log(e.currentTarget.className)
    console.log(e.currentTarget.outerHTML)
})
```
# Array (原生JS)
> length 可以用來計算子元素數量 / 陣列 / String字數
```js
let sampleArray = ['one','two','three']
sampleArray.push('four')
sampleArray.unshift('zero')
```

# 數值處理 (原生JS)
Math.ceil(mathTest) //* 小數無條件進位
Math.round(mathTest) //* 小數四捨五入
Math.floor(mathTest) //* 小數無條件捨去
Math.random() // ? 可隨機產生介於0~1數值

# 事件總覽 (待整理)

> Browser Events 
.resize() .scroll()

> Form Events
.focus() .blur()
.change() //* 用於 select
.submit() //* 指定 form
>待查 .select() .focusin() .focusout() 待查

> Keyboard Events
.keyup() //* 輸入文字 
>待查 .keydown() .keypress() 

> Mouse Events
.toggle() //* 常用重要
.click() .dbclick()
.mouseenter() + .mouseleave() => hover()
.mousemove() //* 滑鼠移動
.mousedown() //* mousedown 點擊按住觸發  
.mouseup()  //* mouseup 鬆開滑鼠觸發 

>待查 .mouseover() .mouseout() .contextmenu() 



# fadeIn 淡入效果 淡出同理
```js
    $elem.fadeIn()
    //* JS fadeIn() 先設至fadeIn CSS
    //? CSS display:none opacity:0 transition 0.8s*

    let elem = document.querySelector('.someClass')
    elem.style.display = 'block'
    requestAnimationFrame(() => elem.style.opacity = 1)
```


# animation 動畫效果
```js
    $elem.animate({
        width:"70%",
        opacity: 0.4,
    }, 1500) //? 動畫時間

    //* 原生 JS Web Animation API
    elem.animate([
        {
            //* 初始狀態
            transform: 'translateY(-100px) scaleX(2.5)',
            transformOrigin: '50% 0',
            filter: 'blur(40px)'
            opacity: 0
        },{
            //* 完結狀態
            transform: 'translateY(0) scaleX(1)',
            transformOrigin: '50% 50%',
            filter: 'blur(0)'
            opacity: 1
        }
    ], 1500)
```