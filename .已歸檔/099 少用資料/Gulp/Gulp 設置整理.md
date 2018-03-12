# Gulp 檔案設置

# 必要安裝
//! Gulp 需要在全域&專案中皆要安裝才可使用
//* 使用SASS/Stylus於VSCode要先行安裝該語言插件
npm install -g gulp

#.vscode 資料夾
設置快捷鍵啟動Gulp程序

# Package.json
記錄所有需要的Gulp插件
```json
"main": "gulpfile.js",
"keywords": [
    "gulp"
],
"scripts": {
    "start": "gulp"
},
```

```json
// 此放執行專案也需要的插件
"dependencies": {}, 
// 此放開發專案需要的插件 Ex:Gulp / browser-sync
"devDependencies": {}
```


# gulpfile.js
主要設定檔於基礎語法篇介紹