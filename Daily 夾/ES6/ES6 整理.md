# ES6整理
> 內容 TemplateString / ArrowFunc / Class / 解構

# Arrow Function (匿名函式)
> https://www.youtube.com/watch?v=6sQDTgOqh-I

> Why use?  Short / Inline / Single-Purpose
> 可省 Function字 / 單行 return 可不用大括號 / 單個變數傳入 可不用小括號
//* .filter(event => event.type === 'att')

//! 使用this更方便
> ES6前需要用 bind() / apply()

# 完整版 範例
> 可以再把可以重複利用的判斷式抽出
```js
const reduceTotal = (prev, x) => (prev || 0) + x
const isAttack = (e => e.type === 'att')
const totalDmgOnDorkman = dragonEvents
    // * 可以將 filter合併
    .filter(isAttack)
    .filter(e => e.target === 'player-dorkman')
    // .fiter(e => e.type === 'att' && e.type === 'player-dorkman')
    .map(e => e.value)
    .reduce(reduceTotal)
```

# 解構
```js
let bear = 'foo'
let says = 'yo'
// 原始方法
// let zoo = {bear: bear, says:says}
// object short-hand
let zoo = { bear, says }


let foo = { type: 'faz', many: 2 }
let { type, many } = foo
console.log(many, type)

function bear(type = 'foo') {
    // 此行改進 傳入變數即可
    // type = type || 'foo'
    console.log(type)
}

//! 前面加的 ... 可以用來表示這個function可以接收多個參數
function bears(...types) {
    console.log(types)
    
}
bears('polar', 'foo', 'fav')
```