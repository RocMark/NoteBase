# await 
用意於取代掉 then & catch [可以省略不寫]
1. run() 代表非同步 Function
2. await 代表需要等待 該 非同步 Function 執行完畢
3. 等完成功後，寫入a 變數中。
4. 完成await 進入下一塊 try catch
5. 因為非同步 Function 不保證一定會正確， [參下方try]
因此需要 Error Handle 避免 JS 無法繼續執行。

* 通常會寫於將 try catch 寫於 function 內較乾淨
```js
  // a,b,c 的值 要等待 run 執行完才放入該變數
  async function run() { return 'Hey run' }
  async function failed() { throw new Error() }
  (async () => {
    const a = await run() // 完成之後才做try catch
    try {
      const b = await failed()
    } catch (e) {
      console.log(e) // await failed 發生錯誤進入此
    }
    // 此行因為沒用 try catch 失敗，會導至 JS無法繼續執行
    const c = await failed() 
  })()
```

## try catch 的 finally
finally 不管正確、錯誤都會執行
finally 用途 確保 程式可以 close
//! 不應該於 finally 放 return
//* finally 的 return 會覆蓋 try 的 return

try catch 越精簡越好、效能較 if 較差
//? 因為 run time 才會做 compile
```js
  async function run() {
    let result = true
    try {
      return result
    } catch (e) {
      console.log(e)
      result = false
      return result
    } finally {
      console.log('return勿放此 此必會執行')
    }
  }
```