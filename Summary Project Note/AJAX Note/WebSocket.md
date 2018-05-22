# WebSocket

## WebSocket 與 AJAX 的差異

WebSocket (雙向溝通)
可由後端發送資料過來

AJAX 
必須由前端發 request，才會接受到 ajax 的回應

## socket
用於即時性較高的應用。

## socket缺點
Server 需要承受的連線數量要很高。
因為要一直與 Client 保持連線，

大型網站都會有 low balance(負載平衡)，皆請求分散到各個 Server上去作處理。