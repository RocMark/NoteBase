# JS EventObject
待補齊 !!!!!!
> https://www.fooish.com/javascript/dom/event.html

# 常用屬性
type 回傳事件類型
timeStamp 事件發生時間
* e.target 觸發事件的DOM
* e.currentTarget 冒泡向上掛載監聽的DOM
```js
  const myList = document.querySelector('.myList')
  myList.addEventListener('click', sayHi)

  function sayHi(e) {
    const tagName = e.target.tagName.toLowerCase()
    if (tagName === 'li') {
      // 被點擊的Item
      console.log(e.target , 'target');
      // 回傳掛載監聽的DOM，即myList
      console.log(e.currentTarget , 'currentTarget');
    }
  }
```

# e.target 之下可用屬性
.id / .name / .title
.innerHTML //
.outerHTML //
.innerText //
.outerText //
.classList //
.className //
.style // 
.textContent
.type // 回傳input Type
```js

```


.childNodes (NodeList)
.children (HTMLCollection)

.lastChild
.lastElementChild

.nextElementSibling
.nextSibling
.previousElementSibling
.previousSibling

.nodeName // "BUTTON"
.tabIndex

.parentElement
.parentNode





# ValidityState 待補



# scroll 事件可用
> https://blog.csdn.net/gdp12315_gu/article/details/54984216
screenX / screenY
clientX / clientY
layerX / layerY (FireFox特有)
offsetX / offsetY (IE特有)


# MouseEvent 滑鼠事件常用的屬性
待補齊

* 偵測 滑鼠位置
```js
  const body = document.querySelector('body')
  body.addEventListener('mousemove', detectMouse)
  function detectMouse(e) {
    console.log(`Coords: Y ${e.clientY} X ${e.clientX}`);
  }
```


# KeyBoard 鍵盤事件常用的屬性
待補齊