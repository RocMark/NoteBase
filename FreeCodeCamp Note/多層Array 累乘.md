# 多層 Array 累乘


//* ES6 個人解
```js
    let testArr = [[1, 2, 9], [2], [4]]
    function multiplyAll(arr) {
        let newArr = []
        for (let i = 0; i < arr.length; i += 1) {
            let itemSum = arr[i].reduce((sum, elem) => sum * elem, 1)
            newArr.push(itemSum)
        }
        let result = newArr.reduce((sum, elem) => sum * elem, 1)
        return console.log(result)
    }
    multiplyAll(testArr)
```