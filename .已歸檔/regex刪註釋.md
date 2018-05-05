# 用regex刪除註釋

```js
    let test = '/*test       */123'
    let result = test.replace(/^\/\*(\S+|\s)+\*\//g, '')
    console.log(result)

    //* 刪除註釋 /* */
    //\S 非空白字元 \s空白字元 
```