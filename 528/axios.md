# json-server

# axios

## axios.get
* axios.get 回傳一個 promise 物件
* res.data 才是要取回的資料

* res.status 取得 HTTP Status Code

* res.request 回傳 XHR物件

* res.statusText
* res.headers 回傳 header 物件
* res.config


* then catch
將錯誤訊息抓起來，避免 request 失敗，JS無法繼續執行
```js
  axios.get('https://jsonplaceholder.typicode.com/todos/2')
    .then((res) => {
      console.log(res)
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
```

## axios.post
data 為 一 promise
```js
  const data = axios.post('https://jsonplaceholder.typicode.com/todos', {
    userId: '1',
    title: 'Lorem123',
    completed: false,
  })
    .then((res) => {
      console.table(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
```