#　前端 HTTP header  Status Code
> https://goo.gl/7a1498
> 簡報: https://slides.com/yi-tailin/deck-12/#/

## Why need to know HTTP
* 前後端合作
* 釐清責任歸屬 (避免被捅、背黑鍋)
* 了解瀏覽器運作原理

## HTTP
HTTP 是通訊協定，人與人溝通的語言
HTML 是網頁標記語言，瀏覽器中呈現視覺

## HTTPS
HTTP  未加密，只要攔截封包就可以看到傳送內容，危險
HTTPS 加密

## HTTP Header
傳送內容以外的資訊
內容格式、大小、多久過期、從哪裡來....等

內容大小: 可以用於計算需要多久之後才下載完成
多久過期: 多圖片的網站，快取機制

內容不一定都是 HTML
但 HTML必是內容之一

Header 一定在內容前面

## 封包分為兩區塊
HTTP Header 
  General Header
  Request / Response Header
  Entity Header

HTTP Body
  HTML、CSS、JS....

## 如何將資料傳送到對方的電腦

## TCP/IP 淺談
OSI 7層
應用/表現/會議/傳輸/網路/資料鏈結/實體層

TCP/IP 4層
應用層/傳輸層/網路層/實體層(主機至網路)

## 傳遞流程
傳出時 一層一層加上 Header (應用層->實體層)
接收時 一層一層拆掉 Header (實體層->應用層)
實體層時轉成 010101，借由網路設備達對方電腦

## 資料封包內容
UserData
UserData + AppHeader
上方的資料再加 + TCP Header [TCP segment]
上方的資料再加 + IP Header [IP segment] 
上方的資料再加 + Fram Header + Fram Trailer [Frame]

### TCP Header
主要任務: 資料分割，切成小塊小塊，接收時清點。
藉由 TCP Header 作編號
當封包遺失時，重新要求該部分即可

IP Header :註記要送到哪

### TCP/IP概念
切割成多個封包，必須要取得每一個封包，否則無法組裝

## 網址 / IP
1. 電腦 傳遞網址 給 DNS伺服器 (網址轉成IP位址)
2. DNS伺服器 會回應你 IP
3. 電腦再發 HTTP request 至該 IP
4. Server 回應 HTTP Response

## 後端運作流程 (見圖)
左下方開始，錯誤會顯示各種 HTTP Status

## Cookie & LocalStorage差異於
Cookie 會跟著 Header 被傳遞到 Server 後端去
LoSto 則否

* Cookie 可藉由 Server設定 無法使用 JS操作

## HTTP Header (見圖)

### Request Header 

### Request Format
[Browser -> Server]
內容:
* GET (method方法名)
* path (要求檔案的路徑)
* protocol (HTTP/1.1版)
* Host (瀏覽器存取的Host名稱)
因為一個IP可以綁定多個不同 Domain，
此時就需要知道 Host 要對應到哪個伺服器
* User-Agent 
瀏覽器 & OS 名稱/版本
* Accept-
瀏覽器接受的檔案類型 (q代表依序權重)
* Accept-Encoding 
大部分的瀏覽器都支援 gzip壓縮
* Date (當前時間/時區)
* Expect (較少用)
要求伺服器回應特定結果，結果仍由伺服器決定

* If-Modified-Since
瀏覽器cache檔案，下一次 request 則會發送此 header，
伺服器利用該時間來判斷是否修改過檔案，
無則回傳304 (表內容無異動)

* Cookie
把瀏覽器的cookie傳給伺服器，每個request都會包含 cookie(只要有設定)
因此 cookie越小越好

* Referer
瀏覽器前一個瀏覽頁面的網址，可用此 header 判斷request的來源，不可靠，因可能被串改

* Connection [重要]
可以設定 Keep-Alive保持連線時間、連線不中斷，
可繼續沿用此連線傳遞資料，減少重新連接TCP連限次數，提高傳輸效率

在做 HTTP連線時，最耗時的為 建立連線 & 關閉連線的動作
重建連線，會需要作很多 TCP/IP 連線的溝通(三向交握)
確定對方可接受後，將資料交過去後，關閉連線(也要三向)

* Content-Type (傳送內容的格式)
application/x-www-form-urlencoded
multipart/form-data;boundary=--xx 

* Authorization
1. Client 發 GET to Server
2. Server 回傳 401 (表未驗證)，並傳送要求驗證 header
3. 彈跳出要求輸入帳密
4. 輸入完後傳送，會先加密編碼後傳給 Server
5. Server 回傳 200(OK) 或 403 (Forbidden)

* Upgrade 升級至另一個協定 (websocket)
websocket 用於保持連線狀態，
不需要一個 request 對應一個 response，
可一直塞 request，亦可一直塞 response

* blank line (空白一行之後為傳送的內容 Ex: HTML)

### Response Header 
[Server -> Browser]

* Etag
產生檔案的 Hash Code給瀏覽器，下次瀏覽器可傳送
if-None-Match給伺服器判斷是否有修改過檔案
無則回傳304，並不含content

* Last-Modified
功能同 if-None-Match 記錄時間用，
傳 If-Modified-Since，無則回傳304，並不含content

* Catch-Control [重要]
可得知此檔案如何快取的、快取策略有哪些

max-age 則表可快取此檔案多久 
(多久後才來要求新的檔案)

no-cache 則表示不使用快取 (每次都要求新的)

* Content-Type 
表回應內容的格式
* Content-Length
內容大小，用於判斷下載的進度
* Content-Disposition (自動下載用)
讓瀏覽器可以自動打開下載視窗並且指定檔案名稱
* Content-Encoding
回應內容的壓縮格式
* Date 
通知伺服器時間

* Location
當狀態碼為 301 302時，瀏覽器會導向Location的網址
301 (Moved Permanently) //* 永久移至新網址 SEO(有)
302 (Found) //* 找到該網址 SEO(無)

* Set-Cookie
設定瀏覽器的 cookie，
瀏覽器收到此就會建立 cookie 於瀏覽器中
當下一次 request時，會將此 header 發送回 server端

* Access-Control-Allow-Origin [必知!!]

CORS (跨來源資源共用)
Cross-origin resource sharing

准許跨網域存取的 Domain，全部網域使用 * 字號
表示 script & link 標籤不在此限 

跨網域存取 
Ex: AJAX A網站 存取 B網站的 JSON檔案
會因為 同源政策，而不准許存取

解法1: 設定此Header [較佳]

解法2: JSONP (將JSON轉換成 JS)
=> 通常用於存取他人的資料，因為後端無法幫設此 Header

* X-Frame-Options
可以避免此網頁被加入 iframe / frame / object 載入
必須要相同網域才可以放，跨域(X)

確保內容不會被嵌入道其他網站、避免 clickJacking 攻擊

clickJacking (掛羊頭賣狗肉)
假網站誘 User 輸入 帳密，背後是銀行...etc
> 詳解 https://goo.gl/1qfTwZ

* Upgrade
確認升級至新的協定，此時 connection 也會同時回應 Upgrade
Connection: Upgrade
Upgrade: websocket

* Status Code
* Server (Apache)
* blank line (空白一行之後為傳送的內容 Ex: HTML)

#### HTTP 1.1快取機制
https://goo.gl/zi34K8


## 如何查看 Header
Chrome Dev Tools

NetWork F5 點選任意檔案 Header會 show於右方

General 較重要的資訊
Request Headers  (view source) 可查看較原始的

Preview 可以解析傳送的檔案內容
Response 則是純文字

## Fiddler
> https://goo.gl/2F7tfu

免費 Web Debug工具
會接受電腦所有接受到的封包，並且可以查看
可用於 FireFox / IE 各瀏覽器皆可

## HTTP Method
GET  帶參數 會寫在網址上
POST 帶參數 會寫於 Content中

## Status Code 分類 (以開頭)
> Cheat Sheet https://goo.gl/8WFwyz
> Wiki https://goo.gl/jyed9g

1XX 訊息類 (收到請求，請求者繼續執行操作)
2XX 成功類 (操作被成功接受並處理)
3XX 重定向類 (需進一步操作才能完成)
4XX 客戶端錯誤類 (請求語法錯誤或無法完成請求)
5XX 伺服器錯誤類 (後端的問題)

## 常用 Status Code 

* 100 Continue (較少用了)
Server 期望收到更多資訊
通常是 Request 的 header有帶 Expect要求回應100

* 101 Switching Protocols
常用於 websocket 初始化，
然後切換至TCP連線，才可進行雙向資料傳輸

* 200 OK 請求正常

* 301 Moved Permanently
永久移動至新的網址，SEO會被更新
必須有 Location 的 header

* 302 Found
找到網址，SEO不會被更新
必須有 Location 的 header
Ex: 表單作完了，連接到下一個頁面

* 304 Not Modified
內容未修改過就會回應，回應不包含Content
=> 使用 browser中的快取

* 307 Temporary Redirect
暫時重新導向，類似 302

302 從 POST 進入，會改從 GET導向網址
307 則會將 POST代入該網址，並將資料一併攜帶過去

* 308 Permanent Redirect
同 302 & 307 的關係
永久重新導向，但不變更請求方法

* 401 Unauthorized
未驗證 拒絕存取

* 403 Forbidden
伺服器接受請求，但被拒絕處理
Ex: 作了過多次的網站驗證

* 404 Not Found
伺服器找不到要求的網頁

* 413 Request Entity Too Large (較少用了)
GET 傳送 URL 超過上限大小 (8KB)

* 500 Internal Server Error
伺服器發生錯誤，後端程式有問題

* 503 Service Unavailable
伺服器維護、過載，伺服器當前無法處理請求