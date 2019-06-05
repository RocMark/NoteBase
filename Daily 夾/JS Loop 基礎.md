# JS 循環方法
- For Loop 

- forEach 缺點於無法用return退出函數

- for of (ES6) 
亦可用於Symbol，較 ForLoop 清晰(無index)

- for in 用於循環物件屬性
類似 Object.keys()，較少用

- High Order Function (見Array章節)
filter 篩選
map  根據原陣列 建立新陣列 (鎖定某屬性)
reduce 累加 / 累乘用

> 測試用資料
```js
  const todos = [
    {
      id: 1,
      text: 'Take out trash',
      isCompleted: true
    },
    {
      id: 2,
      text: 'Go Walking', // print this
      isCompleted: true
    },
    {
      id: 3,
      text: 'Go to Gym',
      isCompleted: true
    }
  ]
```


# For Loop / forEach / for of
```js
  for (let i = 0, j = todos.length; i < j; i += 1) {
    console.log(todos[i].text)
  }

  todos.forEach(elem => {elem.text});

  for(let todo of todos){
    console.log(todo.text)
  }
```