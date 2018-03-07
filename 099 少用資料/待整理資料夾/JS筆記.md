```js
switch (cate) {
    // 要有引號!
    case 'MustDone':
        color = "#E91E63"
        break
    default:
        break
}
// LocalStorage篇 --------------------------------------------
// SessionStorage基本一樣，但關掉視窗即消失

// 將目標陣列轉成字串後存入 鍵值(前) 值(後)
localStorage.setItem("鍵值",JSON.stringify(目標陣列))
let retrieved = localStorage.getItem("鍵值")
let bom = JSON.parse(retrieved)

// 檢查Browser是否支援 LocalStorage
if(typeof(Storage) !=="undefined") 

// 新建空陣列
let todoItemList = []
// 將值/物件推入陣列中
todoItemList.push('Tom', 'Durrr', 'Dwan')
// 將陣列轉成字串
let JSONReadyUsers = JSON.stringify(todoItemList)
localStorage.setItem('todoItemList', JSONReadyUsers)
// 將字串轉回陣列 localStorage['Key的名稱'] 取得值(為一陣列)
console.log(JSON.parse(localStorage['todoItemList']));
// 推入新資料
let addSomeOne = JSON.parse(localStorage['todoItemList'])
addSomeOne.push('Doyle')
console.log(addSomeOne);

// 時間篇 --------------------------------------------------------
let date = new Date()
date.getFullYear();  // 完整的年份(4位,1970)
date.getMonth();  // 月份(0-11,0代表1月,用時要加1)
date.getDate();  // 日(1-31)
date.getTime();  // 時間(1970.1.1至今的毫秒数)
date.getHours();  // 小時(0-23)
date.getMinutes();  // 分鐘(0-59)
date.getSeconds();  // 秒數(0-59)
```