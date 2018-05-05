# 亂數範圍 Function
> 給與二整數，隨機產生整數亂數於該區間

```js
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * ((myMax - myMin) + 1)) + myMin
}
console.log(randomRange(5, 15))
```

//* 15.9999 => 捨去成 15
Math.floor(11*0.9999999 + 5) 

1. Math.floor 無條件捨去
2. +myMin 確保最小數為5 
> Math.floor 那串計算出的結果 可能為 0，
> random 極小 floor之後為0
3. Math.random() * (myMax - myMin + 1)

//* random會產生 0~1間的小數，
//! 但並不包含1
