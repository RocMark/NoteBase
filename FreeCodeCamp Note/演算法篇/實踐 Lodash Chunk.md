# Chunky Monkey
> 陣列分群 _chunk

```js
    function chunkArrayInGroups(arr, size) {
        let result = []
        let times = arr.length / size
        for (let i = 0, j = times; i < j; i += 1) {
            result.push(arr.slice(0, size))
            arr.splice(0, size)
        }
        return result
    }
    console.log(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2))
```

# freeCodeCamp 用
```js
function chunkArrayInGroups(arr, size) {
    var result = [];
    var times = arr.length / size;
    for (var i = 0, j = times; i < j; i += 1) {
        result.push(arr.slice(0, size));
        arr.splice(0, size);
    }
    return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
```