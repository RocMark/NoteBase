# OOP
> https://www.youtube.com/watch?v=VFMNc38AeZg

> 與 OOP相對的是 程序導向 (procedure programming)
//* 一件事情做完才做Next
一種整理程式碼的方式，
將資料寫於物件中(屬性)
Function也寫入物件中(行為)

# Construct JS Object with functions
建構式函數，給與新建物件其屬性

# instance 實例
myCar 為 Car 建構式的 //? instance 實例
let myCar = new Car();

# 使用 new 關鍵字 達成
1. 建立新物件
2. 將 this 綁定於該物件上

# 傳入變數 & Private 方法
```js
    let Bike = function () {
        let gear = 0
        this.setGear = function (num) {
            this.gear = num
            return this.gear
        }
        this.getGear = function () {
            return this.gear
        }
    }
    let myBike = new Bike()
```