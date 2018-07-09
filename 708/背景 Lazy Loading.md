# background lazy loading 
圖片載入時間為 何時放入 即何時開始 loading
> CSS 中 bg: url('') 也會於一開始就會讀取了
* 當要讓他讀時再寫入 bg:url() 
即可做到 lazy loading

* base64 只用於小圖較佳 (10K左右 icon/小logo)
base64 重點在 減少 request 
base64 不會發送請求，會將內容轉成文字
* base64 會把容量變大，因此大圖用 request較佳
大圖的問題在於 讀取時間

* sprite 仍會有一個 request
