# Handlebars環境

npm install handlebars handlebars-loader path --save -dev

# webpack.config.js
var path = require("path");

module.exports = {
    entry: "./js/main.js",
    output:{
        path: "./js",
        filename: "main-bundled.js"
    },
    resolve:{
        fallback: path.join(__dirname, "js/helpers")
    },
    module: {
        loaders:[
            {test: /\.hbs$/,loader: "handlebars-loader"}
        ]
    }
};

# 建立 ../js/myTemplate.hbs
//? 將Template String 貼入此
//! 注意 如果有引用到Function需要加上 $
Ex: {{$calAge birthYear}}

# main.js 設定
let myTemplate = require("./myTemplate.hbs")

# 改寫內容
function createHTML(petsData){
    let petsContainer = document.getElementById('petsContainer')
    petsContainer.innerHTML = myTemplate(petsData)
}

# Helpers js/helpers/calAge
webpack.config.js 中 resolve的路徑
```js
module.exports = function(birthYear){
    let age = new Date().getFullYear() - birthYear
    if (age > 0){
        return age + "years old"
    }else{
        return "Less than a year old"
    }
}
```

# Run webpack 
會創造一個較 main-bundled.js
//! 這是唯一個需要在 HTML 中 include的

```pug
<script src="js/main-bundled.js"></script>

script(src="js/main-bundled.js")
```