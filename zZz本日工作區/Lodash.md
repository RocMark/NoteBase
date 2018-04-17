# Lodash
> https://www.youtube.com/watch?v=kdfikit351Y

# 文件
可以於該網站，使用F12 當作練習平台
> https://lodash.com/docs/4.17.5

# 有很多與原生JS一樣的功能
> Why use them ?
Lodash 會為效能作一些優化

# Array
_.chunk 分群
```js
    let arr = [1,2,3,4,5,6]
    _.chunk(arr,2)
    // 得到3個陣列 兩個item於之中 [1,2] [3,4] [5,6]
```

# Collection 
可用於陣列or物件
filter/every/forEach/map

////_.pluck 已被棄用 使用 map作代替

# Function

_.once //? Function只執行一次
```js
    function OnceFunction() {
        console.log('Hey')
    }
    let runOnce = _.once(OnceFunction)
    runOnce() // 執行第一次會回應
    runOnce() // 2+次 會變成 undefined
```

# Lang
判斷是否為各種型態


```js
    _.isArray([]) // true
    _.isArray({}) // false
```

# 取得亂數
//?　_.random(1,6) 限定範圍

# Object



