# JS DOM Crash Course

//? CSS 必須使用camel foo.style.borderBottom

```js
//? 只能取得第一個元素
doqs('li:last-child')
//? 取得所有元素
doqsAll('.navItem:nth-child(even)')
```

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

# DOM 插入例子
//! insertBefore
```js
let container = doqs('header .container')
let h1 = doqs('header h1')
//? 前放要插入的子，後放要插在誰前方
container.insertBefore(newDive, h1) 
```


# Select Event
//? 同與 e.target.value 合用
> change / input 同效果
```pug
select.formSelect
    option(value="1")1
```


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