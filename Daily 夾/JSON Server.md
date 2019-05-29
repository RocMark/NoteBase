# JSON Server 教學
> http://oomusou.io/json-server/intro/
> https://www.youtube.com/watch?v=uFKa4xrc42c

使用靜態JSON 自建可操作API
提供 RESTFul API Server
可以接 HTTPS Request

# JSON Generator
//* JSON 假資料產生器
https://www.json-generator.com/

# JSON Placeholder
//* JSON假資料 API
> https://jsonplaceholder.typicode.com/
> 此網站就是以 JSON Server架設的，但JSON Server實務上彈性更高

# 使用
npm install -g json-server
json-server --watch db.json

//* 僅做為測試使用，不可做為實際上線 Why?
1. CORS全開 (跨來源資源共用)
Cross-origin resource sharing
2. 無權限管理

# db.json 檔案位置
於下指令的所在位置

# with POST MAN 做測試
GET 取得 / POST 上傳 / DELETE 刪除
PATCH 更新部分資源 / PUT 更新完整資源

# 使用JSON Server 注意事項
//* 只接受JSON格式 (XML不支援)

//? 記得備份一下原始JSON，因為所有操作都會自動回存至 db.json

//! 每筆資料都會有個id屬性，而且建立後就無法更新此屬性

# SnapShot功能
//* 在CLI中 輸入s 按下Enter可儲存當前資料庫快照
> 就會建立一個 當前狀態的json檔案備份

# db.json 格式
//* 注意格式 第一層必需為 {} 物件型態
//* "posts" 為路徑資料夾名，其下為資料
``` json 
{
    "posts": [
        {
        "id": 1,
        "title": "json-server",
        "author": "typicode"
        }
    ],
    "comments": [
        {
        "id": 1,
        "body": "some comment",
        "postId": 1
        }
    ],
    "profile": {
        "name": "typicode"
    }
}
```

# 自定新路由  (Routes)
1. 新增 routes.json
```json
{
    "新的路徑": "預設的路徑",
    "/api/posts":"/posts",
    "/api/posts/:id":"/posts/id",

    "/blog/posts/1/show":"/posts/1",
    //! 搜尋類別
    "/blog/:category": "/posts?category=:category"
}
```
//* 使用範例
/blog/git  等同於  /post?category=git"

2. 套用新Route (--routes)
json-server db.json --routes routes.json



# 進階技巧

# WebServer 模擬
建立public資料夾，將所有靜態檔案至入即可
進入點為 index.html

# 更換不同 Port
json-server --watch db.json --port 3004

# 資料操作方式

# 全文檢索 (部分比對)
?q 表搜尋後面的字串
localhost:3000/books?q=Git

# 資料篩選 (完整比對)
> 必須完全符合
localhost:3000/books?author=Will+Huang
localhost:3000/comments?author.name=Will

# 資料分頁
/books?_page=3
/books?_page=3&_limit=10

/books?_start=21&_end=30

/books?_start=21&_limit=10

# 資料排序
/books?_sort=rating&_order=DESC

# 綜合條件搜尋
/data?name_like=o&gender=male&company_like=SNACK

# 常見篩選運算子

//? _like 相似於
> /posts?author_like=will

//* _gte 大於等於
> /books?rating_gte=4
//* _lte 小於等於
> /books?id_lte=99
//* _ne  部等於 
> /books?id_ne=1

# 快速建立大量假資料
- 建立index.js
- 使用 json-server index.js
```js
    module.export = () => {
        const data = {
            users: [],
        }
        // Create 1000 users
        for (let i = 0; i < 1000; i += 1) {
            data.users.push({
                id: i,
                name: `user${i}`,
            })
        }
        return data
    }
```

# 載入外部 JSON資料來源
json-server url

# 變更預設 "id" 屬性名稱
json-server --id _id --watch db.json

//* _id 為自定名稱

# 僅提供 GET方法 (唯讀的API存取)
//* readonly
json-server --ro --watch db.json

# 模擬較慢的API回應時間 (延遲nms後才回應)
json-server --delay 500 db.json