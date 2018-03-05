# ESLint 設定檔解說
//!檔名  .eslintrc.js

# eslint init 可以初始化

```json
module.exports = {
    //* 無base 為使用 angular
    "extends": "airbnb-base",
    //* 有使用的語法要加入
    "env": {
        "browser": true,
        "node": true,
        "es6": true,
        "jquery": true
    },
    //* 改變rules設定
    "rules":{
        "linebreak-style": 0,
        "no-unused-vars": 1,
    }
};
```