# Check Falsy

排除為 Falsy的項目

Falsy: null,undefined,'',0,false,NaN

# Stack OverFlow 解
> https://goo.gl/vVWN64
```js
    function bouncer(arr) {
        // return arr.filter(Boolean)
        return arr.filter(v => !!v)

        //? ESLint 不建議使用 new Boolean 改用 !! 即可
        // return arr.filter(v => new Boolean(v))
    }
    console.log(bouncer([7, 'ate', '', false, 9]))
```