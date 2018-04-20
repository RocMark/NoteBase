#
```js
function repeatStringNumTimes(str, num) {
    let tempStr = ''
    for (let i = 0, j = num; i < j; i += 1) {
        tempStr += str
    }
    console.log(tempStr)
}

repeatStringNumTimes('*', 3)
```