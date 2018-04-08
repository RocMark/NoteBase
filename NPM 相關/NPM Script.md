# NPM Script
> https://www.youtube.com/watch?v=0RYETb9YVrk

# npm script best 範例見圖

# 使用
npm run test

//* test1 只是適用於較小的Project
//? test2 Better Practice
//! test3 Best Practice  (npm-run-all)
//* test4 Optional
```json
    {
        "scripts": {
            //// "test1": "eslint ./src/**/*.js && jscs ./src/**/*.js && karma start",
            //// "test2": "npm run lint & npm run jscs & npm run unit",
            "test3": "npm-run-all lint jscs unit",
            "lint": "eslint ./src/**/*.js",
            "jscs": "jscs ./src/**/*.js",
            "unit": "karma start",

            "test4": "npm-run-all test:*",
            "test:lint": "eslint ./src/**/*.js",
            "test:jscs": "jscs ./src/**/*.js",
            "test:unit": "karma start",
        }
    }
```
//// 不需要呼叫bin完整路徑
////./node_modules/.bin/foo (x)

# Why npm scripts 
npm scripts = shell + node + npm
1. 結合終端機 & node套件指令
2. no plugin
3. Easy to setUp
4. Easy to Work with people

# Browserify
"js": "browserify --debug -t reactify ./entry.js"

# Webpack
"build:js": "webpack",
"watch:js" "npm run build:js -- --watch"

# other example
```json
    {
        "script": {
            "css": "node-sass ./input.sass ./output.css",
            "lint": "eslint src/**/*.js*",
            "dist": "babel src --out-dir dist",
            "server": "live-server --port=4240"
        }
    }
```
# npm lifeCycle
npm install 
npm publish
npm version

```json
    {
        "scripts": {
            "preinstall": "installing",
            "postinstall": "npm run build"
        }
    }
```

