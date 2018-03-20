# 原生JS checkBox 易用性 & 冒泡處理

# e.stopPropagation()處
> https://ithelp.ithome.com.tw/articles/10192015


# checkBox 結構
```js
    //? 為了增加點擊範圍/易用性 與 label 並用
    // 但因此會需要多設許多不必要的 id屬性
    <label for="xxx">Label2</label>
    <input type="checkbox" id="xxx">
    
    //* 有時會需 排版 / 不想增加太多id 改寫成如下
    <label class="lbl">
        Label <input type="checkbox">
    </label>
```
```pug
    label label文
        input(type="number" value="1" max="" min="1")
    //- &:focus
            border: 4px solid #80deea
```

# 事件註冊
//! 點擊Label時會被觸發兩次

//? Why? 要ReView
```js
    //* 當點擊了 label 觸發 click 事件，
    //* 此時瀏覽器會自動把這個 click 事件帶給 checkbox。
    //? 而後 checkbox phase 2後，向上冒泡
    //? 再次觸發label的 click 事件
    // => 因此造成兩次的觸發
```
```js   
    lbl.addEventListener('click', function (e) {
        console.log('lbl click')
    }, false)

    //! 解決法 於 CheckBox 冒泡時阻止其將事件傳遞下去即可
    ckbox.addEventListener('click', function (e) {
        e.stopPropagation()
    }, false)
```