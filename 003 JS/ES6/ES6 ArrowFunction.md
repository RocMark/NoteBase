# Arrow Function
//* 常用於不需要命名的Function
//* Why use ArrowFunction
* Small
* Inline
* Single-Purpose

//!重要範例 必看 結合array處理
# 完整版
//? 可以再把可以重複利用的判斷式抽出
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

# 架構與呼叫
```js
const dragonEvents = [
    { type: 'att', value: 12, target: 'player-dorkman' },
    { type: 'yawn', value: 40 },
    { type: 'eat', target: 'horse' },
    { type: 'att', value: 23, target: 'player-tim' },
    { type: 'att', value: 12, target: 'player-dorkman' },
]
console.log(totalDmgOnDorkman)
```

# 基礎版
```js
const totalDmgOnDorkman = dragonEvents
    // * 可以將 filter合併
    // .filter(event => event.type === 'att')
    // .filter(event => event.target === 'player-dorkman')
    .fiter(event => event.type === 'att' && event.type === 'player-dorkman')
    .map(event => event.value)
    .reduce((prev, value) => (prev || 0) + value)
```

# 可以交由 ESLint改寫
```js
//! Best
const totalDmgOnDorkman = dragonEvents
    .filter(event => event.type === 'att')
//* 原始
const totalDmgOnDorkman = dragonEvents
    .filter(function(event) {
        return  event.type ==='att' 
    })
//* 進階
const totalDmgOnDorkman = dragonEvents
    .filter((event) => {
        return  event.type ==='att' 
    })
//* 進階2
const totalDmgOnDorkman = dragonEvents
    .filter((event) => event.type ==='att')
```







* 括號 / 大括號 / return皆為 optional
```js
x = > x * 2 //等同於下列
function(x){
    return x * 2 
}
```
