# Sets
> https://www.youtube.com/watch?v=ycohYSx5h9w

## Sets 架構、延伸
> https://www.youtube.com/watch?v=wl8u02IdVxo

# Why use Map & Set
Set 用於 陣列 需要其子有唯一性

Map 相對於 Object 有更高的彈性
Object的鍵值為 String
//* Map的鍵值為 值對值


//! 常用於 檢查是否有重復的item
```js
    const arr = [1, 2, 3, 1, true, true, 'test', 'test']
    const removeRep = [...new Set(arr)]
    console.log(removeRep)
```
//* 並未擁有所有 Array 方法 (解)
```js
    const set = new Set(arr)

    // set.filter(el => el > 1) // 無法使用!!
    let filtered = [...set].filter(el => el === 1)
    console.log(filtered)
```

## 特性
//! Set 會將重復的 '值' 自動排除 
* 成員值唯一，沒有重複的值
* 可使用 chain 
* 重復陣列 & 物件 因實體不同，所以需要另外作判斷


```js
    const set = new Set([1, 2, 3, 1, true, true, 'test', 'test'])
    console.log(set)
```

## 方法
* size 查看成員總數
* add
* delete
* has 判斷是否存在
* clear 清空Sets
```js
    set.add(11).add(false).add(789)

    // 會回傳 true false 表該元素是否存在
    console.log(set.delete('test'))
    console.log(set.delete('test123'))

    console.log(set.has(789))

    console.log(set.size)

    //? 清空整個 set
    set.clear()
```
```js
const arrSet = new Set([[], [], { name: 'test' }, { name: 'test' }])
//* 陣列&物件 會無效 因為皆為 不同實體
console.log(arrSet)
```

## Loop 操作
* key()
* value()
* entries()

> 可用 for of Loop (不建議)
* forEach() (Better)
```js



```