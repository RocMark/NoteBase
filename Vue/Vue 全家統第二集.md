# Vue 全家統第二集
Vuex / Vue Router

SPA 前端做 router
後端 將 所有網址 導向 index.html

# v-for :key="item.id"
* id 使用 unique 的
在做動畫時，為了辨別各個物件





# Vue 全家桶 筆記

npm run build
json-server data.json
live-server 
# a herf
```js
  <a href="#"></a>
  // 走 http協定 走向該網域
  <a href="http://yahoo.com.tw"></a>

  // 走 javascript 但無設目的
  <a href="javascript:;"></a>

  // 會返回 undefined
  <a href="javascript:void()"></a> // 不推薦
```

# 注意 lastID 問題
陣列 0為始，因此取得長度後要減掉 1
```js
  const arr = [{ id: 1 }, { id: 2 }]
  // 取得第二個項目的id 即 arr[長度為2 - 1 = 1] 
  // arr[1] 才是正確目標
  const lastID = arr[`${arr.length - 1}`].id
```

# 注意 Live Server & JSON-SERVER 大坑
1. JSON-SERVER
post 資料進入，把資料塞入 data.json
2. Live Server
資料改變了，所以會 Reload Live Server
而非作 post 時，會重新整理頁面
* 修正
> 將此段加入 "work space 的 settings"
目前先套用 global，有問題再改回來
```js
  {
    "liveServer.settings.ignoreFiles": [
      ".vscode/**",
      "**/*.scss",
      "**/*.sass",
      "**/*.ts",
      "data.json"
    ],
  }
```

# Vue
Vue 可選擇控制某塊，並不是整個網站都需要用 Vue
可使用 jQuery 配 Vue
* jQuery 去撰寫需要動畫的部分
* Vue 去撰寫資料相關

# v-for
* 勿拿 index 來刪除資料，使用 id 較準確
```js
  // contents 來自 data: array[]
  <li v-for="content in contents">
    <span>
  </li>
```

# v-model
使用 v-model 實現雙向綁定資料
<input v-model="newUserName">
* newUserName 對應到 data 中的 newUserName

# axios
get / post / delete / update
```js
  axios.get('http://localhost:3000/users')
    .then((res) => {
      this.users = res.data
    })
    .catch((error) => { console.log(error) })
  
  const data = { id: '4', name: 'Tim' }
  axios.post('http://localhost:3000/users', data)
    .then((res) => {
      // render view
      // reset form
    })
    .catch((error) => { console.log(error) })
  
  const id = '1'
  axios.delete(`http://localhost:3000/users/${id}`)
    .then((res) => {
      console.table(res.data)
    })
    .catch((error) => { console.log(error) })

    
  const data = { id: '4', name: 'Tim' }
  axios.update('http://localhost:3000/users', data)
    .then((res) => {
      // render view
      // reset form
    })
    .catch((error) => { console.log(error) })
```