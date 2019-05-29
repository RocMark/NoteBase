# 比較 後方字串的字元 是否 有出現在前方字串

```js
    let target = arr[0].toUpperCase()
    let check = arr[1].toUpperCase()
    let checkArr = check.split('')
    let result = true
    for (let i = 0, j = checkArr.length; i < j; i += 1) {
        if (!target.includes(checkArr[i])) {
            result = false 
        }
    }
    return result 
```


# freeCodeCamp
```js
function mutation(arr) {
    var target = arr[0].toUpperCase();
    var check = arr[1].toUpperCase();
    var checkArr = check.split('');
    var result = true;
    for (var i = 0, j = checkArr.length; i < j; i += 1) {
        if (!target.includes(checkArr[i])) {
            result = false ;
        }
    }
    return result;
}

mutation(["hello", "hey"]);
```