# call apply bind 區別

# Why use call apply
* 用來改變 this 的指向
可藉由 call / apply 使用其他對象的方法操作

# call & apply 範例
前者綁定 Context
後者為傳給 調用函式的參數
* call 將變數逐個列出
* apply 寫成陣列傳入
```js
  const People = {
    sayHello(arg1, arg2) {
      // call  Mark Hey there  (傳入兩個參數)
      // apply Mark Hey there undefined (只傳入一個陣列)
      console.log(`${this.name} ${arg1} ${arg2}`)
    },
  }
  const me = { name: 'Mark' }
  People.sayHello.call(me, 'Hey', 'there')
  People.sayHello.apply(me, ['Hey there'])

```

# bind 
也是用於實現 Context 綁定
不同處於 call / apply 處為
1. bind 為 新創建一個函式
因此 bind 後的函式不會執行，return 改變了上下文的函式

call / apply 則會直接執行函式
2. 後者傳入一個 Function

