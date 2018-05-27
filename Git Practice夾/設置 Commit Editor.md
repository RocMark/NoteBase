# 設置 Commit Editor
> 原文 http://t.cn/RmnzKQG
1. vscode 終端機  code --help
> 若無出現提示，見原文 
2. git config --global core.editor "code --wait"
3. git config --global -e  (此為全域設定)
//? 此會自動打開 .gitconfig 檔 設定在裡面
4. git config --local -e (此為本專案設定)
可查看 remote & 是否儲存帳號

5. git commit 不加 -m 會自動打開