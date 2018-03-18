# JS DOM Crash Course
> DOM: Document Object Model
> BOM: Browser Object Model (window...etc)

//? CSS 必須使用camel foo.style.borderBottom

```js
//? 只能取得第一個元素
querySelector('.navItem') 
doqs('input[type="submit"]')
doqs('li:last-child')
doqs('li:nth-child(2)')
//? 取得所有元素
querySelectorAll('.navItem')
doqsAll('.navItem:nth-child(even)')
```

# Dom Traversal

# parentNode / parentElement 同效果
//* 可以當一般選擇器用
> itemList.parentNode.style.bgc='red'

# children
> itemList.children[1].style.bgc = 'red'
> firstElementChild 取得首個子元素
> lastElementChild 取得末個子元素

# sibling 
//* nextElementSibling 取得下一個兄弟
//* previousElementSibling 取得下一個兄弟

# DOM Create
//! AppendChild
```js
// 建立div
let newDiv = document.createElement('div')
// 增加屬性
newDiv.className = 'Hello'
newDiv.setAttribute('title','Hello Div')
// Create text node
let newDivText = document.createTextNode('Yo')
// 將 text 插入 div
newDiv.AppendChild(newDivText)
```

# DOM 插入例子
//! insertBefore
```js
let container = doqs('header .container')
let h1 = doqs('header h1')

//? 前放要插入的子，後放要插在誰前方
container.insertBefore(newDive, h1) 
```

# Event Object
```js
let btn = doqs('btn').addEv('click',btnClick)
function btnClick(e){
    // console.log(e)  //可用屬性表
    // e.target 可以取得被點擊的物件
    // e.target.id 取得該id
    // e.target.classList 取得該物件class陣列
    // e.type (事件類型)
    // e.clientX  滑鼠位置(根據window)
    // e.offset  滑鼠位置(根據該元件)
    //* 用來判斷是否長按該key並點擊
    // e.altKey ctrlKey shiftKey
} 
```

# Mouse Event
> mousedown 按下去就執行，不需要等鬆手
> mouseup 鬆手才執行

> mouseenter 滑鼠進入
> mouseover 同上但，hover到子元素也會觸發
> mouseleave 滑鼠離開
> mouseout  同上但，離開子元素也會觸發

# MouseMove
```js
box.addEv('mousemove', runEvent)
function runEvent(e){
    //* 取得滑鼠在該物件的位置
    console.log(`${e.offsetX} ${e.offsetY}`)
    document.body.style.bgc = `rgb(${e.offsetX},${e.offsetY},40)`
}
```

# Input Event
//* 對input 做任何動作都會觸發此事件
> input

> keydown 輸入任何字觸發
//? 可與 e.target.value 合用 輸入同時輸出

> keyup 長按一個字 放掉後觸發
> keypress 長按一個字

//? 用於提示未輸入
> focus 聚焦
> blur 失焦

//* 可以用於密碼/email等
> cut 剪下動作會觸發
> paste 貼上動作會觸發

# Select Event
//? 同與 e.target.value 合用
> change / input 同效果
```pug
select.formSelect
    option(value="1")1
```

# Form Event
//! 注意 form submit會刷新頁面
```js
form.addEv('submit',runEvent)
function runEvent(e){
    e.preventDefault() //* 常用
}
```



# 次要資料

# DOM
```js
foo.textContent = 'Hello'
foo.innerText = 'GoodBye'
//* 將元素放在母之下
foo.innerHTML = '<h3>Hello</h3>' 
```
# textContent VS innerHTML
> 目標內有span 123  (style: display:none)
//* textContent 可取得 span中文字
//* innerText 則否

# byClassName
```js
let items = dobyClass('navItem')
// console.log(items) // 取得該元素陣列
// console.log(items[i]) // 取得指定子
//* Loop 並 增加 CSS
for (let i = 0; i < items.length; i += 1){ item[i].style.fontWeight = 'bold' }
```

# Dont Use
> childNodes 不要使用 (換行也會算一個child)
> firstChild 同上
> itemList.nextSibling