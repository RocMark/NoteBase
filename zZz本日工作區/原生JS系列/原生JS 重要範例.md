# 原生JS 重要範例

# 大綱
- 事件代理 + 註冊不同Event
- 事件代理 + 註冊不同Event + ES6 Symbol
- DocFrag AJAX 範例
- Form Submit 事件處理
- 密碼 / 重新輸入密碼 / 禁止Copy Paste Cut //! 待修正
- AJAX + 註冊事件 //* 待補

# 事件代理寫法
```js
    let ul = document.querySelector('ul')
    ul.addEventListener('click', (e) => {
        //* tagName 會自動轉成全大寫，將其轉回
        let trigger = e.target

        //* 根據 tag新增不同屬性
        if (trigger.tagName.toLowerCase() === 'li') {
            console.log(e.target.textContent)
            trigger.addEventListener('click', (event) => {
                // do stuff
            })
        } else {
            trigger.addEventListener('click', (event) => {
                // do stuff
            })
        }
    })

    //* 此處要用 AJAX Loop 可參考 DocFrag做法
    let newItem = document.createElement('li')
    let newItemText = document.createTextNode('Hey!')
    newItem.appendChild(newItemText)
    ul.appendChild(newItem)
```

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

# DocFrag AJAX 範例
```js
    // Create the fragment 
    //* DocFrag 只需要宣告一次即可永久使用
    let oFrag = document.createDocumentFragment()
    for (let i = 0; i < 10; i += 1) {
        let op = document.createElement('p')
        let oText = document.createTextNode(i)
        op.appendChild(oText)
        console.log(oFrag)
        oFrag.appendChild(op)
    }
    document.body.appendChild(oFrag)
```

# Form Submit 事件處理
```js
    form.addEventListener('submit', (e) => {
        e.preventDefault()
    })
    //* 避免重複提交表單
    subBTN.addEventListener('click', function(e){
        //? 此處做Loading動畫 / 隱藏按鈕 / 更改樣式皆可
        this.value = 'Loading....'
        this.disabled = true //! disabled 要加d....
        setTimeout(() => {
            //* 待補做 CountDown
            this.value = 'Done'
            this.disabled = false
        }, 2000);
    })
```

# 密碼 / 重新輸入密碼 / 禁止 Copy Paste Cut
```js
    pwdInput.addEventListener('paste', blockAction)
    InputText.addEventListener('cut', blockAction) 
    article.addEventListener('copy', blockAction)
    function blockAction(e) {
        //* Ctrl + C/X/V 也會被檔下來
        console.log(e)
        // e.target e.currentTarget 皆回傳 [object HTMLHeadingElement]
        console.log(`Dont Use ${e.type} on ${e.target}`)
        console.log(`Dont Use ${e.type} on ${e.currentTarget}`)
        //! 使用此防止 貼上動作
        e.preventDefault()
    }
```