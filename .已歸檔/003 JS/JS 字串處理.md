# JS 字串處理
> https://goo.gl/Kh9mVL
```js
  * slice(2,4) 
  回傳新字串 2起使位置 4為最終位置
  * split()
  將字串拆分成陣列
  * substr(2,4)
  回傳新字串 2起使位置 4為要取的字數
```
```js
  // toLowerCase() / toUpperCase() / trim()
  strA.concat(strB)
  strA.endsWith('結尾') // 回傳Boolean
  strA.startWith('開頭') // 回傳Boolean

  str.includes('字串')   // 回傳Boolean
  str.indexOf('字串') // 取得位置
  str.lastIndexOf('字串') // 取得位置
  str.repeat(3)  // 字串重複輸出
  str.search('end')
  str.slice(2,4)
```
* regex 關聯 str方法
```js
  str.match(/end/g)
  str.replace(/\W|_/g, '')
  str.search('end') // 亦可用 regex
```

## match()
```js
    let str = '123'
    let str2 = '1234'
    let regex = /^123$/

    //* 有則回傳 ​​​​​[ '檢測的符合值', index: 0, input: '123' ]​​​​​s
    //* 無則回傳 null
    console.log(str.match('23'))
    console.log(str.match(regex))
    console.log(str2.match(regex))
```

## replace( regexp/substr , replacement)
找出相字串 取代
記得加上 g flag 否則只會替換掉第一個匹配的字串

# String Method
length / toUpperCase()
* substring(始,末)  取子字串
* split('當做切割點')  切割字串成陣列
```js
  // ES6 Template String
  let st = 'Hello Tom'
  console.log(st.substring(0,5)) // Hello
  let name = 'Mark';
  console.log(`My Name is ${name}`);

  let st2 = 'tech, it, code'
  console.log(st2.split(', '))
  // ["tech", "it", "code"]
```