# Pug 環境架設

# 架設環境
npm install -g pug
npm install pug-cli -g
pug --help

# pug option
pug -w ./src/index.pug ./dest -P

* -w 監聽
* -P 排版  (未加即為壓縮版)
* -o 

# 輸出檔案
檔案資料夾已 tmp 為例
pug tmp 即可輸出於該資料夾

# vscode-puglint 插件
1. npm i -g pug-lint 
2. 安裝 vscode 上的插件
3. Settings 
"puglint.enable": true
4. 搜尋 Settings 中 puglint.config
可以在此關閉規則