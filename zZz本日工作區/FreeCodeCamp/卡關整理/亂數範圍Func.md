# 亂數範圍 Function
> 給與二整數，隨機產生整數亂數於該區間

```js
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * ((myMax - myMin) + 1)) + myMin
}
console.log(randomRange(5, 15))
```

1. Math.floor 確保輸出為 整數
2. +myMin 確保最小數為5 
> Math.floor 那串計算出的結果 可能為 0，
> random 極小 floor之後為0

3. Math.random() * (myMax - myMin + 1)

