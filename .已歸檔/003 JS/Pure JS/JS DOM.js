//* 查詢取得DOM

const oneElement = document.querySelector('#foo > div.bar')
const allElemnts = document.querySelectorAll('.bar')

//* matches() 檢查元素是否符合指定的選擇器
// oneElement.matches('div.bar') === true
// 亦可以在特定元素下繼續查詢
const btn = allElemnts.querySelector('btn[type="submit"]')

//! querySelector 不能動態更新查詢到的元素。
const elementsNew = document.querySelectorAll('div')
const elementsOld = document.getElementsByTagName('div')

// 動態插入一個新的 div
const newDiv = document.createElement('div')
document.body.appendChild(newDiv)

//! elementsOld 會拿到 newDiv；elementsNew 則否。
// elementsNew.length !== elementsOld.length
