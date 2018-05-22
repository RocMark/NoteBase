# Fetch API
https://goo.gl/pBLC9f

//* fetch polyfill

## 特性

## 默認行為
1. 不發送 cookie
2. 不啟用 CORS
3. 為了防禦 XSRF攻擊
=> 必須加入Header，來證明請求是從我自己的頁面發出的

Fetch並無法修改這些默認行為 (axios可以，且默認上述)
因此在 APP 中多處發起請求就需要打這一大段。

最好包裝成函數，否則Repeat太多
```js
  function addUser(details) {
    return fetch('https://api.example.com/user', {
      mode: 'cors',
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(details),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-XSRF-TOKEN': getCookieValue('XSRF-TOKEN'),
      },
    }).then(response => response.json().then((data) => {
        if (response.ok) {
          return data
        } 
          return Promise.reject({ status: response.status, data })
      }))
  }
```