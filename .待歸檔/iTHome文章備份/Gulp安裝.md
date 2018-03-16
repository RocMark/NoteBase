[前篇VS CODE環境架設](https://ithelp.ithome.com.tw/articles/10192827)

**Gulp全域安裝討論**

建議配置:
* 安裝gulp-cli 即可在全域下gulp指令
* 如果不在終端機使用 gulp指令可以不須安裝 [相關使用說明](https://tangshuang.gitbooks.io/gulp-chinese-guide/content/cli/)
* 但是仍需要專案中有安裝gulp
```
npm install -g gulp-cli
npm install --save-dev gulp
```
* 為何不全域安裝gulp，原因為全域安裝後仍無法在命令列使用。
* Why無法使用?
* 因gulp是個項目依賴的package，需要用require引入才可使用。
* 而require 所呼叫的模組需要在專案中node_mudules中也有安裝才可以使用
* gulp相關套件同理
* 因此無全域安裝gulp的需要，以及避免錯誤

* 官方這樣設計是為了避免全域都使用同一個版本，而使版本控制難度提高。

**上述如有錯誤之處 歡迎提出 僅個人小菜雞google整理之結果**

[gulp中文文檔](https://tangshuang.gitbooks.io/gulp-chinese-guide/content/start/)
[gulp和gulp-cli的區別](https://feizhaojun.com/?p=570)
[參考文](https://www.jianshu.com/p/27ad5ebbd13d)

**Gulp 基礎語法篇**  [U質教學文](http://javascript.ruanyifeng.com/tool/gulp.html)
* gulp.src    檔案來源
* gulp.dest   檔案目的地
* gulp.task   任務名稱
* gulp.watch  監聽
* .pipe 用來串接個流程

* dest 可以多次寫.pipe(gulp.dest('路徑')) 輸出到不同的目錄

**範例** gulp-sass 搭配 browser-sync 作監聽
//請確認 VS Code有安裝 SASS插件
```
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// 宣告路徑易於管理用
const sassPath = {src:'./src/sass/*.sass',dest:'./public/css'}
// 用來指定監聽html改動用 
const pugPath = {src:'./src/views/*.pug',dest:'./public'}

// task 'sass' 為指令名稱 最下面呼叫時會用到
gulp.task('sass', function() {
    // 檔案來源
    gulp.src(sassPath.src)
        .pipe(sass())
        // 檔案目的
        .pipe(gulp.dest(sassPath.dest))
        // 此行為browser-sync用
        .pipe(browserSync.stream());
});

//靜態頁面html即時預覽
gulp.task('browser-sync', function() {
    browserSync.init({
        ////指定啟動根目錄
        server: pugPath.dest
    });
    gulp.watch(sassPath.src, ['sass']);
    //監聽pug文件變化 重整瀏覽器
    gulp.watch(pugPath.dest+'/*.html').on("change", browserSync.reload);
});

//定義默認任務（dafault） 命令
// Ctrl+Shift+B 或 gulp default 或 gulp 即會執行sass 和 browser-sync 
// 就不需要一個task 一個task輸出
gulp.task('default',['sass','browser-sync']); 
```

// 切記切記 運行 npm start
如果Browser Sync有連接成功的話，
視窗右上角會出現『Connected to Browser Sync』的字樣

特別注意，一定要有body才會被偵測到，
所以在測試的時候不要忘記加上body唷!


**PUG 篇**
* // 切記切記切記 記得去改 views 裡的檔名 jade => pug
* 修改package.json 加入以下兩行
```
  "main": "gulpfile.js",
  "keywords":["gulp"],
```

**package.json 補充** (套件版本)
* npm update =>  更新package
// 使用npm update 要小心，可能package有重大改變，會影響造成專案出錯
```
"express": "2.5.1"       => 只能使用2.5.1的版本
"express": "*"      => 使用最新版本(每次更新都會檢查是否有新版本)
"express": ">= 2.5.1"    => 所有比2.5.1還新的版本
"express": "~2.5.1"      => 所有比2.5.1還新的2.5.x的版本，但不會到2.6.0
"express": "^2.5.1"      => 所有比2.5.1還新的2.x.x的版本，但不會到3.0.0
```

**Gulp 插件推薦**
* gulp-uglify：JavaScript 混淆與檔案壓縮
* gulp-imagemin：自動壓縮圖檔，支援 PNG, JPEG, GIF 和 SVG
* gulp-plumber 錯誤發生後，程式更改完自動進入watch狀態
* gulp-notify：專案較大，會提醒已compile完
* gulp-clean-css ：minify css檔
* gulp-stylus
* gulp-concat：合併多個檔案用
* gulp-htmlmin：minify html檔

**參考資料**
* [Gulp學習筆記](https://kejyuntw.gitbooks.io/gulp-learning-notes/plguins/Tool/Plugins-Tool-browser-sync.html)
* [Gulpfile.js 寫法很漂亮](http://blog.weisite.com.tw/%E5%B7%A5%E5%85%B7%E5%88%86%E4%BA%AB/Gulp%E5%BB%BA%E7%AB%8B%E8%87%AA%E5%B7%B1%E7%9A%84%E8%87%AA%E5%8B%95%E5%8C%96%E7%A8%8B%E5%BA%8F/)
* [npm 基礎介紹](https://dotblogs.com.tw/lapland/2015/07/30/153008)
* [Gulp API教學&排除文件](http://www.siyuweb.com/gulp/3207.html)
* [Gulp Beginner](https://github.com/twtrubiks/Gulp-Beginners-Guide)