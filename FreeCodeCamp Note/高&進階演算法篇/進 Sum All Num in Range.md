# Sum All Num in Range

1. 找出最大 最小值
2. 建立新Arr (Range)
3. 並reduce加總

```js
    var max = (Math.max.apply(null, arr));
    var min = (Math.min.apply(null, arr));
    var tempArr = [];
    for (var i = min, j = max; i <= j; i += 1) {
        tempArr.push(i);
    }
    return tempArr.reduce(function(sum, elem) {
        return sum + elem;
    }, 0);
```