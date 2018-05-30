# String 

//* str 轉 number   +str

## 常用的 string 方法

### indexOf(subStr)
//* 檢查是否有該子字串
//? 回傳位置，可檢查字串 無則回傳-1
```js
    let str = 'hey cat'
    console.log(str.indexOf('z'))
```

### slice()
抽掉指定位置的字串，返回該新字串
```js
    let str = 'hey cat'
    // index 1 始至 last
    console.log(str.slice(1))
    // index 1 始 取至 index 3
    console.log(str.slice(1, 3))
```

## Array & String 轉換
split('') 字串依照傳入字串，當分割點，產生陣列
join()  將陣列 合併 成字串


## 字串合併
```js
    let strA = '123'
    let strB = '456'
    console.log(strA.concat(strB)) //123456
```

## 字串檢測

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