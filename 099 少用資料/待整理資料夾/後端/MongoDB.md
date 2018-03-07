# MongoDB

## 待整理

# Mongo 介紹
- [MongoDB](#mongodb)
    - [待整理](#%E5%BE%85%E6%95%B4%E7%90%86)
- [Mongo 介紹](#mongo-%E4%BB%8B%E7%B4%B9)
- [BSON](#bson)
- [Mongo操作](#mongo%E6%93%8D%E4%BD%9C)
- [mongoose](#mongoose)

# BSON
* BSON 二進制形式的存儲格式，具輕量、高效，可以有效描述非結構化數據
* JSON格式的擴展，JSON對於浮點、日期、特殊類型較無法滿足需求
* BSON 增加JSON數據類型，並轉換成二進制碼

# Mongo操作
* 環境變數設置
```
// ? 加入快捷 桌面/電腦右建內容/變更設定-進階/環境變數/path
// ? path編輯加入 , mongo/bin目錄位址
```
// ! 必要開啟mongod，否則連線失敗

# mongoose
* https://www.youtube.com/watch?v=cVYQEvP-_PA
* Mongo 不須要在資料庫設定Schema
* Mongo 提供在APP層即設定Schema的功能
```
npm install --save mongoose
const mongoose =require('mongoose')
mongoose.connect('mongodb://localhost/RocMarkBlog')
let db = mongoose.connection
```