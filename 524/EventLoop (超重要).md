# EventLoop

# JS 
* single-threaded (單線程)
* non-blocking (非阻塞)
* asynchronous (異步)
* concurrent (同時)

# V8 引擎
含有下列
* call stack (execution contexts 執行環境)
* heap (memory allocation 記憶體分配的地方)

# Browser 中的 JS 
* Call Stack (後進先出)
屬於 V8 引擎的一部分
* heap
屬於 V8 引擎的一部分，記憶體分配的地方

* Event Loop
功能: 觀看 stack & queue
若 stack 為空，將 queue 的首個項目，推入stack

* CallBack queue (先進先出)
onClick、onLoad、onDone

* Web APIs
在此處理 DOM(evtListener)、AJAX(XHR)、setTimeout
完成後才加入 CallBack Queue。

皆是 thread，因此 UI 不會被鎖住。

## Call Stack (後進先出)
one thread == one call stack == one thing at a time
一種資料結構，紀錄我們所在的環境
將新的流程 加到最上，完成後從上抽出
//! Function Call 才會加入 Call Stack
> 一般程序func~宣告 不會 
> main() 於最下方 (anonymous function)
//? 一個Function Call 內部所有事情做完才會回收掉
```js
  function multipley(a, b) { return a * b }
  function square(n) { return multipley(n, n) }

  function printSquare(n) {
    const squared = square(n)
    console.log(squared)
  }
  printSquare(4)
```
## Call Stack 
RangeError: Maximum call stack size exceeded
```js
  function foo() {
    return foo()
  }
  foo()
```

## Blocking 阻塞
what happens when things are slow
//? 當阻塞發生時，瀏覽器會鎖住UI
如下方例子，當取AJAX占用 CallStack，其他 Function無法進入，即無法執行任何動作 (會放入 callback queue中等待)，當AJAX取得資料回收後，這些程序才會加入 CallStack做執行。

//! 因此需要非同步 callbacks，來讓使用者可以操作 UI，同時繼續取得AJAX資料
//* 如果需要該份 AJAX資料才可進行，就可以用 promise來確保
```js
  // Call Stack
  => $.getSync('.//bar.com')  [foo做完，才載入此]
  => $.getSync('.//foo.com')  [等待做完，做完後回收]
  => main() 於最下方

  //* Sync 表 同步 (一個做完才做下一個)
  const foo = $.getSync('.//foo.com')
  const bar = $.getSync('.//bar.com')
  const qux = $.getSync('.//qux.com')

  console.log(foo)
  console.log(bar)
  console.log(qux)
```

## JS 異步
JS 本身是 異步的 (asynchronous)
JS runtime 一次只能處理一件事，
//! 但 瀏覽器有 Web APIs(也是thread)，所以藉由他們我們可以同時處理多件事情
setTimeout 會被加入 Web APIs

//? DOM、AJAX(XHR)、setTimeout 皆會被加入 Web APIs 去做處理，避免Call Stack阻塞
```js
  console.log('Hi')
  setTimeout(() => {
    console.log('There')
  }, 1000)
  console.log('JSConf')
  // Hi 
  // JSConf  //* 此行不會等待 setTimeout 執行完
  // There
```

## Event Loop 流程
1. 將 main() 載入 Call Stack
2. 將 log('Hey') 載入 Call Stack & 完成 POP 出
3. 將 setTimeout 加入 Call Stack
setTimeout 是由 browser提供的，而非V8引擎
4. browser 會幫你處理 setTimeout 
將 setTimeout 加入 Web APIs 區塊
5. 加入後，等同於setTimeout完成，POP出 Call Stack
6. 將 log('JSONConf') 載入CallStack & 完成POP出

7. 此個時間點，所有程序以跑完，回收掉 main()
只剩下 web APIs 中的 timer()

8. Web APIs 中的 setTimeout
> 不應該是完成就加入 CallStack，
> 因為如果完成就加入，會很隨機性的在其他程式執行的途中，執行其內容。
=> 因此我們需要 CallBack Queue
9. 當 setTimeout 完成後，會從 Web APIs 加入到 CallBack Queue 中
10. Event Loop 觀察 Stack 是否為空

11. stack 為空 將 setTimeout的內容 從 queue 中加到 stack
12. 執行後回收 (finish)

```js
  console.log('Hey')
  setTimeout(() => {
    console.log('there')
  }, 1000)
  console.log('JSConf')
```

## 重要陷阱題 setTimeout 0
0. 建立 main()
1. log('HI') 加入 stack 執行回收
2. setTime 加入 stack => timer 於 APIs 瞬間完成
3. setTime內容 加入 queue
重點: 此時 main() 還未回收掉、log('Conf')也未執行
4. setTime 從 stack中移出
5. 因此 setTime內容 會於 queue 中等待 
event loop 觀察 stack 非空 而不將其加入 stack
6. log('Conf') 加入stack、完成、回收
7. 回收 main()
8. stack 為空 才加入 setTime 內容
```js
  console.log('HI')
  setTimeout(() => {
    console.log('there')
  }, 0)
  console.log('JSONConf')
```

## 與 Click BTN 的流程
1. 將程序碼丟入 Stack => Web APIs
2. 於 Web APIs 註冊事件，並等待觸發
3. 點擊 BTN，觸發 Web APIs事件
4. 將其內容放入 Queue中
5. 當Stack為空 加入 Stack 執行
6. 執行 setTime => 丟入 APIs
7. timer() 跑完加入 queue => stack 空 => stack執行
```JS
  $.on('button', 'click', () => {
    setTimeout(() => {
      console.log('You clicked the button!')
    }, 2000)
  })
```

* 當瘋狂點擊 BTN時，會將觸發的事件內容，
放入queue中等待，等到前一個執行完才做下一個。

## AJAX
* 當有多個 AJAX Request發生，且無法預測回傳結果時間時，多個方法 進入 queue的時間點會難以控制，即執行順序也會無法控制
=> 因此我們會需要 callBack / promise 去設定他們的順序

* setTimeout 並不是保證於 1秒後執行，
而是其最小時間為 1秒
(仍須等待stack回收、空了才加入)
```js
  setTimeout(() => {
    console.log('h1')
  }, 1000)
```

## 非同步 Loop
// ? 當 Loop 中有 AJAX / setTimeout 時可確保順序正確
1. 建 asyncForEach 環境於 Stack
2. 建 arr.forEach 環境於 Stack
3. 執行第一個 setTimeout => 將其放入 Web APIs
4. setTimeout 於 Stack 回收  next setTimeout
5. 當 Web APIs 中的 setTimeout 執行完畢加入 callBack Queue
6. event loop 等待 所有 setTimeout 於 Stack中被加入到 Web APIs 以及 1. & 2.回收
7. 開始依序將 首個 setTimeout 的結果印出，以達確保 Loop的順序性
```js
  [1, 2, 3, 4].forEach((el) => {
    console.log(el) // 普通Loop 1,2,3,4
  })

  function asyncForEach(arr, cb) {
    arr.forEach(() => {
      setTimeout(cb, 0)
    })
  }
  asyncForEach([1, 2, 3, 4], (i) => {
    console.log(i)
  })
```

# 模擬 render [render queue]
//? 常會用於 太多 animation / 請求 image / scroll
使用 Loupe點 左上角的工具左邊開啟
* browser 最快的重繪速度為 16.6ms (60FPS)

* 必須等在 call Stack 清空 才可進行 render queue動作

不同於 callBack的點為，render的優先權會高於 callBack
* 每16.6ms秒 會執行一次 render queue，然後再次等待stack 清空，才可進行 render

## 首個 Loop
* Loop 預設為 sync 同步 (排隊)
因此會導致第一個Loop 會 鎖住 render queue，等同於鎖住UI
1. 建 環境
2. delay()  => 回收 delay()
4. 循環至陣列結束  [一直佔有Stack直到 Loop 結束]
//! 中間無法進行任何一次的 render queue

## 第二個 Loop
1. 第一次讀取會快速將 setTime 丟入 Web APIs 處理
2. 當全部丟入時，UI即可操作 (無code於 stack)
3. 首個 setTime 完成 且 Stack空後，開始執行
4. 重點於此
首個 setTime 丟入 Stack
=> 建 callback 環境 => 建 delay()
=> 回成後回收 delay() & callback環境
=> 進行 一次 render queue的要求  [ 因為此時Stack為空 ]
=> 丟入下一個 setTime 入 Stack
//! 在每個setTime間，可以進行一次的 render 防止鎖住UI
```js
  [1, 2, 3, 4].forEach((el) => {
    console.log('sync', el)
    delay()
  })

  function delay() {}

  function asyncForEach(arr, cb) {
    arr.forEach(() => {
      setTimeout(cb, 0)
    })
  }
  asyncForEach([1, 2, 3, 4], (i) => {
    console.log('async', i)
    delay()
  })
```

## scroll
* scroll event 很常被觸發
* 假設 每偵都會觸發 (每16ms)

當以下Code進行捲動事件時，會觸發非常多次的scroll事件
雖然不會 鎖住 Stack，但會使 callBack queue有一堆已做完的 scroll事件內容 等著被執行。

```js
  function animate() { delay() }
  function delay() {}
  $.on('document', 'scroll', animate)
```