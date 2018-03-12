//* Web Storage (5MB)
> LocalStorage & SessionStorage 操作相同
> Session關掉視窗即消失
//! LocalStorage 只能存字串


```js
    //* 清空 localStorage
    localStorage.clear()

    //* 設定 key & 值
    localStorage.setItem('username', 'Tom')

    //* 取得的為字串
    console.log(localStorage.getItem('username'))

    //* 轉譯成Array 才能loop
    console.log(JSON.parse(localStorage.getItem('username')))

    //* 移除item
    localStorage.removeItem('city')
```

//! 處理順序
//* 建立陣列 / push值
//* 將 JSON 轉成 String 才能加入 localStorage
//? 將String 轉回JSON並輸出
```js
    //* 建立陣列 / push值
    const arr = []
    arr.push('Tom', 'Mark', 'Tim')

    //* 將JSON轉成String
    const str = JSON.stringify(arr)

    //* 加入localStorage
    localStorage.setItem('users', str)

    //? 將String 轉回JSON並輸出
    const newStr = JSON.parse(localStorage.users)

    for (let i = 0; i < newStr.length; i += 1) { 
        console.log(newStr[i]) 
    }

    // 檢查Browser是否支援 LocalStorage
    if(typeof(Storage) !=="undefined") 
```

```js
// 將陣列轉成字串
let JSONReadyUsers = JSON.stringify(todoItemList)
localStorage.setItem('todoItemList', JSONReadyUsers)
// 將字串轉回陣列 localStorage['Key的名稱'] 取得值(為一陣列)
console.log(JSON.parse(localStorage['todoItemList']));
// 推入新資料
let addSomeOne = JSON.parse(localStorage['todoItemList'])
addSomeOne.push('Doyle')
console.log(addSomeOne);