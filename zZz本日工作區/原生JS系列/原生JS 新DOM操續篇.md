# 新版 DOM操作 更易
> https://goo.gl/7U1fW3
//? 以下使用皆需注意支援度!!!

# 舊瀏覽器 解法
//? 使用 polyfill.io
> https://polyfill.io/v2/docs/

> Polyfill.io 會根據 User-agent 判斷使用者的瀏覽器種類和版本，自動回傳相對應的向下相容實作。
```pug
    <script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
    script(src="https://cdn.polyfill.io/v2/polyfill.min.js")
```


# 一次性 addEventListener
//? elem.addEv('click',Func,{once: true})

# NodeList 可用 forEach()
//* 需注意他還是NodeList 非 Array
```js
    doqsAll('li').forEach((li) => /*do stuff*/)
```

//* old method
```js
    let arr = [].slice.all(doqsAll('li'))
    [].forEach.call(nodeList, function()item){ /* */}
    Array.form(doqs('li')).forEach((li)=>{
        /**/
    })
```




# DOM Manipulation Convenience Methods
//* 免參照父
```js
    elem.remove()

    //* 插入父元素底下
    ul.prepend(newElem) //* 成為首個子

    //* 將 新建元素 插入 已存在元素 之前
    existElem.before(newElem)

    existElem.replaceWith(newElem) 

    //* 尋找最接近的元素
    elem.closest('div')
```
