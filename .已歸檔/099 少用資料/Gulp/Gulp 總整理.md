# Gulp整理

# Gulp 環境
> npm install -g gulp
> npm install (依package.json)

# .vscode / tasks.json
//* 設置快捷鍵建立task Ctrl+Shift+B 執行
```json
{
    "version": "2.0.0",
    "command": "gulp",
    "tasks": [
        {
            "label": "default",
            "type": "shell",
            "problemMatcher": [],
            "isBackground": true,
            "group": {
                "kind": "build",
                "isDefault": true
            }
        }
    ]
}
```

# 先關閉語法
//? cleanCSS 查看比對編譯 CSS結果較易
```js
.pipe(pug()) //壓縮版
.pipe(pug({ pretty: true })) // 未壓縮版
```
//* 日常編譯版本 語言/圖壓縮/監聽

//* 最終優化處理 ALL壓縮/清空不一致/

# Gulp 語法
```js
const gulp = require('gulp') //其他插件同理匯入
const port = 3000 ///設置browser-sync port
//* 設置執行任務
gulp.task('default', ['sass', 'browser-sync'])
```

```js
//* 文檔路徑設定
const pugPath = { src: './src/views/*.pug', ignore: '!*src/views/_*.pug', dest: './public' }

gulp.task('sass', () => gulp.src(sassPath.src)
    .pipe(gulpPlumber())  //* 偵錯用過關才進行編譯
    .pipe(sass()) //* 編譯本體
    .pipe(autoprefixer({ //* 插件各自語法有別
    browsers: ['last 5 versions'],
    }))
    .pipe(gulp.dest(sassPath.dest)) //* 設置輸入輸出
    .pipe(browserSync.stream())) //* 監聽改動
```
# 未測試插件
> postcss
> gzip

# Stylus篇
```js
"nib": "^1.1.2",
"rupture": "^0.7.1",
"typographic": "^3.0.0"

const nib = require('nib')
const typographic = require('typographic')
const rupture = require('rupture')
```

# Gulp 插件

//* 功能型
> browser-sync
> del (清空文件夾，達檔案一致用)
> notify (提示完成)
> plumber (偵錯用)
> imagemin (壓縮圖檔)
> pug-lint (pug 偵錯用)

//* CSS
> clean-css 壓縮+編譯
> autoprefixer

//* JS
> concat 合併多個檔案
> uglifyes 
////gulp-uglify 已棄用
> babel //! 未裝過

# 插件語法篇

//* browser-sync Live ReLoad
```js
gulp.task('browser-sync', () => {
    browserSync.init({
        port,
        server: pugPath.dest,
    })
    //* 前為 資源檔案路徑 後為任務名稱
    gulp.watch(sassPath.src, ['sass'])
    // ! 監聽html檔有改變即刷新
  gulp.watch(`${pugPath.dest}/*.html`).on('change', browserSync.reload)
})
```

//* Del Cleaning Folder

```js
gulp.task('clean', () =>
  //* 清空public / img下所有文件 (刪除掉未使用的)
  del([`${imgPath.dest}/**/*`])) 
```

```js
const browserSync = require('browser-sync').create()
const gulpPlumber = require('gulp-plumber')
// .pipe(gulpPlumber()) // gulp-plumber handle error
const gulpNotify = require('gulp-notify')
// setting notify message
// .pipe(gulpNotify("notify")) 
const cleanCSS = require('gulp-clean-css')
// .pipe(cleanCSS({compatibility: 'ie8'}))  
const autoprefixer = require('gulp-autoprefixer')
// .pipe(autoprefixer({
//     browsers: ['last 2 versions'],
//     cascade: false
// }))
const concat = require('gulp-concat')
// .pipe(concat('main.js'))  //put this line before uglify
const puglint = require('gulp-pug-lint')
// .pipe(puglint())
```