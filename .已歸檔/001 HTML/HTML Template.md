# HTML Template 屬性

# 重要特性
> 在被實例化之前，會是 //?隱藏且不會被渲染
//* 處於模版中的內容不會腳本不會運行、圖片不會加載、影音不會播放，直到模板被使用
> 模板能夠被放在任何位置 (head/body/frameset)

> frameset為切割視窗
//! 內容不在文檔中 使用 doqs無法取得
//? template 元素存於 Document-fragment

# 如何使用
```js
    //? .content 不可少，不然複製對象會包含 template節點
    //* 於渲染時也不會出現
    let tpl = document.querySelector('#tpl').content
    
    //* true 深拷貝(包含子元素) false 淺拷貝(只該節點)
    //* 下兩種方法 結果相同
    let cloneElem = document.importNode(tpl,true)
    let testClone2 = tpl.cloneNode(true)

    body.appendChild(cloneElem)
```

# 注意嵌套模坂
//* 激活外層並不會激活內層模板，也就是說子模板需另外手動激活
```html
    <template>
        <ul>
            <template>
                <li>Stuff</li>
            </template>
        </ul>
    </template>
```

# 其他方法比較  幕後 DOM
//* 使用 hidden特性、display:none 將視圖隱藏

# 優點
> 使用DOM，可讓瀏覽器了解DOM結構，方便複製
> 沒有渲染內容 (hidden阻止區塊的顯示)

# 缺點 
> 非惰性 (即內容隱藏，但仍會發起圖片請求)

> 難以設置樣式&主題
> 嵌入頁面需要為所有CSS規則增加 #mtTpl 前綴，將樣式限定在模板範圍內。
> 這種做法十分脆弱，並且無法確保未來可能出現的命名衝突。

```html
    <div id="myTpl" hidden>
        <img src="logo.png">
        <div class="comment"></div>
    </div>
```

# 其他方法比較  重載腳本
handlebars.js
利用字符串，對Tpl作渲染，再進行輸出

# 優點
> 沒有內容渲染、惰性
# 缺點
//! 安全問題
鼓勵使用 .innerHTML，對用戶提供的數據進行運行時字符串解析很容易導致XSS漏洞。