# [VSCode Snippets](https://pjchender.blogspot.tw/2017/04/vs-code-snippet.html)

檔案 - 喜好設定 - 使用者程式碼片段
選擇與延後會進入一個JSON檔案

	"程式碼片段名稱": {
		"prefix": "程式碼縮寫",
		"body": [
			"console.log('$0');",
			"程式碼片段內容 $1為插入後游標停留位置 $2 Tab 後的位置"
		],
		"description": "描述程式碼片段用途"
	}

若你自訂的Snippets並非第一個
可以至  檔案 - 喜好設定 - 設定 ， 加入下列
"editor.snippetSuggestions": "top",