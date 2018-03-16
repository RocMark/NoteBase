## 序言
* [Github 位置](https://github.com/RocMark/Front-End-Gulp-Template)
* 詳細檔案內容點github看比較方便

* 還沒加上一些常用的語法mixin以及html template
* 之後會開分支繼續整理~

## Template 說明
* 用途: 前端介面開發
* 功能: 
    1. 監聽SASS/Stylus/Pug/HTML/JS
    2. 實時刷新瀏覽器
    2. 編譯PUG成HTML，可選擇壓縮或否
    3. 編譯SASS/Stylus成CSS，加入前綴與壓縮
    4. 壓縮JS檔，並合併成main.js一個檔案
    5. 壓縮圖檔，壓縮圖檔完成後會跳出CompressImg Done提示

* 註 task clean 僅設置清空圖檔資料夾，以避免public與src圖檔不一致，有需要其他的請自行新增
* gulpfile.js最下方有兩種模式可選
    1. 日常開發僅實時監聽 sass/stylus/pug
    2. 預設則為以上功能全開 (以便首次使用作功能測試)

* 文件架構
```
├── .vscode
│   └── task.json  (Short cut setup Ctrl+Shift+B)
├── public (Output-Destination) 
│   ├── css
│   ├── img
│   └── js
├── src (Input-Source)
│   ├── img
│   ├── js
│       └── main.js
│   ├── sass (Choose one,Feel free to delete)
│       └── main.sass
│   ├── stylus (Choose one,Feel free to delete)
│       └── main.styl
│   └──views
│       ├── _layout.pug
│       ├── testing.pug
│       └── index.pug
├── gulpfile.js
├── package.json
├── gitignore
└── README.md
```

## 使用篇
* 複製初始檔案夾中所有檔案
* 建議以管理員身分執行，避免安裝插件出錯
```
net user administrator /active:yes
```
* 建議加上 --no-optional 
// 避免出現以系統管理員登入且以系統管理員執行cmd也會出現的請使用run as administrator錯誤
```
npm install --save-dev --no-optional
```
* npm install
    1. npm start / 或Ctrl+Shift+B 皆可運行
    2. Good to Go!

* CheckingList 功能確認單
    1. Pug
    2. Sass/Stylus
    2. JS alert & compress
    3. Image compress [若無重新Ctrl+Shift即可]
    
* Error 可能出現的錯誤與解法
    1. Port3000 被其他占用 (更改gulpfile.js中的port setting)
    2. 上次未將node.js關閉完全 (使用系統管理員關閉)
    3. .pug .sass 有下底線前綴的檔案，如果未編譯嘗試手動刷新一次瀏覽器，之後應該就會正常了


### More Plugin Extensions Suggestion
收集一下最近看的文章的插件列表，之後再裝來玩

1. gulp-htmlmin (pug will compress in case you dont use pug)
2. gulp-jshint (I'm using ESLint VSCode plugin)
3. gulp-load-plugins 
4. gulp-babel  (ES6->ES5 Convert)
5. gulp-bump (auto update package)
6. gulp-header (adding header)
7. proxy-middleware
8. gulp-rename (Rename file after compress)
9. gulp-sourcemaps
10. gulp-webpack
11. gulp.spritesmith (generate css sprites)
12. gulp-post-css (already in package.json)