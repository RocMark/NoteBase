# Array 復習篇
https://blog.csdn.net/u011300580/article/details/56484231

## Mutator (會改變原始值)
pop / push / shift / sort / reverse

* copyWithin
* fill
* splice //!復習!

## Accessor (不會改變原始值)
concat / join

//! lastIndexOf(elem)
取得傳入符合elem值，最後一個item的位置

* slice

* toSource
* toString
* toLocalString

## Loop 篇
//! 不要於Loop時對原陣列作更改 (可讀&維護)
filter 
reduce(從左至右)  
reduceRight(從右至左) //* 累除可能會用到
map (JSON 注意若查無該屬性 會回傳 [undefined,undefined...])

* find 找到首個符合的值 //? 代查
* findIndex
* keys
* values

* entries
* every  
* some

## Array includes()
includes() 方法會判斷陣列是否包含特定的元素，並以此來回傳 true 或 false。
```js
    const nums = [1, 5, 10]

    // ES5 作法
    // indexOf(元素,起始位置)
    //* 若有則回傳位置 0始 無則傳-1
    console.log(nums.indexOf(5, 1))

    //? includes 回傳 true / false
    console.log(nums.includes(10))
```

## Array 補充
```js
    let arr = [1, 2, 3]
    console.log(arr.indexOf(3))


    //* Array 會將 [] 中的轉成 string 
    console.log(01.toString());
    console.log(arr['1'])
    console.log(arr[01])

    let obj = {3d: '123'}
    obj['3d'] //取值
    obj.3d // Error
```