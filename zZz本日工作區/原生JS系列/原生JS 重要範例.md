# 原生JS 重要範例

# 大綱
- AJAX + 註冊事件
- 事件代理 + 註冊不同Event + ES6 Symbol
- 

# 事件代理 + 註冊不同Event + ES6 Symbol
```js
ul.addEventListener('click', function(e){
    let list = this.children
    // console.log(list) //* 回傳HTMLCollection
    // console.log(list[0])

    for(let item of list){
        if (item.matches('button') === true) {
            item.addEventListener('click', () => {
                console.log('Im Button')
            })
        }else{
            item.addEventListener('click', () => {
                console.log('Im Not Button')
            })
        }
    }
}, false)
```