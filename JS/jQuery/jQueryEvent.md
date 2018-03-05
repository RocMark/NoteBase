# jQuery Event
* Event整理在最下方

//! hover() 不可用在on (其非為真正的Event)
hover() 由 .mouseenter() + .mouseleave() 所組成

# 事件處理
```js
//* 多個Event
$('#btn').on('click keyup keypress blur change', () => {
    console.log('yo')
})
//* 單個事件
$('#btn').click(() => {
    alert('yo')
})
```


* 取得物件資訊
```js
$('#btn').on('click', (e) => {
    console.log(e)
    console.log(e.currentTarget.className)
    console.log(e.currentTarget.outerHTML)
})
```

# Browser Events 
<!-- 待查 -->
.resize() .scroll()

# Form Events
.focus() .blur()
.change() //* 用於 select
.submit() //* 指定 form
<!-- 待查 -->
.select() 
.focusin() .focusout()

# Keyboard Events
.keyup() //* 輸入文字 

<!-- 待查 -->
.keydown() .keypress() 

# Mouse Events
.toggle() //* 常用重要
.click() .dbclick()
.mouseenter() + .mouseleave() => hover()
.mousemove() //* 滑鼠移動
.mousedown() //* mousedown 點擊按住觸發  
.mouseup()  //* mouseup 鬆開滑鼠觸發 

<!-- 待查閱 -->
.mouseover()
.mouseout()
.contextmenu() 