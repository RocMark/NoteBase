# 原生JS String 處理
> https://www.youtube.com/watch?v=O7KwWw3KLw4

# 目錄
//* 皆為 [0為始]
* length
* toUpperCase() / toLowerCase()
* trim() 移除兩邊indent & 空白

* indexOf()
* slice(始,末) 
切割出指定長度的字串

* split('當切割點的字串', 回傳陣列的長度)
會回傳一個陣列

# 文章預覽範例
```js
    let p = document.querySelector('p')
    let linkTemplate = `<button>ReadMore</button>`
    p.textContent = p.textContent.trim().slice(0,50) + '...'
    p.innerHTML = p.textContent.trim().slice(0,50) + '....' + linkTemplate
```

# 尋找字串中字串
//* .indexOf() 可用鏈式處理、0為始
//? .indexOf('欲尋字串', 起始位置) 
//! 回傳-1 為無該值 大小寫有別
```js
    // indexOf 尋找字串中的字串 //? 0為始
    console.log(testStr.indexOf('world')) // -1
    //* 查到該值回傳其位置
    console.log(testStr.toLowerCase().indexOf('h')) // 6
    console.log(testStr.toLowerCase().indexOf('h')) // 6
```

# 切割分解字串 slice篇
//? .slice(始,末)   //* 首字0為始
```js
    let testStr = 'Hello World'
    //* 後面使用負數，為由後往前數 n個
    testStr.slice(0,-6) 
    testStr.slice(0,2) //He
    testStr.slice(1,2) //He
```

# 切割分解字串 slice篇 split篇
//? .split('當切割點的字串', 回傳陣列的長度)
> .split 結果 會回傳一個陣列
```js
    "hello".split("", 2) // he

    let testStr = 'I am a String'

    log(testStr.split('')) //* 皆字串切成各字元
    log(testStr.split(' ')) // 以空白當切割點

    // ["", "at ", "at ", "at"] 
    //! 注意首字當切割點會有個空白元素在最前面
    log(testStr.split('c')) //cat cat cat
```