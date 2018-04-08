# NPM Crash Course

# Note
//! 取得全域包裹安裝路徑
npm root -g 

//* 取得當前安裝的包裹列表
npm list --depth 0

# Version
npm -v (縮寫只需要一個-)
npm --version (非縮寫需要兩個--)

# Package.json File
Manifest file with app info
Lists dependencies(name & version)
Specify if versions should be updated
Create NPM scripts

# 建立 Package.json File
npm init

# 快速建立 Package.json File
> 不需要回答所有問題 可只修改需要的部分
npm config set init-author-name "Brad"
npm set init-license : MIT

npm init -y 
npm init --yes  

//* config可省略
npm config get init-license
npm config delete init-license

# 加入相依清單 / dev相依清單

//* 發布時也需要的部分
npm install lodash --save

//! 只進行安裝相依清單
npm install --production 

//* 只用於開發的套件
npm install gulp gulp-sass --save-dev


# 安裝 lodash
npm install lodash --save

//! 要使用 NPM插件 需要於 JS中 require
> index.js
```js
    const _ = require('lodash')
    const numbers = [33, 45, 1, 89, 2]
    _.each(numbers, (number, i) => {
        console.log(number)
    })
```

# .gitignore 檔案
```
    # ignore node_modules
    /node_modules
    /public 
```

# 移除套件
//! --save-dev 要加才會移出該清單
//* 皆同效果
npm uninstall gulp-sass --save-dev
npm remove gulp --save-dev
npm rm gulp --save-dev

# 安裝特定Version
npm install lodash 4.17.3 --save

# 更新
npm update lodash

# Version Number 意義
8.2.6

8 => Major Version
Major changes Breaks the API

2 => Minor Version
New features doesn't Break the API

6 => Patch (Bug Fixes)

# Package.json 
//* 表最新的Version (不推薦使用)
> "*"
//* Exact Version
> "4.17.4" 
//? ^表4.XX.XX 中最新的Minor Version
> "^4.17.4" 
//* ~表4.XX.XX 中最新的Patch
> "~4.17.4" 

# Global Modules
npm install -g nodemon

npm remove -g nodemon

//! 取得全域包裹安裝路徑
npm root -g 

# List Out 當前安裝的包裹
//* 會顯示出所有相依套件 (不佳)
npm list 

//? 取得當前安裝的包裹列表 (最清楚的)
npm list --depth 0

//*  0 & 1 代表相依層級
npm list --depth 1