# Parcel 介紹
> https://parceljs.org/
> zero configuration
> https://www.youtube.com/watch?v=DYZTFooDB24

# 環境
npm install -g parcel-bundler
npm init

# 運行
parcel index.html
//? Browser Sync
> http://localhost:1234/ 

# 文件架構
> dist 為 compile後的文件夾

> dist / parcelproject.js
> 內容會被bundle，這支JS

# SASS
npm install node-sass

# Post CSS
npm install autoprefiexer
建立 .postcssrc
編譯即可
```json
    {
        "plugins":{
            "autoprefixer": true
        }
    }
```

# output data form txt file
> npm file module (不需額外裝)
```js
    import fs from 'fs'
    const copy = fs.readFileSync(__dirname + '/copyright.txt','utf8')
```

# indexJS
//* import module & set then
```js
    import { jokes } from './jokes'
    jokes.getOne()
        .then(joke => {
            document.querySelector('#joke').innerHTML = joke
        })
```
# moduleJS
//? fetch API + Promise
```js
    export const jokes = {
        getOne: function () {
            return new Promise((resolve, reject) => {
                fetch('http://api.icndb.com/jokes/random')
                .then(res => res.json())
                .then(data => data.value.joke) //即可
                // .then(data => {resolve(data.value.joke)})
            })
        }
    }
```