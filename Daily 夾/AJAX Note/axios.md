#　axios

## 特性
* 支持Promise API
* 攔截請求和響應
* 可取消請求
* 自動轉換JSON 數據
* 客戶端支持防禦XSRF

## Import
cdnjs axios
npm install axios

//* CDN- ESLint 會報錯 (no-undef)，但實際仍可用




## GET Request
* 可利用傳入網址  ~/post?id=1 來設定參數
* 使用 params設定參數
```js
  //* 效果等同於此行
  let url = 'http://localhost:3000/post?id=1' 
  // eslint-disable-next-line
  axios.get('http://localhost:3000/post', {
    params: {
      id: 1,
    },
  })
  .then((response) => {
    console.log(response)
  })
  .catch((error) => { console.log(error) })
```

## POST Request
```js

```