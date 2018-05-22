# AJAX
* Asynchronous JS & XML
* 一種 web technologies
* Send & Receive data Asynchronous
* 可避免刷新整個頁面

## XHR 物件建立
* 建立 XHR 物件  
log(xhr) 可觀看內部方法

### xhr 方法
* xhr.open() 初始化 request [0]
變數 Type, url/file, async(true)

* xhr.onprogress() [3]
用於 loading動畫、讀取時想作的事

* xhr.onerror
傳遞錯誤訊息

### ready State Values
0. request not init
1. server connection established
2. request received
3. processing request
4. request finished & response is ready

## onload 與 onreadystatechange 比較
* xhr.onload()
不會檢查所有 readyState 階段，直接跳到4 
* xhr.onreadystatechange()  
會檢查所有 readyState 階段 //? 較佳

## HTTP Statuses
200/OK 403/Forbidden 404/Not Found

## xhr 文本檔案範例 & READYSTATE
```js
    let xhr = new XMLHttpRequest()
    // console.log(`READYSTATE: ${xhr.readyState}`) // 0

    xhr.open('GET', 'simpleText.txt', true)
    // console.log(`READYSTATE: ${xhr.readyState}`) // 1

    xhr.onprogress = function () {}

    xhr.onreadystatechange = function () {
      // 當狀態改變都會執行此 Function，狀態為 4 時，才進行渲染
      // console.log(`READYSTATE: ${xhr.readyState}`) // 234
      if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText)
      }else if (this.status === 404) {
        console.log('Not Found')
      }
    }
    xhr.send()
```

### xhr.onload
用 onreadystatechange 較佳
```js
  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText)
    }
  }
```