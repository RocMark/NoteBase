//* Web Storage (5MB)
> LocalStorage & SessionStorage 操作相同
> Session關掉視窗即消失
//! LocalStorage 只能存字串

# 基本語法介紹
```js
  localStorage.clear() //清空
  localStorage.setItem('username', 'Tom')
  localStorage.getItem('username') // 取得的為字串
  //* 轉譯成Array 才能loop
  JSON.parse(localStorage.getItem('username'))
  //* 移除item
  localStorage.removeItem('city')
```

# 實作範例
//* 建立陣列
//! 將 JSON 轉成 String 才能加入 localStorage
//? 將String 轉回JSON並輸出
```js
  const arr = ['Tom', 'Mark', 'Tim']
  const str = JSON.stringify(arr)
  localStorage.setItem('users', str)

  const newStr = JSON.parse(localStorage.users)

  for (let i = 0; i < newStr.length; i += 1) { 
      console.log(newStr[i]) 
  }

  // 檢查Browser是否支援 LocalStorage
  if(typeof(Storage) !=="undefined") 
```