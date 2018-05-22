# Bootstrap Gulp

Bootstrap / Bower / Sass / Gulp

## 範例碼
https://goo.gl/QZxDtF

## 指令
npm install 
bower install 
gulp

## 流程
1. Sass 載入 bower_components 內的 bootstrap
2. 讀取 all.scss & variable 的設定
3. Sass 編譯
4. 額外的 PostCSS (autoprefixer)
5. 啟動其他服務 (web server, ejs...)