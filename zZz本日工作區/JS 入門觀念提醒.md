# JS 入門觀念提醒

* script / css 位置解釋

* what 修改內容 
* when 行位置
* who  #container (window,document)




> function => method
> property => Ex: innerHTML

使用 doqs較佳 (觀看code時較能快速清楚了解其為 id/class)
jq 使用 .on('click',func) 較佳

# when 取變數
1. 很常用 2. 很常改

# Attribute vs Property
> https://www.youtube.com/watch?v=Ut-ATm23_Pg

* HTML Attribute
由HTML定義，初始化DOM Property，初始化完成後功能即結束。
attribute value can't change

Ex: input#inputId(type="text" value="Tom")
value="Tom" (attribute初始化設定 DOM 的 value)

//? inputId.getAttribute('value') // Tom 
> 即使 Input內容修改 getAttribute仍不變

* DOM Property Ex: disabled
由DOM定義，property value can change
//* inputId.value 會因Input內容改變

# SEO
google 會等JS執行過一次，但仍使用Server Render較佳

# Error Msg
not defined 未定義該變數
undefined 有可能是程式碼順序問題(hoisting)

# IIFE
```js
    (function () {
        
    }())
    {} // ES6 block Scope 可取代
```

# 判斷式
最小的範圍先判斷
//* 縮寫
```js
    //? 問號代表if   冒號代表 else
    let dir = (x > 100) ? 1 : -1

    let today = 7

    //*  ESLint 建議 用到 else if 還是拆開寫較佳
    let eat = (today === 3) ? 'A' : (today % 2 === 0) ? 'B' : 'C'
    console.log(eat)
```

# while 迴圈
用於不定次數的迴圈
```js
    let i = 0
    while (i < 0.5) {
        i = Math.random()
        console.log(i)
    }
```

# 前置 後置式
i++ => 先回給你i 再作+的動作
++i => 先作+的動作，再回給你已加過的值

# VS Code Snippets
//* ${1:.length}  //* placeholder
```json

	"For loop": {
		"prefix": "for",
		"body": [
			"for (let i = 0, j = $2${1:.length}; i < j; i += 1) {",
			"    $3",
			"}"
		],
	},
```