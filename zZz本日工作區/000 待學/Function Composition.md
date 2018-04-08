# Function Composition

//! 待補待查 (較難)
> 可看 FUNFUNFUNCTION系列

# Composition over Inheritance
Inheritance : 注重於 What they //* are
Composition : 注重於 What they //? do

# Inheritance 限制
```js
Robot
    RobotDog
        bark() //* 重複 但要創建共同Class 語意不佳
Animal poop()
    Dog bark()
    Cat meow()
```


# Composition Example
```js
    let compose = function (func1, func2) {
        return function (val) {
            return func1(func2(val))
        }
    }
    let double = function (x) { return x * 2 }
    let triple = function (x) { return x * 3 }
    let composed = compose(double, triple)
    console.log(composed(2))
```