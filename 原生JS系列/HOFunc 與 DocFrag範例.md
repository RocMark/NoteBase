# High-Order Function 與 DocFrag AJAX 範例

# 使用語法
map / filter / forEach / DocFrag

# 範例本體
```js
    //* 過濾文章 創建新 Array
    let delTitle = elem => elem.title !== todoTitle
    let newTodoList = todoList
        .filter(delTitle)
        .map(elem => elem)

    //* 初始創建 DocFrag
    let oFrag = document.createDocumentFragment()

    //? 執行Loop
    newTodoList.forEach((elem) => {
        let titleElem = document.createElement('h2')
        let titleText = document.createTextNode(elem.title)
        titleElem.appendChild(titleText)
        oFrag.appendChild(titleElem)
    })

    //* Loop完 渲染進文檔
    document.body.appendChild(oFrag)
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

# 綜合運用範例
```js
    let delTitle = attr => attr.title !== todoTitle
    
    let newTodoList = todoList
        .filter(delTitle)
        .map(attr => attr)

    newTodoList.forEach((obj) => {
        htmlString+=`<h2>${obj.title}</h2>`
    })

    $().render(htmlString)
```