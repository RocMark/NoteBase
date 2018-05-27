# 找出陣列符合項 並 刪除該項目

```js
function destroyer(arr, ...val) {
  // Remove all the values
  const testArr = val

  console.log(testArr.length)

  let newArr = arr

  for (let i = 0, j = testArr.length; i < j; i += 1) {
    newArr = newArr.filter(el => el !== testArr[i])
  }
  console.log(newArr)
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3)

```