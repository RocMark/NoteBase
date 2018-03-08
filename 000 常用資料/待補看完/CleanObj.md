# Clean Code Object篇
> https://www.youtube.com/watch?v=NPtnp0w_mmA&index=4&list=PLWKjhJtqVAbkK24EaPurzMq0-kw5U9pJh


# Use getters and setters

```js //? Better
function makeBankAccount() {
    let balance = 0
    function getBalance() {
        return balance
    }
    function setBalance(amount) {
        balance = amount
    }
    return {
        getBalance,
        setBalance,
    }
}
const account = makeBankAccount()
account.setBalance(100)
```

```js //* Bad 不應該讓外部可以直接更動 function內部屬性
function makeBankAccount() {
    return { balance: 0, }
}
const account = makeBankAccount()
account.balance = 100
```

# Make obj have private members
// ! 使用this 會讓 prototype 成員為public
// * 進而容易由外面去取得&修改 prototype成員
> 兩者進行 delete employee.name 的結果不同!!!!


```js //? Better
const Employee = function (name) {
    //* 傳入name 但沒有 assign 給屬性
    //* name 仍會被存入物件 但無法被直接存取
    //* 但我們可以藉由 getName() 去取得該值
    return { getName() { return name } }
}
const employee = new Employee('John Doe') // John Doe
delete employee.name //! delete未成效 結果: John Doe Good!
```


```js //* Bad
// 創建 prototype
const Employee = function (name) {
    this.name = name //! 用到this 此為public成員
    this.getName = function () { return this.name }
}
// //* 向 prototype 新增方法
Employee.prototype.getName = function getName() {return this.name }
const employee = new Employee('John Doe') // 結果為 John Doe
delete employee.name   // 結果 undefined
``` 








```js
//* 向 prototype 新增方法
Employee.prototype.getName = function getName() {
    return this.name
}
//* 等同於在prototype裡 加入此行
//this.getName = function () { return this.name }
```