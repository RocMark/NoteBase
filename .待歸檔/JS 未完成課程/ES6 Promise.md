# ES6 Promise
> 解決CallBackHell
> https://www.youtube.com/watch?v=K_gbf1T5Egg (中 先看)
> https://www.youtube.com/watch?v=104J7_HyaG4 (英 後看)

# When to use
//* CallBack 用於單一事件
//* Promise 用於多事件同時

//! .defer() 過時了
//? new Promise() 取代

# Promise 可應用處
> Page with PageNav 4 
> 如果點擊 Page2後 快速點擊 Page3 Page4
> 會造成無法確認哪個一頁面會顯示

> 即時搜尋欄 避免前一個搜尋結果與新輸入的race()

//? 上2皆可用 reject去防止不需要的動作執行



# 語法記錄
> Promise 建立 / 呼叫
> 錯誤處理 new Error / .catch
> Promise.all() / .race()
```js
    const myPromise1 = new Promise((resolve, reject) => {
        resolve('Hello world')
        reject(new Error('Error')) 
    }

    //! 取得值為1陣列 ["Promise1值","Promise2值"]
    Promise.all([myPromise1, myPromise2])
        //* 全部Promise執行完才進行 .then()
        .then(value => console.log(value))
        .catch(error => console.log(error))
```

# Promise優點
> 執行後無法被覆寫(Read-only / Immutable)
> 無法從內外部改變其結果皆無法

# Promise優點缺點
> Not lazy 一建立就會進行執行
> 無法被取消
> Ex: User發訊需要資料，但後及跳轉不需要該資料，JS仍會執行取資料動作

# Promise.all()
//* 將多個promise都丟入，都完成才接著下去做動作
//? 有任何一個失敗就會造成 catch error
```js
    //! 結果為1 array 
    //! [ 'Hello Promise1', 'Hello Promise2' ]
    const Promise1 = new Promise((resolve) => {
        setTimeout(() => { resolve('Hello Promise1') }, 1000)
    })
    const Promise2 = new Promise((resolve) => {
        setTimeout(() => { resolve('Hello Promise2') }, 1500)
    })

    Promise.all([Promise1, Promise2])
        //? 會於1.5s完成並執行 .then()
        .then(value => console.log(value))
        .catch(error => console.log(error))
```

# Promise.race()
//! 只需要一個完成即可
//? 例如遠端處理，同時對三台server發同要求，有一個回來即可
//! 失敗也算完成
> 若於1s 有Promise失敗 即會call .catch
```js
    Promise.race([myPromise1, myPromise2])
        .then(value => console.log(value))
        .catch(error => console.log(error))
```

# Promise 底層介紹
> https://www.youtube.com/watch?v=104J7_HyaG4
//* Deferred Object (進度條UI)
//* Promise Object (類似進度條)

> Deferred Object 為 JS Object // 宣告Promise的物件
> 其有一屬性為 Promise 為一 Object // 運行Promise後的物件

//* 與下面狀態篇合看
Promise Object 有 status & value 屬性
//* (default) status: pending / value: undefined


//* 與Promise Object圖搭配看!
deferred Object 有 resolve & reject Function可呼叫
promise Object 有 then & catch Function可呼叫
> resolve 表 成功 / reject 表 失敗

//* 當 resolve 被執行 reject將不會被觸發，也無法
//! 當 resolve 被執行 會觸發 promise object 的 then

//* reject被執行 則觸發 catch


# fetch 範例
```js
fetch('demo.jpg')
    .then(response => response.blob())
    .the((myBlob) => {
        let objectURL = URL.createObjectURL(myBlob)
        myImg.src = objectURL
    })
```


# Promise 狀態 範例
//? Promise一建立後會自動開始執行
```js
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hello world')
        }, 1000)
    })

    //* 剛建立未完成狀態為 pending 值為 undefined
    {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}

    //* 成功完成時的Promise
    {[[PromiseStatus]]: "resolved", [[PromiseValue]]: "Hello world"}
```

# 透過 catch 進行錯誤處理
//? 較多人使用，較易閱讀
//* 可以多次 .then後統一處理error
//! 也可於 .then的結果出現錯誤 將錯誤拋出!
```js
    myPromise
        .then((value) => { console.log(value) })
        .catch((error) => { console.log(error) })
```

# 基本錯誤處理
//* 當有錯誤發生 串接的 .then 就不會繼續執行
//? 狀態從 pending 改為 resolve / reject 就不會再更動
```js
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => { 
            resolve('Hello world') 
        }, 1000)
        setTimeout(() => { 
            // ! 此行為 call reject 時間超過就call錯誤
            // ? 執行 reject 後 上方 resolve 不會執行
            reject(new Error('Error')) 
        }, 500)
    })

    myPromise.then(
        value => console.log(value),
        //* reject 狀態 call 下面這行
        error => console.log(error),
    )
```