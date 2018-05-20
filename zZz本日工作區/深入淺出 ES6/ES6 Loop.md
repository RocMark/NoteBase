## For Loop 迴圈 演化

### forEach 缺陷
* 無法用 break 中斷
* 無法使用 return 返回到外層 Function

### for in
* 可以用來 迭代 物件屬性
* 會跌代整個原型鏈上的屬性
* 在某些情況下，可能按照  //!隨機順序遍歷數組元素。

//! 勿用於 迭代 陣列
index 值並非數字，而是字符串 '0','1','2'
當使用 index 作算數時，會出錯 //* '2'+'1'='21'

### for of //? 救世主
* 最簡潔、直接的迭代 陣列語法
* 無 for-in 的缺陷
//? 可使用 break、continue、return
//! for-of 還支援 NodeList

* 可用於 可迭代的 Ex: 陣列、字串、Maps Sets (ES6新類別)
* 物件不可使用!

//* ESLint 比較建議使用 forEach (陣列HOFunc)
> Why? immutable data rule, 避免 side effects

```js
    for (let i = 0, j = arr.length; i < j; i += 1) {}

    arr.forEach((el) => {})

    for (const index in arr) {}

    let list = [1, 2, 3]
    let str = 'Hello'

    for (let char of str) {
        console.log(char)
    }
    for (let el of list) {
        console.log(el)
    }
```