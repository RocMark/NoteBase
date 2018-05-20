# 找出多個陣列的最大值


```js
    let arrs = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]
    let temArr = []

    arrs.forEach((arr) => {
        let maxNum = arr.filter((elem, index, array) => elem === Math.max.apply(null, array))
        temArr.push(maxNum)
    })
    console.log(Math.max.apply(null, temArr))
```

# 輸出各陣列的最大值
```js
    function largestOfFour(arrs) {
        var temArr = [];
        arrs.forEach(function (arr) {
            var maxNum = arr.filter(function (elem, index, array) {
                return elem === Math.max.apply(null, array);
            });
            temArr.push(maxNum[0]);
        });
        return temArr;
    }
    largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
```