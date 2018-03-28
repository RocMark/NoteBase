# Commit Msg撰寫

由一行摘要 (Summary) & 數行描述 (Description) 組成

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
> git 內置就支持的，你可以在每次提交時