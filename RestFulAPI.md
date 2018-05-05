# RestFul API / JSON Crash 筆記
> https://www.youtube.com/watch?v=Q-BpqyOT3a8
> https://www.youtube.com/watch?v=1zkgdLZEdwM


# What is API
> Application Program Interface

# What is REST
> Representational State Transfer

架構風格用於連網的APP
Relies on a stateless, client-server protocol (HTTP)

# HTTP Methods

* GET 取得資料
> https://site.com/api/users/1
* POST 傳送資料
> https://site.com/api/users
* PUT 更新資料(通常會有id當指定)
> https://site.com/api/users/update/1
* PATCH 更新部份資料
* DELETE 刪除
> https://site.com/api/users/delete/1

# Authentication
OAUTH-TOKEN 驗證用
> https://api.github.com/?access_token=OAUTH-TOKEN

> https://api.github.com/users/who?clientid=xxxx&clientpwd==yyy

# Github API v3
直接利用 POSTMAN即可
GET: https://api.github.com/users/RocMark

* 建立 OAuth (解除要求資料限制)
https://github.com/settings/applications/new
將資料改成 OAuth給予的Key
```
    https://api.github.com/users/whatever?client_id=xxxx&client_secret=yyyy
```

# JSON (JSObject Notation)
> lightweight data-interchange format
> 常用於 AJAX
Syntax {"name":"Brad"}

# 原始 HTTPS
```js
    let xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById('demo').innerHTML = xhttp.readyState
        }
    }
    xhttp.open('GET', 'filename', true)
    xhttp.send()
```

# CORS 
使用 live-server 建立伺服器
npm install -g live-server
live-server即可

# JSON-Server
npm init
npm install -g json-server
json-server --watch db.json

* 注意 db.json最外圍需要是 object


* 修改 package.json
Ctrl+Shift+B 啟動

npm run json:server 啟動也可
```json
    "scripts": {
        "json:server":"json-server --watch db.json"
    },
```

# JSON Server操作
~/users/1     //* 要設至id才可用此種方式取得
~/company/1

//! 每頁兩頁 顯示第二頁 (即第三&四筆資料)
~/users1?_page=2&_limit=2

//? Sorting
順序依據 A-Z 0-9
~/_sort=name&_order=asc

//* Range
大於等於30 小於等於40
~/users?age_gte=30&age_lte=40

//* Full Text Search
~/users?q=Lara

# with POSTMAN

POST / 選擇 Body raw 
//! 切記要選資料型別為JSON
不需要建立id 會自動產生

DELETE 直接指定ID即可
http://localhost:3000/users/10 