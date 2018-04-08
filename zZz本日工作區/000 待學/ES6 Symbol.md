# ES6 Symbol

# 大綱
- Loop NodeList
- Loop HTMLCollection //! 重要範例

# Loop NodeList 範例
```js
    let li = document.querySelectorAll('li')
    console.log(li) //? 回傳NodeList
    for(let item of li){ console.log(item) }
```

# Loop HTMLCollection 範例
//! 事件代理 註冊 & 對應物件 addEven
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