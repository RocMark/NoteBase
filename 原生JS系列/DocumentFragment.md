# DocumentFragment
# High-Order Function 與 DocFrag AJAX 範例

//! 待複習 瀏覽器渲染原理

# Why use ? 
//? 可以提升網頁渲染效能

# What is DocumentFragment?
```js
    // 以下簡稱 DocFrag
    // DocumentFragment節點 不屬於文檔樹
    // 其 parentNode 為 null
    //! 他是個虛擬的DOM節點、存在於內存中
    => 因此對其更改不會影響文檔，造成重繪...等任何效能影響
```
# DocumentFragment 特性
```js
    // 當有請求把 DocFrag 插入文檔樹時，
    //* 插入的為其下的所有子節點
    //? 藉此可以當作暫存要插入文檔的暫存區
    // 類似 loop中的 htmlString

    //* 可如一般DOM 做操作
    // 進行 appendChild / insertBefore
    // 有利於 文檔的剪切、複製、黏貼...等操作

    //* 當執行插入動作後  
    //! DocFrag會自動清空
    //* 並且保留 DocFrag 容器 (不需要在做重建動作)
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

# DocFrag 基礎用法
```js
    // Create the fragment
    let fragment = document.createDocumentFragment()

    //add DOM to fragment 
    let spanNode = document.createElement("span")
    spanNode.innerHTML = "Hello World"
    fragment.appendChild(spanNode)
    console.log(fragment)

    //add this DOM to body
    document.body.appendChild(fragment)
```

# DocFrag Tips
//! 可以用移除元件，又不造成重繪
> 將物件轉移到 DocFrag中
//* 因為 DocFrag 不屬於文檔，因此瀏覽器就不會看到該節點了
```js
    let oFrag = document.createDocumentFragment()
    let ul = document.getElementsByTagName('ul')[0]
    oFrag.appendChild(ul)
```

# DocFrag 題目
> https://juejin.im/post/590f4eadac502e006cf718c3
<!-- <body><p>1</p><p>2</p>...</body> 插入body -->

# Best
> 於上方DocFrag AJAX 範例
//* 較 htmlString 方法 更易維護 可具有複用性

# 稍為進一步
//? 此種方法不佳處於 對於後續拓展 & 維護相當困難
//! 也無法將其封裝成方法，以達複用
```js
    let htmlString = ''
    for (let i = 0; i < 5; i += 1) {
        htmlString += `<p> ${i} </p>`
    }
    let body = document.querySelector('body')
    body.innerHTML = htmlString
```

# 原始人LV
//* JS 對於 DOM操作耗能，且每次插入皆會進行重繪
```js
    //* 初階
    for (let i = 0; i < 100; i += 1) {
        let op = document.createElement('p')
        let oText = document.createTextNode(i)
        op.appendChild(oText)
        document.body.appendChild(op)
    }
```

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