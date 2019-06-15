```js
function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
    for (var i = 0, j = arr.length; i < j; i += 1) {
        for (var x = 0, y = arr[i].length; x < y; x += 1) {
            product *= arr[i][x];
        }
    }
    // Only change code above this line
    return product;
}

// Modify values below to test your code
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
```