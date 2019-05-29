# JSON-Server架構

npm install json-server -g
json-server --watch data/data.json

# RESTFUL 
具象狀態傳輸，可以從url解讀出他的請求
GET POST PUT PATCH DELETE 

//!!!!!!  重要
input required 輸入空白仍可以通過

//* 先去除頭尾空白，在判斷是否為空資料
if(input.val().trim()){//有值}

if (!inputName) return false

//* 去除字間空白
.replace(/\W|_/g, '')