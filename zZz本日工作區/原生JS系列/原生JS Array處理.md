# 原生JS Array處理

//! sort 待查用法
> 見 316 / High Order Function Review

> find() 與filter類似，但只會回傳一次值

//! match 只能用於 String
//* indexOf 可用於 字串或陣列
> .find() 功能與filter相同，但只回傳第一個，取得結果為一個物件

# Mutator Method //! 會對Array做更動
push() //於陣列最後加入元素
unshift() //於陣列最前加入元素

testArr.pop() //* 將陣列最後一個元素丟出
testArr.shift() //* 將陣列最前一個元素丟出
console.log(testArr.pop()) //* 取得丟出元素
console.log(testArr.shift()) //* 取得丟出元素

testArr.reverse() //* 倒轉矩陣順序

# splice
```js
    //* 新增項目在指定位置
    //* 1 為要插入的位置
    //* 0 為要取代的元素個數 0表不取帶任何
    //* 之後的變數為 要插入的元素
    testArr.splice(1, 2, 'hey', 'yo')
    //* 於 index[1] 插入 hey ，並將 index[1]&[2]刪除
```

# sort
```js
    //! 待查用法
    testArr.sort((a, b) => {
        if (a > b) {
            return 1 
        } else if (a < b) {
            return -1 
        }
        return 0 
    })
```

# Accessor method 
//? 不會對Array做更動，回傳新陣列

//* 回傳陣列轉成的 字串，參數為分隔用
console.log(testArr.join('X'))

# indexOf() 搜尋元素用
//* 亦可用於字串
//! 查無元素會回傳 -1
//* 注意型別!!
testArr.indexOf()