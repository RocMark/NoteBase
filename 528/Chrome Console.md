# Chrome Console

* console sideBar 側邊欄
message 可以選擇只顯示該檔案的 console內容

* console.log('Hey %s','+po')
逗號之後的內容會取代 %s
* console.log('%c Hey','font-size: 58px')
可以給予 style

* console.warn('OH NO!')
* console.error('Damn')
* console.info('Info')

* console.assert(情況,'Wrong MSG')
Ex: a.classList.contains('navLink')
只有當情況不符合時才會觸發
* console.clear() 清空
* console.count('test')
可以計算輸出了幾次 test
* console.dir 
可以顯示出整理過的物件 / DOM
可查看 屬性、方法....等
* console.table
用於陣列、物件也可，顯示整理過的表格
```js
  const dogs = [
    {
      name: '123',
    },
    {
      name: '456',
    },
  ]
  console.table(dogs)

  const obj = {
    name: '132',
    age: 456456465,
  }
  console.table(obj)
```
## console.group
將相關資料分群顯示
```js
  const dog = [
    {
      name: 'mark',
      age: 465,
    },
    {
      name: 'tom',
      age: 789,
    },
  ]
  dog.forEach((el) => {
    console.groupCollapsed(`${el.name}`)
    // console.group(`${el.name}`)
    console.log(`this is ${el.name}`)
    console.log(`this is ${el.age}`)
    console.groupEnd(`${el.name}`)
  })
```
## console.time 
查看執行時間
```js
  console.time('fetch date')
  fetch('https://api.github.com/users/rocmark')
    .then(data => data.json)
    .then((data) => {
      console.timeEnd('fetch data')
      console.log(data)
    })
```