# ES6 Destructuring 解構

> https://ithelp.ithome.com.tw/articles/10193699
//* Why Use? LessCode


```js
makeSound({
    species: 'dog',
    weight: 23,
    sound: 'woof',
})
//! Best 將 傳入物件解構寫在 傳入變數
function makeSound({ species = 'animal', sound }) {
    console.log(`${species} says ${sound}`)
}

//* 原始JS 需要多次使用物件名稱options
/*
function makeSound(options) {
    options.species = options.species || 'animal'
    console.log(`${options.species} says ${options.sound}`)
}
*/
/*
//* 原始JS 省去了物件名稱但未使用解構 (ESLint也推薦使用Destructuring)
function makeSound(options) {
    let species = options.species || 'animal'
    let sound = options.sound
    console.log(`${species} says ${sound}`)
}
*/
// ?  進階 使用解構 但可以不需要重複宣告變數
/*
function makeSound(options) {
    let { species, sound } = options
    species = species || 'animal'
    console.log(`${species} says ${sound}`)
}
*/
```

```js
let animal = {
    species: 'dog',
    weight: 12,
    sound: 'woof',
}

// 原本宣告species需要如下 species才可被當變數取用
// let species = animal.species
let { species, sound } = animal
console.log(`The ${species} Say ${sound}`)
```
