# Fetch API
> https://www.youtube.com/watch?v=Oive66jrwBs

# 同步 非同步
//* 同步 依序執行
//! 非同步 全部同時執行

# promise 語法範例
```js

    let promise = new Promise(((resolve, reject) => {
        setTimeout(() => {
            resolve('三秒過後執行')
        }, 3000)
    }))
    promise.then((result) => {
        console.log(result)
    })
    console.log('再Timeout之後執行')
```


# fetch 語法
> 可用 txt,json,url

//* 回傳 promise 型態，成功就會執行 then

```js
    // res.text() 
    fetch('檔案或url')
        .then(res => res.json())
        .then(data => {
```