# 原生 JS Siblings 改寫至 jQuery

## jQuery 原始碼

```js
  var siblings = function( n, elem ) {
    var matched = [];
    for ( ; n; n = n.nextSibling ) {
      // 該拿到的是 tag 且不是等於傳入的本身就加入結果
      if ( n.nodeType === 1 && n !== elem ) {
        matched.push( n );
      }
    }
    return matched;
  };

  siblings: function( elem ) {
    // 傳入 母的第一個子 (先出去外，往後抓)
    // || {} 避免 elem.parentNode 變成 undefined
    // 再進行 .firstChild 時會噴錯 !!
    // 當 elem.parentNode = undefined 時改用 {}
    // 即不會噴錯
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
  },
```

## JS Loop概念
```js
  // for 的宣告可以往外面拉出來
  // 中間 n 代表判斷 是否存在 
  // n.nextSibling 一直往外直到 window外會變成 null
  // 當 n 符合時，直行code，後 n = n.nextSibling
  for (; n; n = n.nextSibling) {
    if (n.nodeType === 1 && n !== elem) {
      matched.push(n)
    }
  }

  let index = 0
  for (;index < 5; index += 1) {
  }
```

## 自改寫 Code
```js
  const siblings = function (elem) {
    let n = elem.parentNode.firstChild || {}
    const result = []
    for (; n; n = n.nextElementSibling) {
      if (n.nodeType === 1 && n !== elem) {
        result.push(n)
      }
    }
    return result
  }
  const test = document.querySelector('#test')
  const testSib = siblings(test)
  console.log(testSib)

  testSib.forEach((el) => {
    console.log(el)
  })

  console.log($('#test').siblings())
```