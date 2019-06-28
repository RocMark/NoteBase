# Commit Msg撰寫
由一行摘要 (Summary) & 數行描述 (Description) 組成
> git commit -m "Summary" -m "Description ......"

# 重點
1. 摘要限制一行，一般Commit Logs只會先顯示第一行
2. 表達意圖原因、要解決的問題、有沒有什麼副作用
> 而非程式碼的註解

3. 善用 表示目的描述字眼
//? Fix, add, move, update, change, use , improve,upgrade,enhance…

4. 若有 Issue tracking system，ticket Number可加上。

5. 若難以摘要 代表包含太多變更在同一個Commit了
-> 拆開 commit 藉以解決

Ex: 修Bugs, 新增 feature, ...等不同目的修改分開 commit

6. 一個 commit 應該要 "Atomic" 
> 不應該將作業進行到一半就進行 Commit
> 善用 Stash

7. 內容盡量包含關鍵字，方便搜尋
8. 內容可以解釋 what and why vs. how

# 規格限制
1. 將標題與內容中間多一行空白
2. 標題限制 50 字元
3. 標題第一個字必須為大寫
4. 標題最後不要帶上句號
5. 標題內容可以使用強烈的語氣
6. 內容請用 72 字元來斷行

# 5W1H 法則
who / when / where / why / what / how
> who & when 會自動記錄
> where 不需要記錄

//! 需關注的點為: what , why , how

# 設置 .gitmessage 模板
> git 內置就支持的，你可以在每次提交時始用 Template

1. 建立 .gitmessage file
2. 內文撰寫 Template
3. 設定template
git config commit.template "補上資料夾位置"/.gitmessage
4. git commit 即可 進入編寫

//* 取消設定 git config --unset ~
//? git config -l 可查看有哪些設定可用

# Type
feat： 新增feature
fix: 修復bug
docs: 僅修改了文檔，比如README, CHANGELOG, CONTRIBUTE等等
style: 僅修改了空格、格式縮進、都好等等，不改變代碼邏輯
refactor: 代碼重構，沒有加新功能或者修復bug
perf: 優化相關，比如提升性能、體驗
test: 測試用例，包括單元測試、集成測試等
chore: 改變構建流程、或者增加依賴庫、工具等
revert: 回滾到上一個版本

