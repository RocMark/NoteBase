# ES6 Module System
> https://www.youtube.com/watch?v=JDDn57_z5Og

//! 待重看
> https://www.youtube.com/watch?v=Gg2qpMQsvBs

#  How to fix Unexpected token import
//* Import 只有到ES6 才可使用 (需要通知 Browser 才可使用)
//* 在 script(type="module" src="./js/main.js")

# ES6 Module default function
//* import 請寫於最上方
```js
    //* default / foo.js
    //! default function  寫於最下方
    export default function foo(){}
    //* default / index.js
    import foo from './foo'
    import anyNameWillCallFoo from './foo'
```

# ES6 Module named Function 
```js
    //* named / foo.js
    export function getBreakfast(){}
    export function getLunch(){}
    export const baz = 'baz'
    export const letters = ['a','b','c']

    export default function getDinner(){}
    //* named / index.js (解構寫法)

    // 一次全部import 並叫其為 fooFolder
    //* 必須要取名
    import * as fooFolder from './foo'
    //? fooFolder.getLunch() [前墜必加]
    // .getLunch() 會取到 indexJS 中的getLunch Function

    // 選擇性逐一載入
    import {letters} from './foo'
    import {getBreakfast, getLunch} from './foo'
    // 如果該名字找不到match會找 default import
    // default Function 名字可自行任意取
    import dinnerTime, {baz, letter} from './foo'
```

# ES6 Module aliased Function (自命名Function)
> 可以用來避免 name conflicts
```js
    //* aliased / foo.js
    import {getBreakfast as MyOwnGetBF} from './foo'
```


# ES6 Module Class
```js
    class ShoppingDataType {
        constructor() {
            this.shoppingList = ['coffee', 'chicken', 'pizza']
        }
        getShoppingList() {
            return this.shoppingList.join(', ')
        }
        addItem(item) {
            this.shoppingList.push(item)
        }
    }
    //* 只能放在Top LV
    //* export 此Class 才可用於其他file
    export default ShoppingDataType 

    //* 其他File import
    import ShoppingDataType form 'libs/module'
    let shopping = new ShoppingDataType
    console.log(shopping.getShoppingList())
```