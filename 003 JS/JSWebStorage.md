//* Web Storage (5MB)
// ? localStorage & sessionStorage 同方法

//! LocalStorage 只能存字串

// * 基礎篇

```js
    localStorage.clear()
    sessionStorage.setItem('username', 'Tom')
    console.log(localStorage.getItem('username'))

    //* key排序從0起 依照英文文字母排序!!
    console.log(localStorage.key(0))
    
    //* 移除item
    localStorage.removeItem('city')
    
    for (let i = 0; i < localStorage.length; i += 1) {
        const key = localStorage.key(i)
        console.log(localStorage.getItem(key))
    }
```

//! 處理順序
//* 建立陣列 / push值
//* 將JSON轉成String
//* 加入localStorage
//? 將String 轉回JSON並輸出

```js
//* 建立陣列 / push值
const user = []
users.push('Tom', 'Mark', 'Tim')

//* 將JSON轉成String
const JSONReadyUsers = JSON.stringify(users)

//* 加入localStorage
localStorage.setItem('users', JSONReadyUsers)

//? 將String 轉回JSON並輸出
const changedUsers = JSON.parse(localStorage.users)

for (let i = 0; i < changedUsers.length; i += 1) { 
    console.log(changedUsers[i]) 
}
```

```js 
    const menu = []
    const options = {
        name: 'Tom',
        game: 'POE',
        weapons: ['Bow', 'Arrow'],
    }
    const options2 = {
        name: 'Mark',
        game: 'POE',
        weapons: ['Bow', 'Arrow'],
    }

    menu.push(options)
    menu.push(options2)
    
    const str = JSON.stringify(menu)

    localStorage.setItem('TheDude', str)
    
    const original = localStorage.getItem('TheDude')

    const obj = JSON.parse(original)

    console.log(obj[1].name)
```