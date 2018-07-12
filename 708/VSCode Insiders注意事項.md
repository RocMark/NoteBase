# VSCode Insiders注意事項

# terminal
* 修改環境變數
C:\Program Files\Microsoft VS Code Insiders\bin;
C:\Program Files\Microsoft VS Code\bin;
* 使用 code-insiders . 開啟!!!!
> 而非 code .

# git 預設編輯器
確認 code-insiders 可以運行
* 設定完成後，使用 git commit 即可

* 輸入指令
git config --global core.editor "code-insiders --wait"
* 檢查是否成功
git config --global -e