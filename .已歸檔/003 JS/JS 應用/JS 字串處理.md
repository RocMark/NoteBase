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