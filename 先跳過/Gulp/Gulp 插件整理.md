# Gulp 插件整理

//! 使用SASS/Stylus於VSCode要先行安裝該語言插件

```json
    // 必備插件 
    "browser-sync": "^2.21.0", // 瀏覽器監聽預覽
    "del": "^3.0.0",  // 刪除資料夾所有內容，避免編譯後檔案數量不一致
    "gulp": "^3.9.1",

    // ESLint 相關  (使用無angular的)
    "eslint": "^4.15.0",
    "eslint-config-airbnb-base": "^12.1.0",
    "eslint-plugin-import": "^2.8.0",

    // HTML相關
    "gulp-pug": "^3.3.0",
    "gulp-pug-lint": "^0.1.6",

    // CSS相關
    "gulp-clean-css": "^3.9.0",  //CSS壓縮

    "gulp-autoprefixer": "^4.0.0",  //依需求
    "gulp-postcss": "^7.0.0",       //依需求

    // SASS相關
    "gulp-sass": "^3.1.0",

    // Stylus
    "gulp-stylus": "^2.6.0",

    "nib": "^1.1.2",
    "rupture": "^0.7.1",
    "typographic": "^3.0.0"

    // JS相關
    "gulp-concat": "^2.6.1",
    "gulp-uglify": "^3.0.0",
    "gulp-uglifyes": "^0.1.2",

    // Typescript
    "typescript": "^2.6.2",
    "gulp-typescript": "^3.2.3",

    // 圖片壓縮
    "gulp-imagemin": "^4.0.0",

    // 功能性
    "gulp-notify": "^3.0.0",   //桌面提示編譯完成
    "gulp-plumber": "^1.1.0",  //例外處理用

    // 未使用
    "gulp-gzip": "^1.4.0",  //測試失敗
    "htmlhint": "^0.9.13",  //用puglint取代
```