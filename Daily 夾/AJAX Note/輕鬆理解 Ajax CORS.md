# 輕鬆理解 Ajax CORS
https://goo.gl/VuRTX6

## AJAX
//? 同步 (排隊)
執行到某行，會等此行執行完畢才執行下一行。

//* 非同步 (點餐後滑手機)
開始執行後，不等結果回來就繼續下一行。
用於前方資源要耗時，避免頁面Lock Down

//! 若後方Function，必須使用回傳結果，則需透過下列方式確保
callBackFunc / Promise/ async / await

## XMLHttpRequest 物件
```js
    function makeARequest() {
        // 建立一個新 XHR Object
        var xhr = new XMLHttpRequest();

        // 用.open() method 開始一個 request
        // 必須傳入兩個參數，第一個是 HTTP method，第二個是 request 要傳向的目的地 url 
        // 也就是放你得到的 api url 的地方
        xhr.open("GET", "http://www.example.org/example.txt");

        // 當 request 成功完成之後，會執行的 callback
        xhr.onload() = function () {
            // Do something with the retrieved data
            if (request.status >= 200 && request.status < 400) {
                
            }
        };

        // 送出 request
        xhr.send();
    }
```

## Same Origin Policy 同源政策
基於安全性考量，若此網站與你要呼叫的API網站不同源時，
會送出 Request，對方也會收到 Request，但不會回傳結果 。
* 不同源
Domain / http / https / port 不同

//! Error Msg
```
    XMLHttpRequest cannot load 
    http://odata.tn.edu.tw/ebookapi/api/getOdataJH/?level=all. 
    No 'Access-Control-Allow-Origin' header is present on the 
    requested resource. Origin 'null' is therefore not allowed access.
```

## CORS 跨來源資源共用 (Cross-Origin Resource Sharing)
不同源傳輸資料的規範。
如果想開啟跨來源 HTTP 請求的話，Server 必須在 Response 的 Header 裡面加上Access-Control-Allow-Origin

### CORS Request 2種類
* 簡單請求
你沒有加任何自定義的 Header，而且又是 GET 即是。

* 加入自定義 Header
會多產生一個 Request 稱 Preflight Request (預檢請求) [OPTIONS 請求]

因為非簡單請求，可能會帶有一些使用者資料，因此會先去確認後續的請求能否送出。
若 Preflight Request 回過， Request 即不會送出。

### Preflight Request 用途
Ex: DELETE 發送 Request，會先執行 Preflight Request，來確認是否執行

## JSONP (JSON with Padding) 
//! 優先考慮使用 CORS

跨來源請求: CORS 外的另一種方法
Ex: 引用 CDN, Google Analytics

JSONP 就是利用<script>的這個特性來達成跨來源請求的。

利用<script>裡面放資料，透過指定好的 function 把資料給帶回去。

JSONP 的缺點就是你要帶的那些參數永遠都只能用附加在網址上的方式（GET）帶過去，沒辦法用 POST。