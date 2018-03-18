# 原生JS 事件監聽篇
> https://blog.techbridge.cc/2017/07/15/javascript-event-propagation/

//* IE 冒泡相關
> http://blog.51cto.com/mamadu/1971411

# 大綱
- Event Capturing 捕獲 / Bubbling 冒泡 //! 必看
- useCapture 
//? true (cap1) false (bubble3)

- 事件綁定整理 on-event
- 事件監聽 addEven
- 事件物件 Event Object

- preventDefault() 
> 防止物件預設動作，與事件傳遞無關

- stopPropagation()
> 防止事件向下傳遞
> https://ithelp.ithome.com.tw/articles/10192015
//! 用於 checkbox增加易用性 另開文
> 原生JS Checkbox


- 事件代理 (父帶子註冊事件)
> Event delegation //! 重要
//? 好處於 新增子/刪除子不需處理listener

- 一次性事件註冊 //? 常用
- doqsAll Loop //! 如何建立NodeList待查


# Event Capturing捕獲 / Bubbling冒泡 / useCapture
> https://ithelp.ithome.com.tw/articles/10191970

# 事件流程 //! 重要
//* e.eventPhase (注意大寫)
//* 可以查看在哪個階段觸發的
```js
    // Capturing Phase捕獲    (Phase 1) [向下]
    // Event at Target        (Phase 2)
    // Bubbling Phase捕獲 冒泡 (Phase 3) [向上]
    // 至 window後結束 事件流程
```

# 事件流程 綜合範例
```js
    // 父 包 子 範例 流程如下
    // 父 Capture => 子 Cap & Bubble => 父 Bubble

    //! 子 Capture & Bubble 順序由程式碼順序而定
    //* WHY? 
    // 因為子為觸發者 其狀態皆為 AT Target就無 cap / bubble之分了
    // Example Capture => Bubble

    //* true 為 capture phase
    child.addEventListener('click', function () {
        console.log('Child Capturing')
    }, true)

    // false(default) 為 bubble phase
    child.addEventListener('click', function () {
        console.log('Child Bubbling')
    }, false)
```

# useCapture 用途 (addEven true / false)
//! true 將 listener 添加到 捕獲階段
//? default: false 將 listener 添加到 冒泡階段
```js
    // 第三個變數為 useCapture 
    // true (將 listener 添加到 捕獲階段)
    // default: false(將 listener 添加到  冒泡階段)
    btn.addEventListener('click', showLog, true)
```

# 事件流程 Note
```js
    //* Event Capturing 
    //從 window 開始，逐層往下傳遞
    // window => document => html => ..... => btn

    //* Event Bubbling Phase
    // 從 btn 開始，逐層往上傳遞
    // btn => ... => document => window
```


# on-event 事件處理器
```js
    window.load = function(){/* do stuff */}
    btn.onclick = function(){/* do stuff */}
    btn.onclick = null //! 解除事件綁定

    //? 一次性事件
    testBtn.onclick = function () {
        console.log('123')
        //! 解除事件綁定
        testBtn.onclick = null
    }
```
//// HTML屬性 onclick="function名"
////不建議使用 Why 非侵入式JavaScript? 

# 事件處理器 addEven
> 事件解除
> addEventListener() 可對某事件綁定多個 handler，
> 所以透過 removeEventListener() 解除事件的時候，
> event handler 必須與 addEven 綁定的 handler 為同「實體」

//? 正確作法
//! 將 event handler抽出，移除時才會指向同一個實體
```js
    // 把 event handler 抽出
    let clickHandler = function(){ console.log('HI') }
    btn.addEventListener('click', clickHandler, false)
    //* 可為同事件(click) 綁定多個 handler
    btn.addEventListener('click', clickHandler2, false)
    btn.removeEventListener('click', clickHandler, false)
```

//* 錯誤範例 (Review)
```js
    //* Function 為 Event Handler
    //! 因為其Function 並非同一個實體
    btn.addEventListener('click', function(){
        console.log('HI');
    }, false);

    //* 移除事件，但是沒用
    btn.removeEventListener('click', function(){
        console.log('HI');
    }, false);
```

# 事件物件 Event Object
> 當 addEven註冊 Event Handler(function)時
> 會去建立一個 Event Object (含與事件相關的屬性)
```js
    //? 即為 function傳入的 變數e  log(e)
    // 較常用屬性:
    // type / target(觸發元件)
    // pageX / pageY (滑鼠座標)
    btn.addEventListener('click', function(e){
        console.log(e)
    }, false)
```

# e.preventDefault()  //*阻擋預設行為
//? JS 並不會阻止事件冒泡
//! jQuery return false 可以阻止預設 & 冒泡
```js
    // 通常用於 a(href="#") / submitBtn
    ul.addEventListener('click', (e) => {
        //* 注意會使 ul下的 Link也失效
        e.preventDefault()
    }, true)
    //? e.preventDefault() 並不會阻止事件向上傳遞 (事件冒泡)
    //* 於 function 加上 return false 也有相同效果 
    // (但要注意位置)
```

# 事件 delegation
```js
    ul.addEventListener('click', (e) => {
        //* 取得子元素的 tag 名稱 (自動轉成大寫)
        console.log(e.target.nodeName)
        //* 取得子元素的textContent
        console.log(e.target.textContent)
    })
```

# 阻擋事件冒泡傳遞
//? stopPropagation()
//* 防止事件傳遞給下一個節點
```js
    child.addEventListener('click', (e) => {
        e.stopPropagation()
    },true)

    // 當同節點有多個Listener，還是會被執行到
    // 以下可用來讓同層級的 listener也不要執行
    // 較少會用到
    e.stopImmediatePropagation()
```


# 一次性事件
> jQuery 的 once
```js
    btns.forEach((elem) => {
        elem.addEventListener('click', function listener(e){
            console.log(e.target.id)
            //! 事件種類 ,  Function名
            this.removeEventListener('click',listener)
        }) 
    })

    //? 一次性事件
    testBtn.onclick = function () {
        console.log('123')
        testBtn.onclick = null
    }
```

# 同時監聽多個元素
//! 如何建立NodeList待查
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