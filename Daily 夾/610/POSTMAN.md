# POSTMAN
API Client
develop test share document APIs
> https://goo.gl/mdWpvL

#7 之後未看 (較偏測試)

* Chrome app 已被棄用了!!
要下載 Download 版本
> https://app.getpostman.com/app/download/win64

* fake CRUD https://reqres.in/
* GET https://reqres.in/api/users?page=2

# Header View / Help
控制 UI用
Help 有各處連結 (Github...etc)

# 中間像 windows
可以創建新的工作區
可以儲存指令 下次就不需要重下

左上角 New Request (等同於 file/new)
給予 request name


# GET 那行左邊有個 Params
Body 區可用各種 形式閱覽 
JSON 旁邊的按鈕 為是否過長換行

右上 快速 Copy / 查詢 / Save Response

#  Save Response
Save Response / Save Example
會存在 你開的 Collection 底下之後可作修改＿

右上方有
Status Code / 耗時 / 資源大小

* Cookies
* Headers
* Test Results

# Collection
用於收藏指令，以便日後複用
group of api requests
* 可以快速設至共通的 Authorization (授權)
就不需要給每個指令都設 帳密
* 可設共通測試 & 變數

於 Collections Tab
...的按鈕 / Edit 可以再次編輯 上述設定
/ add folder 可收納 GET / POST 分類

往右建的箭頭
* run 可以  一次性執行 collection 下所有指令
案下 run 後可以 設至 delay & 要執行幾次
會幫你計算出 檔案大小 & 所耗時間 !
* 可以分享給另一個 工作區

# Variables
collection ... 按鈕 / edit / 可以設至 Variable
可以用來儲存變數
Ex: GET / POST requests 網址前面都一樣
創建後於 GET  雙括號帶入變數
{{url}}/api/users/2 

可以利用 View / Show POSTMAN console 查看網址是否正確

右上齒輪可以創建  Environment
眼睛符號為 快速預覽 Environment 變數設置
並可以設至 全域變數