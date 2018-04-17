# JS Array 處理進階 大綱
reverse() , concat() , sort()

# JS 字串處理
//* 將字串切割成Array
//? split('')
//* 將Array 合併成字串
//? join('於item間插入 新str')
# 字串處理 範例
```js
    let str = 'Hey there'
    let splitArr = str.split(' ')
    let newStr = splitArr.join('!')

    // [ 'Hey', 'there' ]
    console.log(splitArr)

    // Hey!there
    console.log(newStr)
```

# JS Array reverse 
//* 倒敘Array
```js
    let array = [1, 2, 3, 4, 5, 6, 7]
    let newArray = []
    newArray = array.reverse()
```

# concat()
//? newArray = 放前的Arr .concat(放後的Arr) 
```js
    let oldArray = [1, 2, 3]
    let concatMe = [4, 5, 6]
    let newArray = []
    newArray = oldArray.concat(concatMe) 
    //? newArray = 放前的Arr .concat(放後的Arr) 
    [ 1, 2, 3, 4, 5, 6 ]
```

# JS Array sort()
> arr.sort([compareFunction])
//* 預設為 根據字串的 Unicode 編碼位置 (未設比較Func)

```js
    let months = ['March', 'Jan', 'Feb', 'Dec']
    months.sort()
    console.log(months)
    // expected output: Array ["Dec", "Feb", "Jan", "March"]

    let array1 = [1, 30, 4, 21]
    array1.sort()
    console.log(array1)
    // expected output: Array [1, 21, 30, 4]
```

# compareFunction 原理
> compareFunction(a,b) 的回傳値 < 0 
//* 將 a 排在b之前
> compareFunction(a,b) 的回傳値 = 0 
//* 皆不更動順序
> compareFunction(a,b) 的回傳値 > 0 
//* 將 b 排在 a 之前

```js
    function compare(a, b) {
        if (在某排序標準下 a 小於 b) { return -1 }
        if (在某排序標準下 a 大於 b) { return 1 }
        return 0 // a 必須等於 b
    }
```


# compareFunction 範例

//* 由大到小 & 由小到大
```js
let arr = [1, 4, 3, 2]
console.log(arr.sort((a, b) => b - a)) // 由大到小
console.log(arr.sort((a, b) => a - b)) // 由小到大
```

//! 按照 英文字母順序排列

```js
let items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
]

// sort by value
items.sort((a, b) => a.value - b.value)

// sort by name
items.sort((a, b) => {
    let nameA = a.name.toUpperCase()
    let nameB = b.name.toUpperCase()
    if (nameA < nameB) { return -1 }
    if (nameA > nameB) { return 1 }
    return 0 // names must be equal
})
```