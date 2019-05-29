# jQ 源碼 事件篇P3

# 元素渲染
1. innerHTML 用字串
2. createElement
```js
  const ul = document.createElement('ul')
  for (let i = 0, j = 5; i < j; i += 1) {
    const li = document.createElement('li')
    li.textContent = 'item'
    ul.appendChild(li)
  }
  console.log(ul)
```


# jQuery delegation
* #box 下的 a 即使新增的a 也會吃到
用於確定會有動態 DOM 時，才用 (較耗能)

$('#box').on('click','a',handler)

.on  事件監聽
.off 移除事件監聽
.one 只執行一次

# 事件監聽 ShortHand
* .blur() / .change() / .click()
* .error() / hover() / mouse 系列
用 on 較佳

# hover()
這個看的是 CurrentTarget
hover = mouseenter + mouseleave

* mouseover + mouseout (避用)
這個看的是 Target
over/out 裡面的子元素也會觸發 !

# 棄用
* delegate() 已棄用 !!!
可用 on 的第二個參數 取代
* load() / unbind
跨瀏覽器 無法統一