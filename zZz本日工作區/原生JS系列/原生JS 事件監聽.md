# 原生JS 事件監聽 & 動畫篇

# 大綱
- 事件觸發一次
- doqsAll Loop

# 只讓事件觸發一次 //!必看
> jQuery 的 once
```js
    btns.forEach((elem) => {
        elem.addEventListener('click', function listener(e){
            console.log(e.target.id)
            //! 事件種類 ,  Function名
            this.removeEventListener('click',listener)
        }) 
    })
```

# 同時監聽多個元素
//? doqs 老樣子要Loop
```js
    let link = document.querySelectorAll('a') 
    let btn1 = document.querySelector('#btn1') 
    let btn2 = document.querySelector('#btn2') 
    let targetList = ['btn1','btn2']
    link.forEach((elem) => {
        elem.addEventListener('click', (e) => {
            //* 藉由 event.target 可以得知哪個元素觸發的
            console.log(e.target.value)
        })
    })
```